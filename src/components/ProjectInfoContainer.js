import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTrail, animated } from "react-spring";
import ArrowButton from "./ArrowButton";

const useStyles = makeStyles(theme => ({
  root: {
    "&. message": {
      margin: `${theme.spacing(3)}px 0`,
    },
  },
  stackContainer: {
    marginBottom: theme.spacing(2)
  },
  stackItem: {
    display: "flex",
    alignItems: "center",
    padding: `${theme.spacing(1)}px 0`,
    "& .icon": {
      marginRight: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      "& svg": {
        width: 26,
        height: 26,
        verticalAlign: 'middle'
      }
    },
  },
}));

const ProjectInfoContainer = ({ name, description, href, stack, active }) => {
  const classes = useStyles();
  const components = [
    <Typography variant="h4">
      <strong>{name}</strong>
    </Typography>,
    <Typography className="message">{description}</Typography>,
    <div className={classes.stackContainer}>
      <Typography gutterBottom><strong>TECH STACK</strong></Typography>
      {stack.map(({ label, Icon }, index) => {
        return (
          <div className={classes.stackItem} key={`stack-${index}`}>
            <div className="icon">
              <Icon />
            </div>
            <div><Typography>{label}</Typography></div>
          </div>
        );
      })}
    </div>,
    <ArrowButton label="VIEW PROJECT" href={href} />,
  ];
  const trail = useTrail(components.length, {
    config: { mass: 1, tension: 2000, friction: 200 },
    opacity: active ? 1 : 0,
    x: active ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });
  return (
    <div className={classes.root}>
      {trail.map(({ x, ...rest }, index) => (
        <animated.div
          key={index}
          style={{
            ...rest,
            transform: x.interpolate(val => `translateX(${val}px)`),
          }}
        >
          {components[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default ProjectInfoContainer;
