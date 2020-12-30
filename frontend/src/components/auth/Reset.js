import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Fields from "./Fields"
import { EmailPassword } from "./Login"

import accountIcon from "../../images/account.svg"

const useStyles = makeStyles(theme => ({}))

export default function Reset() {
  const classes = useStyles()
  const [visible, setVisible] = useState(false)
  const [values, setValues] = useState({ password: "", confirmation: "" })
  const [errors, setErrors] = useState({})

  const { password } = EmailPassword(classes, true, false, visible, setVisible)
  const fields = {
    password,
    confirmation: { ...password, placeholder: "Confirm Password" },
  }
  console.log(fields)

  return (
    <>
      <Grid item>
        <img src={accountIcon} alt="reset password page" />
      </Grid>
      <Fields
        fields={fields}
        errors={errors}
        setErrors={setErrors}
        values={values}
        setValues={setValues}
      />
    </>
  )
}
