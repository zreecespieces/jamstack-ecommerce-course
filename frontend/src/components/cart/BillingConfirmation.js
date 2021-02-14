import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.secondary.main,
    fontSize: "1.5rem",
  },
  values: {
    fontSize: "1.25rem",
  },
  wrapper: {
    margin: "1rem 2rem",
  },
}))

export default function BillingConfirmation({
  detailForBilling,
  billingDetails: { name, email, phone },
  detailSlot,
  locationForBilling,
  billingLocation: { street, zip, city, state },
  locationSlot,
}) {
  const classes = useStyles()

  const fields = [
    {
      title: "Billing Info",
      values: { name, email, phone },
      hidden: detailForBilling === detailSlot,
    },
    {
      title: "Billing Address",
      values: { address1: street, address2: `${city}, ${state} ${zip}` },
      hidden: locationForBilling === locationSlot,
    },
  ]

  return (
    <Grid item container justify="flex-end">
      {fields.map(field =>
        field.hidden ? null : (
          <Grid item key={field.title} classes={{ root: classes.wrapper }}>
            <Typography
              align="right"
              variant="h4"
              classes={{ root: classes.heading }}
            >
              {field.title}
            </Typography>
            <Typography
              align="right"
              variant="h3"
              classes={{ root: classes.values }}
            >
              {Object.keys(field.values).map(value => (
                <span key={value}>
                  {field.values[value]}
                  <br />
                </span>
              ))}
            </Typography>
          </Grid>
        )
      )}
    </Grid>
  )
}
