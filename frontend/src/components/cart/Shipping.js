import React from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

import shippingIcon from "../../images/shipping.svg"

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 15,
    height: "10rem",
    width: "10rem",
    [theme.breakpoints.down("xs")]: {
      height: "6rem",
      width: "6rem",
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  label: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  container: {
    height: "100%",
    display: ({ selectedStep, stepNumber }) =>
      selectedStep !== stepNumber ? "none" : "flex",
  },
  icon: {
    marginTop: "-2rem",
    marginBottom: "1rem",
  },
  price: {
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.25rem",
    },
  },
  selected: {
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  selectedText: {
    color: theme.palette.secondary.main,
  },
}))

export default function Shipping({
  shippingOptions,
  selectedShipping,
  setSelectedShipping,
  selectedStep,
  stepNumber,
}) {
  const classes = useStyles({ stepNumber, selectedStep })

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justify="center"
      classes={{ root: classes.container }}
    >
      <Grid item>
        <img src={shippingIcon} alt="shipping" className={classes.icon} />
      </Grid>
      <Grid item container justify="space-around">
        {shippingOptions.map(option => (
          <Grid item key={option.label}>
            <Button
              classes={{
                root: clsx(classes.button, {
                  [classes.selected]: selectedShipping === option.label,
                }),
              }}
              onClick={() => setSelectedShipping(option.label)}
            >
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    variant="h5"
                    classes={{
                      root: clsx(classes.label, {
                        [classes.selectedText]:
                          selectedShipping === option.label,
                      }),
                    }}
                  >
                    {option.label}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    classes={{
                      root: clsx(classes.price, {
                        [classes.selectedText]:
                          selectedShipping === option.label,
                      }),
                    }}
                  >
                    {`$${option.price.toFixed(2)}`}
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
