import React from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import Typography from "@material-ui/core/Typography"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  drawer: {
    height: "100%",
    width: "30rem",
    backgroundColor: theme.palette.primary.main,
  },
  id: {
    fontSize: "2.5rem",
    fontWeight: 600,
    marginTop: "1rem",
    marginLeft: "1rem",
  },
  bold: {
    fontWeight: 600,
  },
  date: {
    fontWeight: 600,
    marginLeft: "1rem",
    marginBottom: "1rem",
  },
  padding: {
    padding: "1rem",
  },
  status: {
    marginLeft: "1rem",
  },
  dark: {
    backgroundColor: theme.palette.secondary.main,
  },
  chipRoot: {
    backgroundColor: theme.palette.primary.main,
  },
  prices: {
    padding: "0.5rem 1rem",
  },
}))

export default function OrderDetails({ orders, open, setOpen }) {
  const classes = useStyles()

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const order = orders.find(order => order.id === open)

  const prices = [
    { label: "Subtotal", value: order?.subtotal },
    { label: "Shipping", value: order?.shippingOption.price },
    { label: "Tax", value: order?.tax },
    { label: "Total", value: order?.total },
    {
      label: "Payment",
      string: `${order?.paymentMethod.brand.toUpperCase()} ${
        order?.paymentMethod.last4
      }`,
    },
    { label: "Transaction", string: order?.transaction },
  ]

  return (
    <SwipeableDrawer
      open={!!open}
      onOpen={() => null}
      onClose={() => setOpen(null)}
      anchor="right"
      classes={{ paper: classes.drawer }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <Grid container direction="column">
        <Grid item classes={{ root: classes.dark }}>
          <Typography variant="h2" classes={{ root: classes.id }}>
            Order #
            {order?.id
              .slice(order.id.length - 10, order.id.length)
              .toUpperCase()}
          </Typography>
        </Grid>
        <Grid item container classes={{ root: classes.dark }}>
          <Grid item classes={{ root: classes.status }}>
            <Chip
              label={order?.status}
              classes={{ label: classes.bold, root: classes.chipRoot }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2" classes={{ root: classes.date }}>
              {`${order?.createdAt.split("-")[1]}/${
                order?.createdAt.split("-")[2].split("T")[0]
              }/${order?.createdAt.split("-")[0]}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item classes={{ root: classes.padding }}>
          <Typography variant="body2" classes={{ root: classes.bold }}>
            Billing
          </Typography>
          <Typography variant="body2">
            {order?.billingInfo.name}
            <br />
            {order?.billingInfo.email}
            <br />
            {order?.billingInfo.phone}
            <br />
            <br />
            {order?.billingAddress.street}
            <br />
            {order?.billingAddress.city}, {order?.billingAddress.state}{" "}
            {order?.billingAddress.zip}
          </Typography>
        </Grid>
        <Grid item classes={{ root: clsx(classes.dark, classes.padding) }}>
          <Typography variant="body2" classes={{ root: classes.bold }}>
            Shipping
          </Typography>
          <Typography variant="body2">
            {order?.shippingInfo.name}
            <br />
            {order?.shippingInfo.email}
            <br />
            {order?.shippingInfo.phone}
            <br />
            <br />
            {order?.shippingAddress.street}
            <br />
            {order?.shippingAddress.city}, {order?.shippingAddress.state}{" "}
            {order?.shippingAddress.zip}
          </Typography>
        </Grid>
        {prices.map(price => (
          <Grid
            key={price.label}
            item
            container
            justify="space-between"
            classes={{ root: classes.prices }}
          >
            <Grid item>
              <Typography variant="body2" classes={{ root: classes.bold }}>
                {price.label}
              </Typography>
            </Grid>
            <Grid item>
              {price.string ? (
                <Typography variant="body2">{price.string}</Typography>
              ) : (
                <Chip
                  label={`$${price.value.toFixed(2)}`}
                  classes={{ label: classes.bold }}
                />
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </SwipeableDrawer>
  )
}
