import React from "react";
import { throttle } from "lodash";
import Grid from "@material-ui/core/Grid";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import { NAV_HEIGHT } from "../constants";
import ProjectInfoContainer from "./ProjectInfoContainer";

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
    paddingBottom: theme.spacing(6)
  },
}));

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const PROJECT_COUNT = 2;
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
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      href: "https://wavefoundry.io",
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
    return <ProjectInfoContainer {...other} key={`container-${idx}`} active={idx === activeIndex} />;
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
