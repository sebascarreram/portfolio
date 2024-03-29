import React, { useState } from "react";

import firebase from "./../../firebase";

import Aux from "./../../hoc/Aux";

//import Material UI components and functions
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// import Form from "./../../components/Form/Form";
import styleContact from "./Contact.module.css";

//add this to assign the sendEmail cloud function to a constant
const sendEmail = firebase.functions().httpsCallable("sendEmail");

//add CSS classes for Material UI components calling a function that returns another function
const useStyles = makeStyles((theme) => ({
  //the CSS class honeypot is added to the honeypot field later on, which is not displayed to users.
  honeypot: {
    display: "none",
  },
  lineHeightSpace: {
    lineHeight: "1.3",
  },
  colorButton: {
    fontSize: "1.5rem",
  },
}));

const CssTextField = withStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "#ecf0f1",
      fontSize: "1.3rem",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #ecf0f1",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid #ecf0f1",
    },
    "& .MuiInputBase-input": {
      color: "#e74c3c",
      fontSize: "1.7rem",
    },
  },
})(TextField);

const CssButton = withStyles({
  root: {
    "& .Mui-disabled": {
      color: "red",
    },
    /*"& Mui-disabled": {
      color: "red",
    },*/
  },
})(Button);

// setFormIsValid
const Contact = () => {
  //assign the constant `classes` to an object for Material IU components by calling a function
  const classes = useStyles();

  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: {
      value: "",
      elementConfig: {
        required: true,
        id: "outlined-basic",
        label: "Your name",
      },
      validation: {
        required: true,
        errorMessage: "Please, enter your name",
      },
      valid: false,
      blur: false,
    },
    email: {
      value: "",
      elementConfig: {
        required: true,
        id: "outlined-basic",
        label: "Your email",
      },
      validation: {
        required: true,
        isEmail: true,
        errorMessage: "Please, enter your email",
      },
      valid: false,
      blur: false,
    },
    message: {
      value: "",
      elementConfig: {
        required: true,
        id: "standard-multiline-static",
        label: "Your message",
        multiline: true,
        rows: 6,
        className: classes.lineHeightSpace,
      },
      validation: {
        required: true,
        errorMessage: "Please, enter your message",
      },
      valid: false,
      blur: false,
    },
    //this honeypot field isn't rendered to the DOM, so users don't see it, but it fools bots that fill it automatically
    honeypot: {
      value: "",
      elementConfig: {
        className: classes.honeypot,
        label:
          "If you are a human, do not type anything here. I am here to fool bots",
      },
      //this `validation` property is added just to avoid and error when running checkvalidity();
      validation: {},
      //this input is valid by default so it doesn't prevent human users to click the `Send` button
      valid: true,
      blur: false,
    },
  });

  //convert the `contactForm` object into an array
  const formElementsArray = [];
  for (let key in contactForm) {
    formElementsArray.push({
      id: key,
      ...contactForm[key],
    });
  }

  //map the array to return an array of JSX elements
  const formElements = formElementsArray.map((element) => {
    return (
      <Box key={element.id} marginBottom={1}>
        <CssTextField
          {...element.elementConfig}
          error={!element.valid && element.blur}
          fullWidth
          //  variant="outlined"
          helperText={
            !element.valid && element.blur
              ? element.validation.errorMessage
              : null
          }
          onChange={(event) => inputChangedHandler(event, element.id)}
          onBlur={(event) => inputChangedHandler(event, element.id)}
          value={element.value}
          color="secondary"
          size="medium"
          //variant="outlined"
        ></CssTextField>
      </Box>
    );
  });
  //<CssTextField className={classes.margin} id="custom-css-standard-input" label="Custom CSS" />

  //this function runs when an input changes or is blurred
  const inputChangedHandler = (event, inputIdentifier) => {
    //create a new object representing the input that was changed or blurred
    const updatedFormElement = {
      ...contactForm[inputIdentifier],
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        contactForm[inputIdentifier].validation
      ),
      blur: event.type === "blur" ? true : false,
      touched: true,
    };

    //create a new object represeting the whole form object
    const updatedContactForm = {
      ...contactForm,
      [inputIdentifier]: updatedFormElement,
    };

    //the whole form is valid until it's not
    let formIsValid = true;
    for (let inputElementIdentifier in updatedContactForm) {
      formIsValid =
        updatedContactForm[inputElementIdentifier].valid && formIsValid;
    }

    //update `contactForm` state
    setContactForm(updatedContactForm);

    //update `formIsValid` state
    setFormIsValid(formIsValid);
  };

  //this function is called from inside `inputChangedHandler()`, and checks the validity of an input field
  const checkValidity = (value, rules) => {
    //it's always true until there's one false in the way
    let isValid = true;
    if (rules.required) {
      //value.trim() gets rid of white spaces
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.isEmail) {
      //the `pattern` constant is a Regular Expression that matches the shape of an email
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      //`pattern.test()` returns true or false
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  //this function is called when the user closes the snackbar after getting an error (when the cloud function fails)
  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  //this function is called when clicking the `Send` button
  const submitForm = () => {
    //if a bot filled the honeypot field, don't keep running code (e.g don't call a cloud function)
    if (contactForm.honeypot.value !== "") {
      //the below `return` is called an `early return` and it ends the execution of the function.
      return;
    }

    //set `isLoading` state to true, so the spinner is rendered
    setIsLoading(true);

    sendEmail({
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value,
    })
      //the code inside the `then()` block runs when the message was successfully sent from inside the cloud function
      .then(() => {
        //create a new `contactForm` object that looks like the original `contactForm` state
        let originalContactForm = {};
        for (let key in contactForm) {
          originalContactForm[key] = {
            ...contactForm[key],
            value: "",
            valid: key === "honeypot" ? true : false,
            blur: false,
          };
        }

        //reset `contactForm` state to its original value
        setContactForm(originalContactForm);

        //reset the whole form validity to false
        setFormIsValid(false);

        //set `error` state to false.
        setError(false);

        //set `isLoading` state to false, so the spinner is not rendered anymore
        setIsLoading(false);

        //set `openSnackbar` state to true, so the snackbar is rendered, with content that depends on the error state
        setOpenSnackbar(true);
      })
      //this code below runs when the message was NOT successfully sent from inside of the cloud function
      .catch(() => {
        //set `error` state to true
        setError(true);

        //set `isLoading` state to false, so the spinner is not rendered anymore
        setIsLoading(false);

        //set `openSnackbar` state to true, so the snackbar is rendered, with content that depends on the error state
        setOpenSnackbar(true);
      });
  };

  return (
    <Aux>
      <section className={styleContact.ContactSection}>
        <div className={styleContact.CardContact}>
          <div>
            <p className={styleContact.Message}>
              Thank you for taking the time to reach out.
            </p>
            <p className={styleContact.Message}>How can i help you today?</p>
          </div>
          {/* Form */}

          <div className={styleContact.formDiv}>
            <form>
              {formElements}
              <Grid container justifyContent="center">
                <Box mt="2rem">
                  {isLoading ? (
                    <CircularProgress />
                  ) : (
                    <CssButton
                      onClick={submitForm}
                      disabled={!formIsValid}
                      variant="contained"
                      color="primary"
                      className={classes.colorButton}
                    >
                      Send
                    </CssButton>
                  )}
                </Box>
              </Grid>
            </form>
          </div>
        </div>

        {error ? (
          <Snackbar
            open={openSnackbar}
            onClose={closeSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert onClose={closeSnackbar} severity="error">
              Oops! Something went wrong, try again later.
            </Alert>
          </Snackbar>
        ) : (
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={closeSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="success">Message sent!</Alert>
          </Snackbar>
        )}
      </section>
    </Aux>
  );
};

export default Contact;
