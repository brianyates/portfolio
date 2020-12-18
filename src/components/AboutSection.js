import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GatsbyImage from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import { useTrail, animated } from "react-spring";
import AboutCodeEditor from "./AboutCodeEditor";
import SectionHeader from "./SectionHeader";
import AboutAdditionalSection from "./AboutAdditionalSection";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg + theme.spacing(6),
    margin: "auto",
    padding: `0 ${theme.spacing(3)}px`,
  },
  imageContainer: {
    marginBottom: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
  },
  textItem: {
    marginTop: theme.spacing(3)
  },
}));

const paragraph1 =
  "I'm an engineer from Pittsburgh, Pennsylvania. After graduating from Penn State in 2012, I migrated below the Mason Dixon to Florida, then North Carolina in 2014. I started my career in manufacturing, but quickly discovered that I had a secret addiction to programming.";
const paragraph2 =
  "I started by writing simple VBA scripts to make my job easier, then progressed into using cooler languages like Python, Ruby and JavaScript to build hobby apps. I knew I needed to make a career of coding, so in 2019 I finangled my way into a full-time developer role at Allstate after months of learning and networking.";

const AboutSection = ({ isVisible }) => {
  const [hasRendered, setHasRendered] = React.useState(false);
  const classes = useStyles();
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
  React.useEffect(() => {
    if (isVisible && !hasRendered) {
      setHasRendered(true);
    }
  }, [isVisible]);
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <SectionHeader label={"about"} />
          <Typography variant="h4" className={classes.textItem}><strong>Hi, I'm Brian <span>👋</span></strong></Typography>
          <Typography className={classes.textItem}>{paragraph1}</Typography>
          <Typography className={classes.textItem}>{paragraph2}</Typography>
          <div>
            <AboutAdditionalSection hasRendered={hasRendered} />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div>
            <AboutCodeEditor isVisible={isVisible} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutSection;
