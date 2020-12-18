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
    paddingTop: NAV_HEIGHT + theme.spacing(1),
    paddingBottom: theme.spacing(6),
    zIndex: 50,
    left: 0,
    top: 0,
    width: "100%",
    "& .message": {
      margin: `${theme.spacing(3)}px 0`,
    },
  },
  projectsContainer: {
    paddingTop: NAV_HEIGHT + theme.spacing(1),
    paddingBottom: theme.spacing(6),
  },
}));

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

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
      description: lorem,
      href: "https://usetill.com",
      stack: [
        {
          label: "Node.js",
          Icon: NodeIcon,
        },
        {
          label: "React.js",
          Icon: ReactIcon
        },
        {
          label: "Google Cloud",
          Icon: GoogleCloudIcon
        }
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
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      href: "https://shopdzignstudio.com",
      stack: [
        {
          label: "React.js",
          Icon: ReactIcon
        },
        {
          label: "Gatsby.js",
          Icon: GatsbyIcon,
        },
        {
          label: "Firebase",
          Icon: FirebaseIcon
        }
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
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      href: "https://quipquotes.com",
      stack: [
        {
          label: "Ruby on Rails",
          Icon: RubyIcon
        },
        {
          label: "jQuery",
          Icon: JQueryIcon,
        },
        {
          label: "PostgreSQL",
          Icon: PostgresIcon
        }
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
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      href: "https://wavefoundry.io",
      stack: [
        {
          label: "React.js",
          Icon: ReactIcon
        },
        {
          label: "Gatsby.js",
          Icon: GatsbyIcon,
        },
        {
          label: "Firebase",
          Icon: FirebaseIcon
        }
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
      for (let i = 0; i < projects.length; i++) {
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
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={`${classes.infoContainer}`}>
              {InfoContainers[activeIndex]}
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.projectsContainer}>
              {projects.map(({ images }, idx) => {
                return (
                  <div key={`images-${idx}`} ref={el => refs.current.push(el)}>
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
