import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  blue,
  blueGrey,
  green,
  grey,
  lightBlue,
  lime,
  orange,
  yellow,
} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: blueGrey[900],
    padding: theme.spacing(2),
    display: "block",
    overflow: "auto",
    borderRadius: theme.shape.borderRadius
  },
  pre: {
    display: "flex",
    fontFamily: "inherit",
    fontSize: "1rem",
    color: theme.palette.grey[300],
  },
  lineNumber: {
    display: "block",
    padding: "0 12px 0 0",
    color: theme.palette.grey[500],
    textAlign: "right",
  },
  cursor: {
    height: 16,
    backgroundColor: theme.palette.common.white,
    opacity: 0.9,
    width: 3,
    display: "inline-flex",
    marginLeft: 1,
    transform: "translateY(1px)",
    "&.finished": {
      animation: `$blink 1s ${theme.transitions.easing.easeInOut} 0s infinite`,
    },
  },
  codeLine: {
    display: "flex",
    alignItems: "center",
  },
  "@keyframes blink": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

const codeColors = {
  keyword: blue[400],
  type: green["A100"],
  operator: grey[200],
  string: orange[200],
  variable: lightBlue[200],
  func: yellow[200],
  number: lime[200],
};

const lines = [
  {
    indent: 0,
    content: [
      {
        text: "class ",
        color: codeColors.keyword,
      },
      {
        text: "Brian ",
        color: codeColors.type,
      },
      {
        text: "extends ",
        color: codeColors.keyword,
      },
      {
        text: "Human ",
        color: codeColors.type,
      },
      {
        text: "{",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 2,
    content: [
      {
        text: "constructor",
        color: codeColors.keyword
      },
      {
        text: "() {",
        color: codeColors.operator
      }
    ]
  },
  {
    indent: 4,
    content: [
      {
        text: "super",
        color: codeColors.func,
      },
      {
        text: "(",
        color: codeColors.operator,
      },
      {
        text: `"Brian Yates"`,
        color: codeColors.string,
      },
      {
        text: ")",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 2,
    content: [
      {
        text: "}",
        color: codeColors.operator
      }
    ]
  },
  {
    indent: 2,
    content: [
      {
        text: "experience",
        color: codeColors.variable,
      },
      {
        text: " = [",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 4,
    content: [
      {
        text: "{",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "company:",
        color: codeColors.variable,
      },
      {
        text: ` "Ingersoll Rand"`,
        color: codeColors.string,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "years:",
        color: codeColors.variable,
      },
      {
        text: " 6",
        color: codeColors.number,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "jobs:",
        color: codeColors.variable,
      },
      {
        text: " [",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 8,
    content: [
      {
        text: `"Operations Accelerated Development Program"`,
        color: codeColors.string,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 8,
    content: [
      {
        text: `"Quality Assurance Analyst"`,
        color: codeColors.string,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 8,
    content: [
      {
        text: `"Regional Operations Leader"`,
        color: codeColors.string,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "]",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 4,
    content: [
      {
        text: "},",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 4,
    content: [
      {
        text: "{",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "company:",
        color: codeColors.variable,
      },
      {
        text: ` "Wells Fargo"`,
        color: codeColors.string,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "years:",
        color: codeColors.variable,
      },
      {
        text: " 1.4",
        color: codeColors.number,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "jobs:",
        color: codeColors.variable,
      },
      {
        text: " [",
        color: codeColors.operator,
      },
      {
        text: `"Marketing Systems Consultant"`,
        color: codeColors.string,
      },
      {
        text: "]",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 4,
    content: [
      {
        text: "},",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 4,
    content: [
      {
        text: "{",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "company:",
        color: codeColors.variable,
      },
      {
        text: ` "Allstate"`,
        color: codeColors.string,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "years:",
        color: codeColors.variable,
      },
      {
        text: " 2",
        color: codeColors.number,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 6,
    content: [
      {
        text: "jobs:",
        color: codeColors.variable,
      },
      {
        text: " [",
        color: codeColors.operator,
      },
      {
        text: `"Software Engineer"`,
        color: codeColors.string,
      },
      {
        text: "]",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 4,
    content: [
      {
        text: "},",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 2,
    content: [
      {
        text: "]",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 2,
    content: [
      {
        text: "techSkills",
        color: codeColors.variable,
      },
      {
        text: " = ",
        color: codeColors.operator,
      },
      {
        text: "[",
        color: codeColors.operator,
      },
      {
        text: `"JavaScript"`,
        color: codeColors.string,
      },
      {
        text: ", ",
        color: codeColors.operator,
      },
      {
        text: `"Node"`,
        color: codeColors.string,
      },
      {
        text: ", ",
        color: codeColors.operator,
      },
      {
        text: `"React"`,
        color: codeColors.string,
      },
      {
        text: ", ",
        color: codeColors.operator,
      },
      {
        text: `"SQL"`,
        color: codeColors.string,
      },
      {
        text: ", ",
        color: codeColors.operator,
      },
      {
        text: `"NoSQL"`,
        color: codeColors.string,
      },
      {
        text: "]",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 2,
    content: [
      {
        text: "education",
        color: codeColors.variable,
      },
      {
        text: " = {",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 4,
    content: [
      {
        text: "school: ",
        color: codeColors.variable,
      },
      {
        text: `"Penn State University"`,
        color: codeColors.string,
      },
      {
        text: ",",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 4,
    content: [
      {
        text: "degree: ",
        color: codeColors.variable,
      },
      {
        text: `"Industrial Engineering"`,
        color: codeColors.string,
      },
    ],
  },
  {
    indent: 2,
    content: [
      {
        text: "}",
        color: codeColors.operator,
      },
    ],
  },
  {
    indent: 0,
    content: [
      {
        text: "}",
        color: codeColors.operator,
      },
    ],
  },
];

const wait = (callback, duration) =>
  new Promise(resolve => {
    setTimeout(() => resolve(callback()), duration);
  });

const AboutCodeEditor = ({ isVisible }) => {
  const [activeLine, setActiveLine] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const refs = React.useRef([]);
  const classes = useStyles();
  const writeCode = async () => {
    let refTracker = 0;
    for (let i = 0; i < lines.length; i++) {
      setActiveLine(i);
      for (let j = 0; j < lines[i].content.length; j++) {
        const letters = lines[i].content[j].text.split("");
        for (let k = 0; k < letters.length; k++) {
          // eslint-disable-next-line
          await wait(() => {
            refs.current[refTracker].innerHTML += letters[k];
          }, 30);
        }
        refs.current[refTracker].style.color = lines[i].content[j].color;
        refTracker++;
      }
    }
    setFinished(true);
  };
  React.useEffect(() => {
    if (isVisible && !finished && !started) {
      setStarted(true);
      writeCode();
    }
  }, [isVisible, finished, started]);
  return (
    <code className={classes.root}>
      <pre className={classes.pre}>
        <div>
          {lines.map((line, idx) => {
            return (
              <span
                key={`line-number-${idx}`}
                style={{ opacity: idx <= activeLine ? 1 : 0.5 }}
                className={classes.lineNumber}
              >
                {idx + 1}
              </span>
            );
          })}
        </div>
        <div>
          {lines.map(({ content, indent }, idx1) => {
            return (
              <div className={classes.codeLine} key={`line-${idx1}`}>
                <span>
                  {Array.from({ length: indent }, () => " ").join("")}
                </span>
                {content.map((value, idx2) => {
                  return (
                    <span
                      ref={el => refs.current.push(el)}
                      key={`word-${idx1}-${idx2}`}
                    />
                  );
                })}
                {idx1 === activeLine && <span className={`${classes.cursor}${!isVisible || idx1 === lines.length - 1 ? " finished" : ""}`} />}
              </div>
            );
          })}
        </div>
      </pre>
    </code>
  );
};

export default AboutCodeEditor;
