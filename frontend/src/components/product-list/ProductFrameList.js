import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import frame from "../../images/product-frame-list.svg"

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "25rem",
  },
  info: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "100%",
  },
}))

export default function ProductFrameList({ product, variant }) {
  const classes = useStyles()

  return (
    <Grid item container>
      <Grid item xs={10} container classes={{ root: classes.frame }}></Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        classes={{ root: classes.info }}
      ></Grid>
    </Grid>
  )
}
