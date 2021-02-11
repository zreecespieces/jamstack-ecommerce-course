import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import complete from "../../images/order-placed.svg"

const useStyles = makeStyles(theme => ({}))

export default function ThankYou({ selectedShipping }) {
  const classes = useStyles()

  const addToDate = days => {
    var date = new Date()

    date.setDate(date.getDate() + days)

    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()

    return `${month}/${day}/${year}`
  }

  const getExpected = () => {
    switch (selectedShipping) {
      case "2-DAY SHIPPING":
        return addToDate(2)
      case "OVERNIGHT SHIPPING":
        return addToDate(1)
      default:
        return addToDate(14)
    }
  }

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <img src={complete} alt="order placed" />
      </Grid>
      <Grid item>
        <Typography variant="h4">Expected by {getExpected()}</Typography>
      </Grid>
    </Grid>
  )
}
