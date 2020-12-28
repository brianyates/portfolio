import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  stackContainer: {
    marginBottom: theme.spacing(2),
  },
  stackItem: {
    display: "flex",
    alignItems: "center",
    padding: `${theme.spacing(1)}px 0`,
    "& .icon": {
      marginRight: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      "& svg": {
        width: 26,
        height: 26,
        verticalAlign: "middle",
      },
    },
  },
}));

const TechStackContainer = ({ stack }) => {
  const classes = useStyles();
  return (
    <div className={classes.stackContainer}>
      <Typography gutterBottom>
        <strong>TECH STACK</strong>
      </Typography>
      {stack.map(({ label, Icon }, index) => {
        return (
          <div className={classes.stackItem} key={`stack-${index}`}>
            <div className="icon">
              <Icon />
            </div>
            <div>
              <Typography>{label}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStackContainer;
