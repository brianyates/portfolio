import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Formik, Form } from "formik";
import { EMAIL_REGEX } from "../constants";
import FormTextField from "./FormTextField";
import RecaptchaMessage from "./RecaptchaMessage";
import { GOOGLE_RECAPTCHA_SITE_KEY } from "../config";
import { teal } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  submitBtn: {
    width: 150,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  dialog: {
    "& .MuiPaper-root.MuiDialog-paper": {
      background: "#222222",
      color: theme.palette.common.white,
    },
  },
  dialogRoot: {
    textAlign: "center",
    padding: theme.spacing(2),
    "& .icon": {
      height: 100,
      width: 100,
      borderRadius: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(45deg, ${teal[200]}, ${teal[100]})`,
      color: theme.palette.common.black,
      margin: `${theme.spacing(1)}px auto`,
    },
    "& .close-btn": {
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontSize: "1rem",
      padding: `${theme.spacing(1)}px`,
      width: "100%",
      backgroundColor: `rgba(255, 255, 255, 0)`,
      border: `1px solid ${theme.palette.common.white}`,
      cursor: "pointer",
      "&:hover, &:focus": {
        backgroundColor: `rgba(255, 255, 255, .1)`,
      },
    },
    "& .message": {
      maxWidth: 320,
      margin: `0 auto ${theme.spacing(2)}px auto`,
    },
  },
}));

const SuccessDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  function handleClose() {
    setOpen(false);
  }
  return (
    <Dialog open={open} onClose={handleClose} className={classes.dialog}>
      <div className={classes.dialogRoot}>
        <div className="icon">
          <svg viewBox="0 0 512 512" fill="currentColor" width="64" height="64">
            <path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" />
          </svg>
        </div>
        <Typography variant="h4" gutterBottom>
          <strong>Success!</strong>
        </Typography>
        <Typography className="message">
          I have received your message and will get back to you as soon as
          possible.
        </Typography>
        <div>
          <button className="close-btn" onClick={handleClose}>
            CLOSE
          </button>
        </div>
      </div>
    </Dialog>
  );
};

const ContactForm = () => {
  const classes = useStyles();
  const [focused, setFocused] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  function handleFocus() {
    if (!focused) {
      setFocused(true);
    }
  }
  React.useEffect(() => {
    if (focused) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${GOOGLE_RECAPTCHA_SITE_KEY}`;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [focused]);
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = "Please enter your full name";
          }
          if (EMAIL_REGEX.test(values.email) === false) {
            errors.email = "Please enter a valid email";
          }
          if (!values.message) {
            errors.message = "Please enter a message";
          }
          return errors;
        }}
        onSubmit={(values, { setStatus, setSubmitting, resetForm }) => {
          setStatus(null);
          const contactUs = async values => {
            return axios.post(
              "https://us-central1-brianyatesportfolio.cloudfunctions.net/contactUs",
              values
            );
          };
          window.grecaptcha.ready(function () {
            window.grecaptcha
              .execute(GOOGLE_RECAPTCHA_SITE_KEY, { action: "CONTACT_US" })
              .then(recaptchaToken => {
                return contactUs({ ...values, recaptchaToken });
              })
              .then(() => {
                setDialogOpen(true);
                resetForm();
              })
              .catch(() => {
                setStatus(`An error occurred - please try again later.`);
                setSubmitting(false);
              });
          });
        }}
      >
        {({ isSubmitting, status }) => {
          return (
            <Form autoComplete="off">
              <FormTextField
                name="name"
                label="Full name"
                handleFocus={handleFocus}
              />
              <FormTextField
                name="email"
                label="Email"
                type="email"
                handleFocus={handleFocus}
              />
              <FormTextField
                name="message"
                label="Message"
                multiline
                rows={5}
                handleFocus={handleFocus}
              />
              <RecaptchaMessage />
              {status && (
                <Typography color="error" gutterBottom>
                  {status}
                </Typography>
              )}
              <div>
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  color="primary"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                >
                  SUBMIT
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <SuccessDialog open={dialogOpen} setOpen={setDialogOpen} />
    </div>
  );
};

export default ContactForm;
