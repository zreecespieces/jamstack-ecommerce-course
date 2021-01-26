import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import CheckoutNavigation from "./CheckoutNavigation"

const useStyles = makeStyles(theme => ({
  stepContainer: {
    width: "40rem",
    height: "25rem",
    backgroundColor: theme.palette.primary.main,
  },
}))

export default function CheckoutPortal() {
  const classes = useStyles()

  return (
    <Grid item container direction="column" alignItems="flex-end" xs={6}>
      <CheckoutNavigation />
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.stepContainer }}
      ></Grid>
    </Grid>
  )
}
