import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  navbar: {
    backgroundColor: theme.palette.secondary.main,
    width: "40rem",
    height: "5rem",
  },
}))

export default function CheckoutNavigation() {
  const classes = useStyles()

  return <Grid item container classes={{ root: classes.navbar }}></Grid>
}
