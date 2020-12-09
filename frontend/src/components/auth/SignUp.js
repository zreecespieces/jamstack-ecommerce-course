import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"

import addUserIcon from "../../images/add-user.svg"
import nameAdornment from "../../images/name-adornment.svg"
import forward from "../../images/forward-outline.svg"
import backward from "../../images/backwards-outline.svg"

const useStyles = makeStyles(theme => ({
  addUserIcon: {
    height: "10rem",
    width: "11rem",
    marginTop: "5rem",
  },
  textField: {
    width: "20rem",
  },
  input: {
    color: theme.palette.secondary.main,
  },
  facebookSignUp: {
    width: "20rem",
    borderRadius: 50,
    marginTop: "-3rem",
  },
  facebookText: {
    textTransform: "none",
    fontSize: "1.5rem",
  },
  navigation: {
    height: "4rem",
    width: "4rem",
  },
}))

export default function SignUp({ steps, setSelectedStep }) {
  const classes = useStyles()
  const [name, setName] = useState("")
  const [info, setInfo] = useState(false)

  const handleNavigate = direction => {
    if (direction === "forward") {
      setInfo(true)
    } else {
      const login = steps.find(step => step.label === "Login")

      setSelectedStep(steps.indexOf(login))
    }
  }

  return (
    <>
      <Grid item>
        <img src={addUserIcon} alt="new user" className={classes.addUserIcon} />
      </Grid>
      <Grid item>
        <TextField
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
          classes={{ root: classes.textField }}
          placeholder="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={nameAdornment} alt="name" />
              </InputAdornment>
            ),
            classes: { input: classes.input },
          }}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          classes={{ root: classes.facebookSignUp }}
        >
          <Typography variant="h5" classes={{ root: classes.facebookText }}>
            sign up with Facebook
          </Typography>
        </Button>
      </Grid>
      <Grid item container justify="space-between">
        <Grid item>
          <IconButton onClick={() => handleNavigate("backward")}>
            <img
              src={backward}
              alt="back to login"
              className={classes.navigation}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={() => handleNavigate("forward")}>
            <img
              src={forward}
              alt="continue registration"
              className={classes.navigation}
            />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}
