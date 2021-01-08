import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

import Fields from "../auth/Fields"
import { EmailPassword } from "../auth/Login"

import fingerprint from "../../images/fingerprint.svg"
import NameAdornment from "../../images/NameAdornment"
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
  icon: {
    marginBottom: "3rem",
  },
  fieldContainer: {
    marginBottom: "3rem",
    "& > :not(:first-child)": {
      marginLeft: "5rem",
    },
  },
  slot: {
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "2.5rem",
    height: "2.5rem",
    minWidth: 0,
    border: `0.15rem solid ${theme.palette.secondary.main}`,
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  slotText: {
    color: theme.palette.secondary.main,
    marginLeft: "-0.25rem",
  },
  slotWrapper: {
    marginLeft: "2rem",
    "& > :not(:first-child)": {
      marginLeft: "-0.5rem",
    },
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #fff",
    },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
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
    setVisible,
    true
  )
  const name_phone = {
    name: {
      helperText: "you must enter a name",
      placeholder: "Name",
      startAdornment: <NameAdornment color="#fff" />,
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
        <img
          src={fingerprint}
          alt="details settings"
          className={classes.icon}
        />
      </Grid>
      {fields.map((pair, i) => (
        <Grid
          container
          justify="center"
          key={i}
          classes={{ root: classes.fieldContainer }}
        >
          <Fields
            fields={pair}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            isWhite
          />
        </Grid>
      ))}
      <Grid container>
        <Grid item classes={{ root: classes.slotWrapper }}>
          {[1, 2, 3].map(slot => (
            <Button key={slot} classes={{ root: classes.slot }}>
              <Typography variant="h5" classes={{ root: classes.slotText }}>
                {slot}
              </Typography>
            </Button>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
