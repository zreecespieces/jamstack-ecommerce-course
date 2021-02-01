import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Fields from "../auth/Fields"

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
  card: {
    height: 18,
    width: 25,
  },
  priceLabel: {
    fontSize: "1.5rem",
  },
}))

export default function Confirmation() {
  const classes = useStyles()
  const [promo, setPromo] = useState({ promo: "" })
  const [promoError, setPromoError] = useState({})

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
      adornment: (
        <img src={cardAdornment} alt="credit card" className={classes.card} />
      ),
    },
    {
      promo: {
        helperText: "",
        placeholder: "Promo code",
        startAdornment: <img src={promoAdornment} alt="promo code" />,
      },
    },
  ]

  const prices = [
    {
      label: "SUBTOTAL",
      value: 99.99,
    },
    {
      label: "SHIPPING",
      value: 9.99,
    },
    {
      label: "TAX",
      value: 9.67,
    },
  ]

  const adornmentValue = (adornment, value) => (
    <>
      <Grid item xs={1}>
        {adornment}
      </Grid>
      <Grid item xs={11}>
        <Typography variant="body1" classes={{ root: classes.text }}>
          {value}
        </Typography>
      </Grid>
    </>
  )

  return (
    <Grid item container direction="column">
      <Grid item container>
        <Grid item container direction="column" xs={8}>
          {firstFields.map(field => (
            <Grid item container key={field.value}>
              {adornmentValue(field.adornment, field.value)}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4}>
          <img src={confirmationIcon} alt="confirmation" />
        </Grid>
      </Grid>
      {secondFields.map((field, i) => (
        <Grid item container key={i}>
          <Grid item xs={6}>
            {field.promo ? (
              <Fields
                fields={field}
                values={promo}
                setValues={setPromo}
                errors={promoError}
                setErrors={setPromoError}
                isWhite
              />
            ) : (
              adornmentValue(field.adornment, field.value)
            )}
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={6}>
              <Typography variant="h5" classes={{ root: classes.priceLabel }}>
                {prices[i].label}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">{prices[i].value}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
