import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GatsbyImage from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import AboutCodeEditor from "./AboutCodeEditor";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg + theme.spacing(6),
    margin: "auto",
    padding: `0 ${theme.spacing(3)}px`,
  },
  imageContainer: {
    marginBottom: theme.spacing(3)
  }
}));

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "brian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <div className={classes.imageContainer}>
            <GatsbyImage fluid={data.image.childImageSharp.fluid} />
          </div>
          <div>
            <Typography color="inherit">{lorem}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div>
            <AboutCodeEditor />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutSection;
