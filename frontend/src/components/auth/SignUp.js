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

const useStyles = makeStyles(theme => ({}))

export default function SignUp({ steps, setSelectedStep }) {
  const classes = useStyles()
  const [name, setName] = useState("")

  return (
    <>
      <Grid item>
        <img src={addUserIcon} alt="new user" />
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
        <Button variant="contained" color="secondary">
          <Typography variant="h5">sign up with Facebook</Typography>
        </Button>
      </Grid>
      <Grid item container justify="space-between">
        <Grid item>
          <IconButton>
            <img src={backward} alt="back to login" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <img src={forward} alt="continue registration" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}
