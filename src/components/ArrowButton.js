import React from "react";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";

const transitionDuration = 100;
const useStyles = makeStyles(theme => ({
  root: {
    display: "inline-flex",
    border: `1px solid ${theme.palette.common.white}`,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    borderRadius: theme.shape.borderRadius,
    lineHeight: 0,
    fontSize: "1.1rem",
    textDecoration: "none",
    alignItems: "center",
    color: theme.palette.common.white,
    backgroundColor: "rgba(255, 255, 255, 0)",
    transition: `background-color ${transitionDuration}ms`,
    '&:hover, &:focus': {
        backgroundColor: "rgba(255, 255, 255, .1)"
    },
    "& .arrow-container": {
      width: 24,
      height: 24,
      marginLeft: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .line": {
        width: 16,
        height: 2,
        borderRadius: 2,
        background: theme.palette.common.white,
        display: "block",
        transformOrigin: "0% 0%",
      },
    },
  },
}));

const ArrowButton = ({ label, href }) => {
  const [props, setProps] = useSpring(() => ({
    translate: 0,
    config: { mass: 1, tension: 350, friction: 40, duration: transitionDuration },
  }));
  const classes = useStyles();
  const handleMouseEnter = () => {
    setProps({ translate: 1 });
  };
  const handleMouseLeave = () => {
    setProps({ translate: 0 });
  };
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <span>{label}</span>
      </div>
      <div className="arrow-container">
        <animated.span
          className="line"
          style={{
            transform: props.translate.interpolate(
              val => `translateX(${val * 2 + 4}px) scaleX(${val})`
            ),
          }}
        />
        <animated.svg
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width="14"
          height="14"
          style={{
            transform: props.translate.interpolate(
              val => `translateX(${val * 6 - 6}px)`
            ),
          }}
        >
          <path
            fill="currentColor"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          ></path>
        </animated.svg>
      </div>
    </a>
  );
};

export default ArrowButton;
