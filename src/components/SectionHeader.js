import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { blue, purple, teal } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    letterSpacing: 3,
    fontSize: 14,
    fontWeight: "bold",
    "&.projects": {
      color: teal[100],
    },
    "&.about": {
      color: blue[100],
    },
    "&.contact": {
      color: purple[100],
    },
  },
}));
const SectionHeader = ({ label }) => {
  const classes = useStyles();
  return (
    <Typography className={`${classes.root} ${label}`}>
      {label.toUpperCase()}
    </Typography>
  );
};

export default SectionHeader;
