import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

import marketingAdornment from "../../images/marketing-adornment.svg"
import moreByUs from "../../images/more-by-us.svg"
import store from "../../images/store.svg"

const useStyles = makeStyles(theme => ({
  button: {
    backgroundImage: `url(${marketingAdornment})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "50rem",
    width: "50rem",
    transition: "transform 0.5s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("lg")]: {
      height: "40rem",
      width: "40rem",
      margin: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30rem",
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "20rem",
      width: "20rem",
      margin: "2rem 0",
      "&:hover": {
        transform: "scale(1)",
      },
    },
  },
  container: {
    margin: "15rem 0",
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      height: "8rem",
      width: "8rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
      width: "5rem",
    },
  },
  label: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.25rem",
    },
  },
}))

export default function MarketingButtons() {
  const classes = useStyles()

  const buttons = [
    { label: "Store", icon: store, link: "/hoodies" },
    { label: "More By Us", icon: moreByUs, href: "https://www.google.com" },
  ]

  return (
    <Grid
      container
      justify="space-around"
      classes={{ root: classes.container }}
    >
      {buttons.map(button => (
        <Grid item key={button.label}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            classes={{ root: classes.button }}
            component={button.link ? Link : "a"}
            to={button.link ? button.link : undefined}
            href={button.href ? button.href : undefined}
          >
            <Grid item>
              <img
                className={classes.icon}
                src={button.icon}
                alt={button.label}
              />
            </Grid>
            <Grid item>
              <Typography classes={{ root: classes.label }} variant="h1">
                {button.label}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
