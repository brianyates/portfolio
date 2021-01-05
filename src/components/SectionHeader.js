import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    letterSpacing: 3,
    fontSize: 14,
    fontWeight: "bold",
    color: teal[100],
  },
}));
const SectionHeader = ({ label }) => {
  const classes = useStyles();
  return (
    <Typography className={`${classes.root}`}>{label.toUpperCase()}</Typography>
  );
};

export default SectionHeader;
