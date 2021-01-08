import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

import Fields from "../auth/Fields"
import { EmailPassword } from "../auth/Login"

import fingerprint from "../../images/fingerprint.svg"
import nameAdornment from "../../images/name-adornment.svg"
import PhoneAdornment from "../../images/PhoneAdornment"

const useStyles = makeStyles(theme => ({
  phoneAdornment: {
    height: 25.122,
    width: 25.173,
  },
  visibleIcon: {
    padding: 0,
  },
  emailAdornment: {
    height: 17,
    width: 22,
    marginBottom: 10,
  },
}))

export default function Details() {
  const classes = useStyles()
  const [visible, setVisible] = useState(false)
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})

  const email_password = EmailPassword(
    classes,
    false,
    false,
    visible,
    setVisible
  )
  const name_phone = {
    name: {
      helperText: "you must enter a name",
      placeholder: "Name",
      startAdornment: <img src={nameAdornment} alt="name" />,
    },
    phone: {
      helperText: "invalid phone number",
      placeholder: "Phone",
      startAdornment: (
        <div className={classes.phoneAdornment}>
          <PhoneAdornment />
        </div>
      ),
    },
  }

  const fields = [name_phone, email_password]

  return (
    <Grid item container direction="column" xs={6} alignItems="center">
      <Grid item>
        <img src={fingerprint} alt="details settings" />
      </Grid>
      {fields.map((pair, i) => (
        <Grid container justify="center" key={i}>
          <Fields
            fields={pair}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
          />
        </Grid>
      ))}
      <Grid container>
        <Grid item>
          {[1, 2, 3].map(slot => (
            <Button key={slot}>{slot}</Button>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
