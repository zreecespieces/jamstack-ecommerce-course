import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import clsx from "clsx"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import { makeStyles } from "@material-ui/core/styles"

import validate from "../ui/validate"

import accountIcon from "../../images/account.svg"
import EmailAdornment from "../../images/EmailAdornment"
import passwordAdornment from "../../images/password-adornment.svg"
import hidePassword from "../../images/hide-password.svg"
import showPassword from "../../images/show-password.svg"
import addUserIcon from "../../images/add-user.svg"
import forgotPasswordIcon from "../../images/forgot.svg"
import close from "../../images/close.svg"

const useStyles = makeStyles(theme => ({
  emailAdornment: {
    height: 17,
    width: 22,
    marginBottom: 10,
  },
  accountIcon: {
    marginTop: "2rem",
  },
  textField: {
    width: "20rem",
  },
  input: {
    color: theme.palette.secondary.main,
  },
  login: {
    width: "20rem",
    borderRadius: 50,
    textTransform: "none",
  },
  facebookText: {
    fontSize: "1.5rem",
    fontWeight: 700,
    textTransform: "none",
  },
  facebookButton: {
    marginTop: "-1rem",
  },
  visibleIcon: {
    padding: 0,
  },
  passwordError: {
    marginTop: 0,
  },
  close: {
    paddingTop: 5,
  },
  reset: {
    marginTop: "-4rem",
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}))

export default function Login({ steps, setSelectedStep }) {
  const classes = useStyles()

  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [visible, setVisible] = useState(false)
  const [forgot, setForgot] = useState(false)

  const fields = {
    email: {
      helperText: "invalid email",
      placeholder: "Email",
      type: "text",
      startAdornment: (
        <span className={classes.emailAdornment}>
          <EmailAdornment />
        </span>
      ),
    },
    password: {
      helperText:
        "your password must be at least eight characters and include one uppercase letter, one number, and one special character",
      placeholder: "Password",
      hidden: forgot,
      type: visible ? "text" : "password",
      startAdornment: <img src={passwordAdornment} alt="password" />,
      endAdornment: (
        <img
          src={visible ? showPassword : hidePassword}
          alt={`${visible ? "Show" : "Hide"} Password`}
        />
      ),
    },
  }

  const navigateSignUp = () => {
    const signUp = steps.find(step => step.label === "Sign Up")

    setSelectedStep(steps.indexOf(signUp))
  }

  return (
    <>
      <Grid item classes={{ root: classes.accountIcon }}>
        <img src={accountIcon} alt="login page" />
      </Grid>
      {Object.keys(fields).map(field => {
        const validateHelper = event => {
          const valid = validate({ [field]: event.target.value })
          setErrors({ ...errors, [field]: !valid[field] })
        }

        return !fields[field].hidden ? (
          <Grid item key={field}>
            <TextField
              value={values[field]}
              onChange={e => {
                if (errors[field]) {
                  validateHelper(e)
                }

                setValues({ ...values, [field]: e.target.value })
              }}
              classes={{ root: classes.textField }}
              onBlur={e => validateHelper(e)}
              error={errors[field]}
              helperText={errors[field] && fields[field].helperText}
              placeholder={fields[field].placeholder}
              type={fields[field].type}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {fields[field].startAdornment}
                  </InputAdornment>
                ),
                endAdornment: fields[field].endAdornment ? (
                  <InputAdornment position="end">
                    <IconButton
                      classes={{ root: classes.visibleIcon }}
                      onClick={() => setVisible(!visible)}
                    >
                      {fields[field].endAdornment}
                    </IconButton>
                  </InputAdornment>
                ) : undefined,
                classes: { input: classes.input },
              }}
            />
          </Grid>
        ) : null
      })}

      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          classes={{
            root: clsx(classes.login, {
              [classes.reset]: forgot,
            }),
          }}
        >
          <Typography variant="h5">
            {forgot ? "reset password" : "login"}
          </Typography>
        </Button>
      </Grid>
      {forgot ? null : (
        <Grid item>
          <Button
            classes={{
              root: clsx(classes.facebookButton, {
                [classes.passwordError]: errors.password,
              }),
            }}
          >
            <Typography variant="h3" classes={{ root: classes.facebookText }}>
              login with Facebook
            </Typography>
          </Button>
        </Grid>
      )}
      <Grid item container justify="space-between">
        <Grid item>
          <IconButton onClick={navigateSignUp}>
            <img src={addUserIcon} alt="sign up" />
          </IconButton>
        </Grid>
        <Grid
          item
          classes={{
            root: clsx({
              [classes.close]: forgot,
            }),
          }}
        >
          <IconButton onClick={() => setForgot(!forgot)}>
            <img
              src={forgot ? close : forgotPasswordIcon}
              alt={forgot ? "back to login" : "forgot password"}
            />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}
