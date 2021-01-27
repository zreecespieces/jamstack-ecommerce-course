import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"

import Fields from "../auth/Fields"
import Slots from "./Slots"
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
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
    },
  },
  fieldContainer: {
    marginBottom: "2rem",
    "& > :not(:first-child)": {
      marginLeft: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
      "& > :not(:first-child)": {
        marginLeft: 0,
        marginTop: "1rem",
      },
    },
  },
  slotContainer: {
    position: "absolute",
    bottom: 0,
  },
  detailsContainer: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      borderBottom: "4px solid #fff",
      height: "30rem",
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

export default function Details({
  user,
  edit,
  setChangesMade,
  values,
  setValues,
  slot,
  setSlot,
  errors,
  setErrors,
  checkout,
}) {
  const classes = useStyles()
  const [visible, setVisible] = useState(false)
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

  useEffect(() => {
    if (checkout) {
      setValues(user.contactInfo[slot])
    } else {
      setValues({ ...user.contactInfo[slot], password: "********" })
    }
  }, [slot])

  useEffect(() => {
    if (checkout) return

    const changed = Object.keys(user.contactInfo[slot]).some(
      field => values[field] !== user.contactInfo[slot][field]
    )

    setChangesMade(changed)
  }, [values])

  const email_password = EmailPassword(false, false, visible, setVisible, true)
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

  let fields = [name_phone, email_password]

  if (checkout) {
    fields = [
      {
        name: name_phone.name,
        email: email_password.email,
        phone: name_phone.phone,
      },
    ]
  }

  return (
    <Grid
      item
      container
      direction="column"
      lg={6}
      xs={12}
      alignItems="center"
      justify="center"
      classes={{ root: classes.detailsContainer }}
    >
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
          alignItems={matchesXS ? "center" : undefined}
          key={i}
          classes={{ root: classes.fieldContainer }}
          direction={matchesXS ? "column" : "row"}
        >
          <Fields
            fields={pair}
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            isWhite
            disabled={checkout ? false : !edit}
            settings
          />
        </Grid>
      ))}
      <Grid item container classes={{ root: classes.slotContainer }}>
        <Slots slot={slot} setSlot={setSlot} />
      </Grid>
    </Grid>
  )
}
