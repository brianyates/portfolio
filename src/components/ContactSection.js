import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg + theme.spacing(6),
    margin: "auto",
    padding: `0 ${theme.spacing(3)}px`,
  },
  heading: {
    margin: `${theme.spacing(3)}px 0`,
    fontWeight: "bold",
  },
}));

const ContactSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12} md={5}>
          <SectionHeader label="contact" />
          <Typography className={classes.heading} variant="h4">
            Hit me up! <span>🤙</span>
          </Typography>
          <Typography>
            If you want to learn more about what I can offer or just want to
            chat, please feel to send me a message...I'm just a few keystrokes
            away.
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}></Grid>
      </Grid>
    </div>
  );
};

export default ContactSection;
