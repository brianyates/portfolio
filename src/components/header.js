import React from "react";
import { useSpring, animated } from "react-spring";
import {
  teal,
  blue,
  lightBlue,
  purple,
  indigo,
  deepPurple,
  cyan,
  pink
} from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40
];
const trans = (x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    animation: `$colors 5s ${theme.transitions.easing.easeInOut} 0s infinite alternate-reverse none`,
    textAlign: "center",
    cursor: "default",
    "& h1": {
      fontSize: "12vw",
      lineHeight: 1
    },
    "& p": {
      fontSize: "4vw",
      letterSpacing: "1vw",
    }
  },
  divider: {
    display: "block",
    width: "11vw",
    height: 3,
    borderRadius: 4,
    background: theme.palette.common.white,
    margin: `${theme.spacing(3)} auto`,
    animation: `$colors 5s ${theme.transitions.easing.easeInOut} 0s infinite alternate-reverse none`,
  },
  "@keyframes colors": {
    "0%": {
        backgroundPositionX: "0%"
    },
    "100%": {
        backgroundPositionX: "100%"
    }
  }
}))

const Header = () => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const updateMousePosition = e => {
    set({ xy: calc(e.clientX, e.clientY) });
  };
  const handleMouseLeave = () => {
    set({ xy: [0, 0]})
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <header className={classes.root} onMouseMove={updateMousePosition} role="banner" onMouseLeave={handleMouseLeave}>
      <Navbar />
      <animated.div
        className={classes.headerText}
        style={{
          background: `linear-gradient(45deg, ${teal[200]}, ${cyan[200]}, ${lightBlue[200]}, ${blue[200]}, ${indigo[200]}, ${deepPurple[200]}, ${purple[200]}, ${pink[200]})`,
          WebkitTextFillColor: "transparent",
          boxDecorationBreak: "clone",
          WebkitBackgroundClip: "text",
          textShadow: "none",
          backgroundSize: "300%",
          transform: props.xy.interpolate(trans),
        }}
      >
        <h1>Brian Yates</h1>
        <p>SOFTWARE DEVELOPER</p>
      </animated.div>
    </header>
  );
};

export default Header;
