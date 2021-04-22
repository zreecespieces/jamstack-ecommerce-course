import React, { useState, useContext } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Dialog from "@material-ui/core/Dialog"
import Chip from "@material-ui/core/Chip"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"

import QtyButton from "../product-list/QtyButton"

import { CartContext, FeedbackContext } from "../../contexts"
import { setSnackbar, addToCart } from "../../contexts/actions"

import SubscriptionIcon from "../../images/Subscription"

const useStyles = makeStyles(theme => ({
  iconWrapper: {
    height: ({ size }) => `${size || 2}rem`,
    width: ({ size }) => `${size || 2}rem`,
  },
  row: {
    height: "4rem",
    padding: "0 0.5rem",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
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
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  cartText: {
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.25rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  dialog: {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
  },
  chipRoot: {
    backgroundColor: "#fff",
    height: "3rem",
    borderRadius: 50,
    "&:hover": {
      cursor: "pointer",
    },
  },
  chipLabel: {
    color: theme.palette.secondary.main,
  },
  select: {
    "&.MuiSelect-select": {
      paddingRight: 0,
    },
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
  },
  menuItem: {
    color: "#fff",
  },
  buttonWrapper: {
    width: "100%",
  },
}))

export default function Subscription({
  size,
  stock,
  selectedVariant,
  variant,
  name,
}) {
  const classes = useStyles({ size })
  const [open, setOpen] = useState(false)
  const [qty, setQty] = useState(1)
  const [frequency, setFrequency] = useState("Month")
  const { dispatchFeedback } = useContext(FeedbackContext)
  const { dispatchCart } = useContext(CartContext)
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

  const frequencies = [
    "Week",
    "Two Weeks",
    "Month",
    "Three Months",
    "Six Months",
    "Year",
  ]

  const handleCart = () => {
    dispatchCart(
      addToCart(variant, qty, name, stock[selectedVariant].qty, frequency)
    )
    setOpen(false)
    dispatchFeedback(
      setSnackbar({ status: "success", message: "Subscription Added To Cart." })
    )
  }

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
        fullScreen={matchesXS}
        fullWidth
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.dialog }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid
            item
            container
            justify="space-between"
            alignItems="center"
            classes={{ root: clsx(classes.row, classes.dark) }}
          >
            <Grid item>
              <Typography variant="h4">Quantity</Typography>
            </Grid>
            <Grid item>
              <QtyButton
                stock={stock}
                selectedVariant={selectedVariant}
                override={{ value: qty, setValue: setQty }}
                white
                round
                hideCartButton
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems={matchesXS ? "flex-start" : "center"}
            justify="space-between"
            direction={matchesXS ? "column" : "row"}
            classes={{ root: clsx(classes.row, classes.light) }}
          >
            <Grid item>
              <Typography variant="h4">Deliver Every</Typography>
            </Grid>
            <Grid item>
              <Select
                classes={{ select: classes.select }}
                value={frequency}
                disableUnderline
                IconComponent={() => null}
                MenuProps={{ classes: { paper: classes.menu } }}
                onChange={event => setFrequency(event.target.value)}
                renderValue={selected => (
                  <Chip
                    label={selected}
                    classes={{
                      root: classes.chipRoot,
                      label: classes.chipLabel,
                    }}
                  />
                )}
              >
                {frequencies.map(frequency => (
                  <MenuItem
                    classes={{ root: classes.menuItem }}
                    key={frequency}
                    value={frequency}
                  >
                    {frequency}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid item classes={{ root: classes.buttonWrapper }}>
            <Button
              variant="contained"
              onClick={handleCart}
              color="secondary"
              classes={{ root: classes.cartButton }}
            >
              <Typography variant="h1" classes={{ root: classes.cartText }}>
                Add Subscription To Cart
              </Typography>
            </Button>
          </Grid>
          {matchesXS && (
            <Grid item>
              <Button onClick={() => setOpen(false)}>
                <Typography variant="body2">Cancel</Typography>
              </Button>
            </Grid>
          )}
        </Grid>
      </Dialog>
    </>
  )
}
