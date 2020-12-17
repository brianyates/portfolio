import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ArrowButton from "./ArrowButton";
import { NAV_HEIGHT } from "../constants";
import ProjectItem from "./ProjectItem";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    color: theme.palette.common.white,
  },
  contentContainer: {
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
  },
  infoSection: {
    position: "absolute",
    zIndex: 50,
    left: 0,
    width: "100%",
    "&.fixed": {
      position: "fixed",
      top: NAV_HEIGHT,
    },
    "& .content-container": {
      maxWidth: theme.breakpoints.values.lg,
      margin: "auto",
      "& .content": {
        width: "33.333333%",
      },
    },
    "& .message": {
      margin: `${theme.spacing(3)}px 0`,
    },
  },
}));
const ProjectSection = ({ active }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={`${classes.infoSection}${active ? " fixed" : ""}`}>
        <div className="content-container">
          <div className="content">
            <Typography variant="h3">
              <strong>TILL</strong>
            </Typography>
            <Typography className="message">
              I got your message...glad you saw my post on Reddit! I'd love to
              chat whenever you're free; let me know what time works best for
              you. My schedule is pretty open the rest of this week.
            </Typography>
            <div>
              <ArrowButton label="VIEW PROJECT" href="/" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contentContainer}>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <ProjectItem />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProjectSection;
