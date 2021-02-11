import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import complete from "../../images/order-placed.svg"

const useStyles = makeStyles(theme => ({
  detailsButton: {
    padding: "0.25rem 0",
    textTransform: "none",
  },
  order: {
    fontWeight: 600,
  },
  shopText: {
    fontSize: "2rem",
    fontWeight: 600,
    textTransform: "none",
  },
  container: {
    height: "100%",
    position: "relative",
  },
  shopWrapper: {
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
  },
  icon: {
    marginTop: "-3rem",
  },
}))

export default function ThankYou({ selectedShipping, order }) {
  const classes = useStyles()

  const addToDate = days => {
    var date = new Date()

    date.setDate(date.getDate() + days)

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

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
      classes={{ root: classes.container }}
    >
      <Grid item>
        <img src={complete} alt="order placed" className={classes.icon} />
      </Grid>
      <Grid item>
        <Typography variant="h4">Expected by {getExpected()}</Typography>
        <Grid item container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" classes={{ root: classes.order }}>
              Order #{order.id.slice(order.id.length - 10, order.id.length)}
            </Typography>
          </Grid>
          <Grid item>
            <Button classes={{ root: classes.detailsButton }}>
              <Typography variant="body2">Details ></Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item classes={{ root: classes.shopWrapper }}>
        <Button component={Link} to="/hats">
          <Typography variant="body2" classes={{ root: classes.shopText }}>
            Shop >
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}
