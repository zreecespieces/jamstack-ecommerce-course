import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

const useStyles = makeStyles(theme => ({}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer>
      <Grid container justify="space-between">
        {/* Links */}
        <Grid item container>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h5">Contact Us</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">(555) 555-5555</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">zachary@var-x.com</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h5">Customer Service</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Contact Us</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">My Account</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h5">Information</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Privacy Policy</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Terms & Conditions</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Social Media Icons */}
        <Grid item container direction="column">
          <Grid item>
            <img src={facebook} alt="facebook" />
          </Grid>
          <Grid item>
            <img src={twitter} alt="twitter" />
          </Grid>
          <Grid item>
            <img src={instagram} alt="instagram" />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}
