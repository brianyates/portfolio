import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CONTACT, NAV_HEIGHT, PROJECTS, ABOUT } from "../constants";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    left: 0,
    bottom: 0,
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
      maxWidth: theme.breakpoints.values.lg,
      margin: "0 auto",
      "& > li": {
        flexGrow: 1,
        textAlign: 'center'
      },
      "& > li:first-child": {
        textAlign: "left"
      },
      "& > li:last-child": {
        textAlign: "right"
      },
      "& > li > a": {
        color: theme.palette.common.white,
        opacity: 0.6,
        fontSize: "1rem",
        letterSpacing: 3,
        textDecoration: "none",
        transition: `opacity ${theme.transitions.duration.shorter}ms`,
        "&.active, &:hover, &:focus": {
          opacity: 1,
        },
      },
    },
  },
}));

const navItems = [PROJECTS, ABOUT, CONTACT];

const Navbar = ({ navFixed, activeIndex, backgroundColor }) => {
  const classes = useStyles();
  return (
    <nav className={`${classes.root}${navFixed ? " fixed" : ""}`} style={{ backgroundColor }}>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeIndex === index ? "active" : ""}
              >
                {item.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
