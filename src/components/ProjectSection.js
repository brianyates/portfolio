import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import ProjectInfoContainer from "./ProjectInfoContainer";
import NodeIcon from "./icons/NodeIcon";
import ReactIcon from "./icons/ReactIcon";
import GoogleCloudIcon from "./icons/GoogleCloudIcon";
import GatsbyIcon from "./icons/GatsbyIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import RubyIcon from "./icons/RubyIcon";
import JQueryIcon from "./icons/JQueryIcon";
import PostgresIcon from "./icons/PostgresIcon";
import NetlifyIcon from "./icons/NetlifyIcon";
import SectionHeader from "./SectionHeader";
import TechStackContainer from "./TechStackContainer";
import ArrowButton from "./ArrowButton";
import ProjectImageContainer from "./ProjectImageContainer";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    color: theme.palette.common.white,
  },
  contentContainer: {
    maxWidth: theme.breakpoints.values.lg + theme.spacing(6),
    padding: `0 ${theme.spacing(3)}px`,
    margin: "auto",
  },
  imageContainer: {
    paddingTop: theme.spacing(2),
    "& .big-image": {
      borderRadius: 8,
      overflow: "hidden",
    },
    "& .image-grid": {
      display: "flex",
      alignItems: "center",
      margin: theme.spacing(1) * -1,
      "& .mobile-image-wrapper": {
        flexBasis: "30%",
        maxWidth: "30%",
        padding: theme.spacing(1),
      },
      "& .other-image-wrapper": {
        flexBasis: "70%",
        maxWidth: "70%",
        padding: theme.spacing(1),
        "& .other-image": {
          overflow: "hidden",
          borderRadius: 8,
        },
      },
    },
  },
  infoContainer: {
    position: "sticky",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    zIndex: 50,
    left: 0,
    top: 0,
    "& .message": {
      margin: `${theme.spacing(2)}px 0 ${theme.spacing(3)}px`,
    },
    "& .controls-container": {
      margin: `${theme.spacing(2)}px 0 ${theme.spacing(3)}px -${theme.spacing(
        1
      )}px`,
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
  mobileContainer: {
    "& .label-container": {
      paddingTop: theme.spacing(2),
    },
    "& .header-container": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    "& .image-container": {
      borderRadius: theme.shape.borderRadius,
      overflow: "hidden",
    },
    "& .message-container": {
      margin: `${theme.spacing(2)}px 0`,
    },
    "& .arrow-btn-container": {
      paddingBottom: theme.spacing(2),
    },
  },
  projectGridItem: {
    paddingTop: "0px !important",
  },
}));

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      till1: file(relativePath: { eq: "till_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      till2: file(relativePath: { eq: "till_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tillMobile: file(relativePath: { eq: "till_mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dzignStudio1: file(relativePath: { eq: "dzign_studio_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dzignStudioMobile: file(relativePath: { eq: "dzign_studio_mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dzignStudio2: file(relativePath: { eq: "dzign_studio_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wavefoundry1: file(relativePath: { eq: "wavefoundry_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wavefoundryMobile: file(relativePath: { eq: "wavefoundry_mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wavefoundry2: file(relativePath: { eq: "wavefoundry_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quipquotes1: file(relativePath: { eq: "quipquotes_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quipquotesMobile: file(relativePath: { eq: "quipquotes_mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      quipquotes2: file(relativePath: { eq: "quipquotes_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      philipsAcademy1: file(relativePath: { eq: "philips_academy_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      philipsAcademyMobile: file(relativePath: { eq: "philips_academy_mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      philipsAcademy2: file(relativePath: { eq: "philips_academy_2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const mapImages = imageArray => {
    const [bigImage, mobileImage, otherImage] = imageArray;
    return (
      <>
        <div key="image-1" className={classes.imageContainer}>
          <div className="big-image">
            <GatsbyImage
              fluid={bigImage.childImageSharp.fluid}
              loading="eager"
            />
          </div>
        </div>
        <div key="image-2" className={classes.imageContainer}>
          <div className="image-grid">
            <div className="mobile-image-wrapper">
              <GatsbyImage
                fluid={mobileImage.childImageSharp.fluid}
                loading="eager"
              />
            </div>
            <div className="other-image-wrapper">
              <div className="other-image">
                <GatsbyImage
                  fluid={otherImage.childImageSharp.fluid}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
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
      images: [data.till1, data.tillMobile, data.till2],
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
          label: "Node.js",
          Icon: NodeIcon,
        },
        {
          label: "Firebase",
          Icon: FirebaseIcon,
        },
      ],
      images: [data.dzignStudio1, data.dzignStudioMobile, data.dzignStudio2],
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
      images: [data.quipquotes1, data.quipquotesMobile, data.quipquotes2],
    },
    {
      name: "PHILIPS ACADEMY",
      id: "philips-academy",
      description:
        "Philips Academy is a private non-profit school for students in middle school and high school with learning disabilities. Its mission is to provide students with the academic, occupational and social skills needed to be self-reliant, confident and contributing members of their communities.",
      href: "https://philipsacademync.org",
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
          label: "Netlify",
          Icon: NetlifyIcon,
        },
      ],
      images: [data.philipsAcademy1, data.philipsAcademyMobile, data.philipsAcademy2],
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
      images: [data.wavefoundry1, data.wavefoundryMobile, data.wavefoundry2],
    },
  ];
  const InfoContainers = projects.map(({ images, id, ...other }, idx) => {
    return (
      <ProjectInfoContainer
        {...other}
        id={id}
        key={id}
        active={idx === activeIndex}
      />
    );
  });
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <Hidden smDown implementation="css">
          <Grid container spacing={4}>
            <Grid item xs={12} md={5} className={classes.projectGridItem}>
              <div className={classes.infoContainer}>
                <SectionHeader label="projects" />
                <div className="controls-container">
                  {projects.map(({ id }, i) => {
                    return (
                      <div key={`button-${i}`}>
                        <a
                          href={`/#${id}`}
                          aria-label={`Project navigation button ${i + 1}`}
                          className={`control-btn${
                            i === activeIndex ? " active" : ""
                          }`}
                        >
                          <span />
                        </a>
                      </div>
                    );
                  })}
                </div>
                {InfoContainers[activeIndex]}
              </div>
            </Grid>
            <Grid item xs={12} md={7} className={classes.projectGridItem}>
              <div>
                {projects.map(({ images, id }, idx) => {
                  const handleIntersect = () => {
                    setActiveIndex(idx);
                  };
                  return (
                    <ProjectImageContainer
                      id={id}
                      key={`images-${idx}`}
                      handleIntersect={handleIntersect}
                    >
                      {mapImages(images)}
                    </ProjectImageContainer>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.mobileContainer}>
            <div className="label-container">
              <SectionHeader label="projects" />
            </div>
            {projects.map(project => {
              return (
                <div key={`mobile-${project.name}`}>
                  <div className="header-container">
                    <Typography variant="h4" className="header">
                      <strong>{project.name}</strong>
                    </Typography>
                  </div>
                  <div className="image-container">
                    <GatsbyImage
                      fluid={project.images[0].childImageSharp.fluid}
                    />
                  </div>
                  <div className="message-container">
                    <Typography>{project.description}</Typography>
                  </div>
                  <div>
                    <TechStackContainer stack={project.stack} />
                  </div>
                  <div className="arrow-btn-container">
                    <ArrowButton label="VIEW PROJECT" href={project.href} />
                  </div>
                </div>
              );
            })}
          </div>
        </Hidden>
      </div>
    </div>
  );
};

export default ProjectSection;
