import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Formik, Form } from "formik";
import { EMAIL_REGEX } from "../constants";
import FormTextField from "./FormTextField";
import FormSubmitButton from "./FormSubmitButton";
import RecaptchaMessage from "./RecaptchaMessage";
import { GOOGLE_RECAPTCHA_SITE_KEY } from "../config";

const SuccessDialog = ({ open, setOpen }) => {
  function handleClose() {
    setOpen(false);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <div>
        <div>
          <Icon name="check" width={50} />
        </div>
        <h5>Success!</h5>
        <p className="mb-3 max-w-sm">
          I have received your message and will get back to you as soon as
          possible.
        </p>
        <div>
          <button>CLOSE</button>
        </div>
      </div>
    </Dialog>
  );
};

const ContactForm: React.FC = () => {
  const [focused, setFocused] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const firebase = useFirebase();
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
          const errors: { [key: string]: string } = {};
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
          const contactUs = firebase.functions().httpsCallable("contactUs");
          window.grecaptcha.ready(function () {
            window.grecaptcha
              .execute(GOOGLE_RECAPTCHA_SITE_KEY, { action: "CONTACT_US" })
              .then((recaptchaToken: string) => {
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
            <Form>
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
              {status && <p className="text-red-500">{status}</p>}
              <div className="mt-3">
                <FormSubmitButton
                  isSubmitting={isSubmitting}
                  additionalClasses="w-full sm:w-52"
                />
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
