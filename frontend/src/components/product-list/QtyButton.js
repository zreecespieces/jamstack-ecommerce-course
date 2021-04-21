import React, { useState, useEffect, useContext } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Badge from "@material-ui/core/Badge"
import { makeStyles } from "@material-ui/core/styles"

import { CartContext } from "../../contexts"
import { addToCart, removeFromCart } from "../../contexts/actions"

import Cart from "../../images/Cart"

const useStyles = makeStyles(theme => ({
  qtyText: {
    color: ({ white }) => (white ? theme.palette.secondary.main : "#fff"),
  },
  mainGroup: {
    height: "3rem",
  },
  editButtons: {
    height: "1.525rem",
    borderRadius: 0,
    backgroundColor: ({ white }) =>
      white ? "#fff" : theme.palette.secondary.main,
    borderLeft: ({ white }) =>
      `2px solid ${white ? theme.palette.secondary.main : "#fff"}`,
    borderRight: ({ round }) => (round ? 0 : "2px solid #fff"),
    borderBottom: "none",
    borderTop: "none",
    borderRadius: ({ round }) => (round ? "0px 50px 50px 0px" : 0),
    "&:hover": {
      backgroundColor: ({ white }) =>
        white ? "#fff" : theme.palette.secondary.light,
    },
  },
  endButtons: {
    backgroundColor: ({ white }) =>
      white ? "#fff" : theme.palette.secondary.main,
    borderRadius: 50,
    border: "none",
  },
  cartButton: {
    marginLeft: "0 !important",
    transition: "background-color 1s ease",
  },
  minus: {
    marginTop: "-0.25rem",
  },
  minusButton: {
    borderTop: ({ white }) =>
      `2px solid ${white ? theme.palette.secondary.main : "#fff"}`,
  },
  qtyButton: {
    "&:hover": {
      backgroundColor: ({ white }) =>
        white ? "#fff" : theme.palette.secondary.main,
    },
  },
  badge: {
    color: "#fff",
    fontSize: "1.5rem",
    backgroundColor: theme.palette.secondary.main,
    padding: 0,
  },
  success: {
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },
}))

export default function QtyButton({
  stock,
  variants,
  selectedVariant,
  name,
  isCart,
  white,
  hideCartButton,
  round,
  override,
}) {
  const { cart, dispatchCart } = useContext(CartContext)
  const existingItem = isCart
    ? cart.find(item => item.variant === variants[selectedVariant])
    : null
  const classes = useStyles({ white, round })
  const [qty, setQtyState] = useState(isCart ? existingItem.qty : 1)
  const [success, setSuccess] = useState(false)

  let setQty

  if (override) {
    setQty = val => {
      override.setValue(val)
      setQtyState(val)
    }
  } else {
    setQty = setQtyState
  }

  const handleChange = direction => {
    if (qty === stock[selectedVariant].qty && direction === "up") {
      return null
    }

    if (qty === 1 && direction === "down") {
      return null
    }

    const newQty = direction === "up" ? qty + 1 : qty - 1

    setQty(newQty)

    if (isCart) {
      if (direction === "up") {
        dispatchCart(addToCart(variants[selectedVariant], 1, name))
      } else if (direction === "down") {
        dispatchCart(removeFromCart(variants[selectedVariant], 1))
      }
    }
  }

  const handleCart = () => {
    setSuccess(true)

    dispatchCart(
      addToCart(
        variants[selectedVariant],
        qty,
        name,
        stock[selectedVariant].qty
      )
    )
  }

  useEffect(() => {
    if (stock === null || stock === -1) {
      return undefined
    } else if (qty === 0 && stock[selectedVariant].qty !== 0) {
      setQty(1)
    } else if (qty > stock[selectedVariant].qty) {
      setQty(stock[selectedVariant].qty)
    }
  }, [stock, selectedVariant])

  useEffect(() => {
    let timer

    if (success) {
      timer = setTimeout(() => setSuccess(false), 1500)
    }

    return () => clearTimeout(timer)
  }, [success])

  return (
    <Grid item>
      <ButtonGroup classes={{ root: classes.mainGroup }}>
        <Button classes={{ root: clsx(classes.endButtons, classes.qtyButton) }}>
          <Typography variant="h3" classes={{ root: classes.qtyText }}>
            {qty}
          </Typography>
        </Button>
        <ButtonGroup orientation="vertical">
          <Button
            onClick={() => handleChange("up")}
            classes={{ root: classes.editButtons }}
          >
            <Typography variant="h3" classes={{ root: classes.qtyText }}>
              +
            </Typography>
          </Button>
          <Button
            onClick={() => handleChange("down")}
            classes={{ root: clsx(classes.editButtons, classes.minusButton) }}
          >
            <Typography
              variant="h3"
              classes={{ root: clsx(classes.qtyText, classes.minus) }}
            >
              -
            </Typography>
          </Button>
        </ButtonGroup>
        {hideCartButton ? null : (
          <Button
            onClick={handleCart}
            disabled={stock ? stock[selectedVariant].qty === 0 : true}
            classes={{
              root: clsx(classes.endButtons, classes.cartButton, {
                [classes.success]: success,
              }),
            }}
          >
            {success ? (
              <Typography variant="h3" classes={{ root: classes.qtyText }}>
                ✓
              </Typography>
            ) : (
              <Badge
                overlap="circle"
                badgeContent="+"
                classes={{ badge: classes.badge }}
              >
                <Cart color="#fff" />
              </Badge>
            )}
          </Button>
        )}
      </ButtonGroup>
    </Grid>
  )
}
