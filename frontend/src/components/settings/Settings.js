import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Details from "./Details"

const useStyles = makeStyles(theme => ({}))

export default function Settings() {
  const classes = useStyles()

  return (
    <Grid container>
      <Details />
    </Grid>
  )
}
