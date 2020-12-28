import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CONTACT, NAV_HEIGHT, PROJECTS, ABOUT } from "../constants";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: 100,
    display: "flex",
    height: NAV_HEIGHT,
    alignItems: "center",
    "&.fixed": {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: "auto",
    },
    "& > ul": {
      display: "flex",
      listStyleType: "none",
      width: "100%",
      justifyContent: "space-between",
      maxWidth: theme.breakpoints.values.lg + theme.spacing(6),
      padding: `0 ${theme.spacing(3)}px`,
      margin: "0 auto",
      "& > li": {
        flexGrow: 1,
        textAlign: "center",
      },
      "& > li:first-child": {
        textAlign: "left",
      },
      "& > li:last-child": {
        textAlign: "right",
      },
      "& > li > a": {
        color: theme.palette.grey[500],
        fontSize: "1rem",
        letterSpacing: 3,
        textDecoration: "none",
        transition: `color ${theme.transitions.duration.shorter}ms`,
        "&:hover, &:focus": {
          color: theme.palette.common.white,
        },
      },
    },
  },
}));

const navItems = [PROJECTS, ABOUT, CONTACT];

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={item}>
              <a href={`#${item}`}>{item.toUpperCase()}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
