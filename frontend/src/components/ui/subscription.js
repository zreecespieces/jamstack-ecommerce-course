import React, { useState } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Dialog from "@material-ui/core/Dialog"
import Chip from "@material-ui/core/Chip"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import QtyButton from "../product-list/QtyButton"

import { CartContext } from "../../contexts"

import SubscriptionIcon from "../../images/Subscription"

const useStyles = makeStyles(theme => ({
  iconWrapper: {
    height: ({ size }) => `${size || 2}rem`,
    width: ({ size }) => `${size || 2}rem`,
  },
  row: {
    height: "4rem",
  },
  light: {
    backgroundColor: theme.palette.primary.main,
  },
  dark: {
    backgroundColor: theme.palette.secondary.main,
  },
  iconButton: {
    padding: 0,
  },
  cartButton: {
    height: "8rem",
    borderRadius: 0,
    width: "100%",
  },
  cartText: {
    color: "#fff",
    fontSize: "4rem",
  },
  dialog: {
    borderRadius: 0,
  },
}))

export default function Subscription({ size }) {
  const classes = useStyles({ size })
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        classes={{ root: classes.iconButton }}
      >
        <span className={classes.iconWrapper}>
          <SubscriptionIcon />
        </span>
      </IconButton>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.dialog }}
      >
        <Grid container direction="column">
          <Grid
            item
            container
            justify="space-between"
            classes={{ root: clsx(classes.row, classes.dark) }}
          >
            <Grid item>
              <Typography variant="h4">Quantity</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify="space-between"
            classes={{ root: clsx(classes.row, classes.light) }}
          >
            <Grid item>
              <Typography variant="h4">Deliver Every</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              classes={{ root: classes.cartButton }}
            >
              <Typography variant="h1" classes={{ root: classes.cartText }}>
                Add Subscription To Cart
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}
