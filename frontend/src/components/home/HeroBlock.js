import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Lottie from "react-lottie"

import animationData from "../../images/data.json"

export default function HeroBlock() {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
  }

  return (
    <Grid container justify="space-around" alignItems="center">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography align="center" variant="h1">
              The Premier
              <br />
              Developer Clothing Line
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h3">
              high quality, custom-designed shirts, hats, and hoodies
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Lottie isStopped options={defaultOptions} width="50rem" />
      </Grid>
    </Grid>
  )
}
