import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiTextField from "@material-ui/core/TextField";
import { Field } from "formik";
import { teal } from "@material-ui/core/colors";

const TextField = withStyles(theme => ({
  root: {
    "& label": {
      color: theme.palette.grey[300],
    },
    "& label.Mui-focused": {
      color: teal[200],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.common.white,
    },
    "& input, textarea": {
      color: theme.palette.common.white,
    },
    "& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus": {
      WebkitTextFillColor: theme.palette.common.white,
      WebkitBoxShadow: `0 0 0 30px ${teal[800]} inset !important`,
      transition: "background-color 5000s ease-in-out 0s",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.common.white,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.grey[300],
      },
      "&.Mui-focused fieldset": {
        borderColor: teal[200],
      },
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      "&:hover fieldset": {
        borderColor: theme.palette.error.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: teal[200],
      },
    },
  },
}))(MuiTextField);

const FormTextField = ({
  name,
  label,
  placeholder,
  type = "text",
  multiline,
  helperText = "",
  rows,
  handleFocus,
}) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const hasError = Boolean(meta.touched && meta.error);
        return (
          <TextField
            {...field}
            label={label}
            helperText={hasError ? meta.error : helperText}
            variant="outlined"
            fullWidth
            error={hasError}
            placeholder={placeholder}
            margin="normal"
            type={type}
            multiline={Boolean(multiline)}
            rows={rows}
            onFocus={handleFocus}
            autoComplete="off"
          />
        );
      }}
    </Field>
  );
};

export default FormTextField;
