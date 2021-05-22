import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Item from "./Item"

import { CartContext } from "../../contexts"
import { useIsClient } from "../../hooks"

const useStyles = makeStyles(theme => ({}))

export default function CartItems() {
  const classes = useStyles()
  const { cart } = useContext(CartContext)
  const { isClient, key } = useIsClient()

  return (
    <Grid key={key} item container direction="column" lg={6}>
      {!isClient
        ? null
        : cart.map(item => <Item item={item} key={item.variant.id} />)}
    </Grid>
  )
}
