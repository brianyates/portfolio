import React from "react";
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  imageContainer: {
    width: "100%",
  },
}));

const ProjectItem = () => {
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
  return (
    <div>
      <div className={classes.imageContainer}>
        <GatsbyImage fluid={data.image1.childImageSharp.fluid} />
      </div>
    </div>
  );
};

export default ProjectItem;
