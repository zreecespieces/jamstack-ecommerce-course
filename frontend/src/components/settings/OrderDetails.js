import React from "react"
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
  },
  bold: {
    fontWeight: 600,
  },
  date: {
    fontWeight: 600,
    marginLeft: "1rem",
  },
}))

export default function OrderDetails({ orders, open, setOpen }) {
  const classes = useStyles()

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const order = orders.find(order => order.id === open)

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
        <Grid item>
          <Typography
            align="center"
            variant="h2"
            classes={{ root: classes.id }}
          >
            Order #
            {order?.id
              .slice(order.id.length - 10, order.id.length)
              .toUpperCase()}
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <Chip label={order?.status} classes={{ label: classes.bold }} />
          </Grid>
          <Grid item>
            <Typography variant="body2" classes={{ root: classes.date }}>
              {`${order?.createdAt.split("-")[1]}/${
                order?.createdAt.split("-")[2].split("T")[0]
              }/${order?.createdAt.split("-")[0]}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  )
}
