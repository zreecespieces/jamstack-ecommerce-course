import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

import Slots from "./Slots"

import card from "../../images/card.svg"

const useStyles = makeStyles(theme => ({
  number: {
    color: "#fff",
    marginBottom: "5rem",
  },
  removeCard: {
    backgroundColor: "#fff",
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: "2rem",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  removeCardText: {
    fontSize: "1rem",
    color: theme.palette.primary.main,
    fontFamily: "Philosopher",
    fontStyle: "italic",
  },
  icon: {
    marginBottom: "3rem",
  },
  paymentContainer: {
    borderLeft: "4px solid #fff",
    position: "relative",
  },
  slotContainer: {
    position: "absolute",
    bottom: 0,
  },
}))

export default function Payments() {
  const classes = useStyles()

  const cards = [{ last4: 1234, brand: "Visa" }]

  return (
    <Grid
      item
      container
      direction="column"
      xs={6}
      alignItems="center"
      justify="center"
      classes={{ root: classes.paymentContainer }}
    >
      <Grid item>
        <img src={card} alt="payment settings" className={classes.icon} />
      </Grid>
      <Grid item container justify="center">
        <Grid item>
          <Typography variant="h3" classes={{ root: classes.number }}>
            {cards
              ? `${cards[0].brand.toUpperCase()} **** **** **** ${
                  cards[0].last4
                }`
              : "Add A New Card During Checkout"}
          </Typography>
        </Grid>
        {cards && (
          <Grid item>
            <Button variant="contained" classes={{ root: classes.removeCard }}>
              <Typography
                variant="h6"
                classes={{ root: classes.removeCardText }}
              >
                remove card
              </Typography>
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid item container classes={{ root: classes.slotContainer }}>
        <Slots />
      </Grid>
    </Grid>
  )
}
