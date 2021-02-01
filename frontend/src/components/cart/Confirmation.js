import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import confirmationIcon from "../../images/tag.svg"
import NameAdornment from "../../images/NameAdornment"
import EmailAdornment from "../../images/EmailAdornment"
import PhoneAdornment from "../../images/PhoneAdornment"
import streetAdornment from "../../images/street-adornment.svg"
import zipAdornment from "../../images/zip-adornment.svg"
import cardAdornment from "../../images/card.svg"
import promoAdornment from "../../images/promo-code.svg"

const useStyles = makeStyles(theme => ({
  nameWrapper: {
    height: 22,
    width: 22,
  },
  emailWrapper: {
    height: 17,
    width: 22,
  },
  phoneWrapper: {
    height: 25.122,
    width: 25.173,
  },
  text: {
    fontSize: "1rem",
    color: "#fff",
  },
}))

export default function Confirmation() {
  const classes = useStyles()

  const firstFields = [
    {
      value: "Zachary Reece",
      adornment: (
        <div className={classes.nameWrapper}>
          <NameAdornment color="#fff" />
        </div>
      ),
    },
    {
      value: "zachary@var-x.com",
      adornment: (
        <div className={classes.emailWrapper}>
          <EmailAdornment color="#fff" />
        </div>
      ),
    },
    {
      value: "(555) 555-5555",
      adornment: (
        <div className={classes.phoneWrapper}>
          <PhoneAdornment />
        </div>
      ),
    },
    {
      value: "1234 Example St",
      adornment: <img src={streetAdornment} alt="street address" />,
    },
  ]

  const secondFields = [
    {
      value: "Wichita, KS 67211",
      adornment: <img src={zipAdornment} alt="city, state, zip code" />,
    },
    {
      value: "**** **** **** 1234",
      adornment: <img src={cardAdornment} alt="credit card" />,
    },
    {
      promo: {
        helperText: "",
        placeholder: "Promo code",
        startAdornment: <img src={promoAdornment} alt="promo code" />,
      },
    },
  ]

  return (
    <Grid item container direction="column">
      <Grid item container>
        <Grid item container direction="column" xs={8}>
          {firstFields.map(field => (
            <Grid item container key={field.value}>
              <Grid item xs={1}>
                {field.adornment}
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" classes={{ root: classes.text }}>
                  {field.value}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4}>
          <img src={confirmationIcon} alt="confirmation" />
        </Grid>
      </Grid>
    </Grid>
  )
}
