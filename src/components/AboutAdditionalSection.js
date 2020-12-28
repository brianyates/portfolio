import React from "react";
import { animated, useTrail } from "react-spring";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GatsbyImage from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  icon: {
    width: 90,
    marginBottom: theme.spacing(1.5),
  },
  header: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  description: {
    opacity: 0.6,
  },
  also: {
    padding: `${theme.spacing(3)}px 0 0 0`,
    fontWeight: "bold",
    opacity: 0.6,
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(2) * -1,
  },
  gridItem: {
    padding: theme.spacing(2),
    "&.full-width": {
      flexBasis: "100%",
      maxWidth: "100%",
      paddingBottom: 0
    },
    "&.half-width": {
      flexBasis: "50%",
      maxWidth: "50%",
    },
  },
}));

const AboutAdditionalSection = ({ hasRendered }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      music: file(relativePath: { eq: "music.png" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beer: file(relativePath: { eq: "beer.png" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      travel: file(relativePath: { eq: "travel.png" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coding: file(relativePath: { eq: "coding.png" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const items = [
    {
      image: data.music,
      header: "I love music",
      description:
        "Particularly, punk rock music. I play guitar, bass and drums - I was also in an acapella group in college.",
    },
    {
      image: data.beer,
      header: "I love beer",
      description:
        "But not too much. I frequent local Charlotte breweries with friends and family - Wooden Robot is my favorite.",
    },
    {
      image: data.travel,
      header: "I enjoy travelling",
      description:
        "Whether it's visiting friends in other states or visiting new countries with my wife, it's all fun.",
    },
    {
      image: data.coding,
      header: "I code often",
      description:
        "Too much, even. Before work, during work, after work...but I love learning about the vast world of technology.",
    },
  ];
  const components = [
    <Typography variant="h6" className={classes.also}>
      ALSO
    </Typography>,
    ...items.map(({ image, header, description }, index) => {
      return (
        <>
          <div className={classes.icon}>
            <GatsbyImage fluid={image.childImageSharp.fluid} loading="eager" />
          </div>
          <Typography className={classes.header}>{header}</Typography>
          <Typography className={classes.description}>{description}</Typography>
        </>
      );
    }),
  ];
  const trail = useTrail(components.length, {
    config: { mass: 1, tension: 2000, friction: 200 },
    opacity: hasRendered ? 1 : 0,
    y: hasRendered ? 0 : 20,
    from: { opacity: 0, y: 20 },
  });
  return (
    <div className={classes.gridContainer}>
      {trail.map(({ y, ...rest }, index) => (
        <animated.div
          key={index}
          style={{
            ...rest,
            transform: y.interpolate(val => `translateY(${val}px)`),
          }}
          className={`${classes.gridItem} ${
            index === 0 ? "full-width" : "half-width"
          }`}
        >
          {components[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default AboutAdditionalSection;
