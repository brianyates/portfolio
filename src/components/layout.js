/// <reference path="../declarations.d.ts" />

import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import "../stylesheets/index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import { NAV_HEIGHT, PROJECTS, ABOUT, CONTACT } from "../constants";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";

const HOST_URL = "https://brianyates.dev";
const defaultOgImage = `${HOST_URL}/og-image.png`;

const title = "Brian Yates Web Development Portfolio";
const description = "Brian Yates portfolio";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Varela Round"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

// TODO - use react-spring to change background colors on scroll
const useStyles = makeStyles(theme => ({
  main: {
    transition: `background-color ${theme.transitions.duration.standard}ms`,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  section: {
    padding: `${theme.spacing(6)}px ${theme.spacing(3)}px`,
  },
}));

const SECTION_COUNT = 3;

const Layout = ({
  pageTitle,
  pageDescription,
  pageURL,
  children,
  ogImage = defaultOgImage,
}) => {
  const classes = useStyles();
  const refs = React.useRef([]);
  const [navFixed, setNavFixed] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(null);
  React.useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      if (top + NAV_HEIGHT >= window.innerHeight) {
        setNavFixed(true);
        for (let i = 0; i < SECTION_COUNT; i++) {
          const { top, bottom } = refs.current[i].getBoundingClientRect();
          if (top <= NAV_HEIGHT && bottom >= NAV_HEIGHT) {
            setActiveIndex(i);
            break;
          }
        }
      } else {
        setNavFixed(false);
        setActiveIndex(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
        <Navbar navFixed={navFixed} activeIndex={activeIndex} />
        <main className={`${classes.main} active-${activeIndex}`}>
          <Header />
          <section
            ref={el => refs.current.push(el)}
            id={PROJECTS}
          >
            <ProjectSection active={activeIndex === 0} />
          </section>
          <section
            ref={el => refs.current.push(el)}
            id={ABOUT}
            className={classes.section}
          >
            <AboutSection />
          </section>
          <section
            ref={el => refs.current.push(el)}
            id={CONTACT}
            className={classes.section}
          ></section>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
