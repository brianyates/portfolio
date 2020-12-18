import React from "react";
import { throttle } from "lodash";
import Grid from "@material-ui/core/Grid";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import { NAV_HEIGHT } from "../constants";
import ProjectInfoContainer from "./ProjectInfoContainer";
import NodeIcon from "./icons/NodeIcon";
import ReactIcon from "./icons/ReactIcon";
import GoogleCloudIcon from "./icons/GoogleCloudIcon";
import GatsbyIcon from "./icons/GatsbyIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import RubyIcon from "./icons/RubyIcon";
import JQueryIcon from "./icons/JQueryIcon";
import PostgresIcon from "./icons/PostgresIcon";
import { Typography } from "@material-ui/core";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    color: theme.palette.common.white,
  },
  contentContainer: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
  },
  infoContainer: {
    position: "sticky",
    paddingTop: theme.spacing(3),
    zIndex: 50,
    left: 0,
    top: 0,
    width: "100%",
    height: `100vh`,
    "& .message": {
      margin: `${theme.spacing(2)}px 0 ${theme.spacing(3)}px`,
    },
    "& .controls-container": {
      margin: `${theme.spacing(2)}px 0 ${theme.spacing(3)}px -${theme.spacing(1)}px`,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "& .control-btn": {
        width: 8,
        height: 8,
        display: "inline-block",
        borderRadius: 9999,
        margin: `0 ${theme.spacing(1)}px`,
        backgroundColor: "rgba(0, 0, 0, 0)",
        border: `1px solid ${theme.palette.grey[500]}`,
        cursor: "pointer",
        transition: `border-color ${theme.transitions.duration.shorter}ms, background-color ${theme.transitions.duration.shorter}ms`,
        "&.active": {
          borderColor: theme.palette.grey[200],
          backgroundColor: theme.palette.grey[200],
        },
      },
    },
  },
  projectsContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
}));

const PROJECT_COUNT = 4;
const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const projects = [
    {
      name: "TILL",
      id: "till",
      description:
        "Till is a food delivery service which allows customers to order locally-sourced produce, meats and pantry items from local farms, delivered right to their doorstep. Customers can search for food from over 20 artisan farmers and learn about the origins of each farm. Till currently has a userbase of over 650 customers which grows every week.",
      href: "https://usetill.com",
      stack: [
        {
          label: "Node.js",
          Icon: NodeIcon,
        },
        {
          label: "React.js",
          Icon: ReactIcon,
        },
        {
          label: "Google Cloud",
          Icon: GoogleCloudIcon,
        },
      ],
      images: (
        <>
          <div>
            <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
          </div>
          <div>
            <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
          </div>
        </>
      ),
    },
    {
      name: "DZIGN STUDIO",
      id: "dzign-studio",
      description:
        "Dzign Studio is an online boutique specializing in selling custom poured acrylic, industrial frames, and woodwork. Built with Gatsby and Firebase, this web app offers a vast array of product customization features to help cover the broad spectrum of available product options.",
      href: "https://shopdzignstudio.com",
      stack: [
        {
          label: "React.js",
          Icon: ReactIcon,
        },
        {
          label: "Gatsby.js",
          Icon: GatsbyIcon,
        },
        {
          label: "Firebase",
          Icon: FirebaseIcon,
        },
      ],
      images: (
        <>
          <div>
            <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
          </div>
          <div>
            <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
          </div>
        </>
      ),
    },
    {
      name: "QUIPQUOTES",
      id: "quipquotes",
      description:
        "QuipQuotes is a software service which provides heavy construction equipment buyers the ability to easily request quotes from equipment dealers in their area. Equipment dealers can also track their requests and quickly provide quotes and additional feedback.",
      href: "https://quipquotes.com",
      stack: [
        {
          label: "Ruby on Rails",
          Icon: RubyIcon,
        },
        {
          label: "jQuery",
          Icon: JQueryIcon,
        },
        {
          label: "PostgreSQL",
          Icon: PostgresIcon,
        },
      ],
      images: (
        <>
          <div>
            <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
          </div>
          <div>
            <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
          </div>
        </>
      ),
    },
    {
      name: "WAVEFOUNDRY",
      id: "wavefoundry",
      description:
        "Wavefoundry is a tech consulting business aimed at building websites and web applications for small businesses using the latest and greatest web development tools and frameworks. It's maintained and operated by yours truly.",
      href: "https://wavefoundry.io",
      stack: [
        {
          label: "React.js",
          Icon: ReactIcon,
        },
        {
          label: "Gatsby.js",
          Icon: GatsbyIcon,
        },
        {
          label: "Firebase",
          Icon: FirebaseIcon,
        },
      ],
      images: (
        <>
          <div>
            <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
          </div>
          <div>
            <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
          </div>
        </>
      ),
    },
  ];
  const refs = React.useRef([]);
  React.useEffect(() => {
    const handleScroll = throttle(() => {
      for (let i = 0; i < PROJECT_COUNT; i++) {
        const { top, bottom } = refs.current[i].getBoundingClientRect();
        if (top <= NAV_HEIGHT && bottom >= NAV_HEIGHT) {
          setActiveIndex(i);
          break;
        }
      }
    }, 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const InfoContainers = projects.map(({ images, ...other }, idx) => {
    return (
      <ProjectInfoContainer
        {...other}
        key={`container-${idx}`}
        active={idx === activeIndex}
      />
    );
  });
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <div className={`${classes.infoContainer}`}>
              <SectionHeader label={"projects"} />
              <div className="controls-container">
                {projects.map(({ id }, i) => {
                  return (
                    <div key={`button-${i}`}>
                      <a
                        href={`/#${id}`}
                        aria-label="Project navigator"
                        className={`control-btn${
                          i === activeIndex ? " active" : ""
                        }`}
                      ></a>
                    </div>
                  );
                })}
              </div>
              {InfoContainers[activeIndex]}
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.projectsContainer}>
              {projects.map(({ images, id }, idx) => {
                return (
                  <div
                    key={`images-${idx}`}
                    ref={el => refs.current.push(el)}
                    id={id}
                  >
                    {images}
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProjectSection;
