import React from "react";
import { blueGrey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import EmailIcon from "./icons/EmailIcon";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.breakpoints.values.lg + theme.spacing(6),
    margin: "auto",
    padding: `0 ${theme.spacing(3)}px`,
  },
  heading: {
    margin: `${theme.spacing(3)}px 0`,
    fontWeight: "bold",
  },
  formHeader: {
    letterSpacing: 2,
    fontWeight: "bold",
  },
  divider: {
    display: "block",
    width: 80,
    height: 2,
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.primary.main,
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
  },
  formContainer: {
    backgroundColor: blueGrey[900],
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  more: {
    padding: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
    fontWeight: "bold",
    opacity: 0.6,
  },
  contactLinkContainer: {
    marginBottom: theme.spacing(1)
  },
  contactLink: {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
    transition: `color ${theme.transitions.duration.shorter}ms`,
    textDecoration: 'none',
    "&:hover, &:focus": {
      color: theme.palette.primary.light
    },
    "& .icon-container": {
      marginRight: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      "& svg": {
        width: 20,
        height: 20,
        color: 'inherit'
      }
    }
  }
}));
const contactlinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brian-yates-38267333/",
    Icon: <LinkedInIcon />
  },
  {
    label: "GitHub",
    href: "https://github.com/brianyates",
    Icon: <GitHubIcon />
  },
  {
    label: "Email",
    href: "mailto:hello@brianyates.dev",
    Icon: <EmailIcon />
  }
]
const ContactSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <SectionHeader label="contact" />
          <Typography className={classes.heading} variant="h4">
            Hit me up! <span role="img" aria-label="Call me emoji">🤙</span>
          </Typography>
          <Typography>
            If you want to learn more about what I can offer or just want to
            chat, please feel to send me a message...I'm just a few keystrokes
            away.
          </Typography>
          <Typography variant="h6" className={classes.more}>
            MORE WAYS TO REACH ME
          </Typography>
          {contactlinks.map(({ label, href, Icon }) => {
            return (
              <div key={href} className={classes.contactLinkContainer}>
                <a className={classes.contactLink} href={href}>
                  <div className="icon-container">{Icon}</div>
                  <div><Typography>{label}</Typography></div>
                </a>
              </div>
            )
          })}
        </Grid>
        <Grid item xs={12} md={7}>
          <div className={classes.formContainer}>
            <Typography className={classes.formHeader}>SAY HELLO</Typography>
            <span className={classes.divider} />
            <ContactForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactSection;
