import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { red, teal } from "@material-ui/core/colors";
import { Helmet } from "react-helmet";
import Header from "./Header";
import { PROJECTS, ABOUT, CONTACT } from "../constants";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import "../stylesheets/index.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]', {
    speed: 700,
    speedAsDuration: true,
  });
}

const HOST_URL = "https://brianyates.dev";
const defaultOgImage = `${HOST_URL}/og-image.png`;

const title = "Brian Yates Web Development Portfolio";
const description = "Brian Yates portfolio";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: teal[100],
      main: teal[200],
      dark: teal[300],
    },
    error: {
      light: red[100],
      main: red[200],
      dark: red[300],
    },
  },
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),
  },
});

// TODO - use react-spring to change background colors on scroll
const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  section: {
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(8),
    },
  },
  footer: {
    padding: `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px ${theme.spacing(3)}px`,
    fontSize: ".7rem",
    color: theme.palette.grey[600],
    textAlign: "center",
    letterSpacing: 3,
    background: theme.palette.common.black,
  },
}));

const Layout = ({
  pageTitle,
  pageDescription,
  pageURL,
  children,
  ogImage = defaultOgImage,
}) => {
  const classes = useStyles();
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageURL} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={ogImage} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <link
          rel="mask-icon"
          href={`${HOST_URL}/safari-pinned-tab.svg`}
          color="#3f9796"
        />
      </Helmet>
      <noscript>
        JavaScript is currently disabled in your browser. Most features of this
        website require JavaScript to work properly, so please enable JavaScript
        in your browser for full site functionality.
      </noscript>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <>
          <main className={`${classes.main}`}>
            <Header />
            <section id={PROJECTS} className={classes.section}>
              <ProjectSection />
            </section>
            <section id={ABOUT} className={classes.section}>
              <AboutSection />
            </section>
            <section id={CONTACT} className={classes.section}>
              <ContactSection />
            </section>
          </main>
          <footer className={classes.footer}>
            © COPYRIGHT {new Date().getFullYear()} BRIAN YATES
          </footer>
        </>
      </ThemeProvider>
    </>
  );
};

export default Layout;
