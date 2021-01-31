import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    background: blueGrey[800],
    padding: theme.spacing(1),
    width: 240,
    margin: `${theme.spacing(2)}px 0`,
    border: `1px solid ${blueGrey[900]}`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& .links-container": {
      display: "flex",
      alignItems: "center",
      "& a": {
        color: theme.palette.grey[200],
        textDecoration: "none",
        fontSize: 11,
      },
      "& a:hover, a:focus": {
        textDecoration: "underline",
      },
      "& div:first-child": {
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

const RecaptchaMessage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="caption">
          This form is protected by reCAPTCHA
        </Typography>
      </div>
      <div className="links-container">
        <div>
          <Typography>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
          </Typography>
        </div>
        <div>
          <Typography>
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RecaptchaMessage;
