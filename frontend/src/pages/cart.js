import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/ui/layout"
import CheckoutPortal from "../components/cart/CheckoutPortal"
import CartItems from "../components/cart/CartItems"

import { UserContext } from "../contexts"

const useStyles = makeStyles(theme => ({
  cartContainer: {
    minHeight: "70vh",
  },
}))

export default function Cart() {
  const classes = useStyles()
  const { user } = useContext(UserContext)

  return (
    <Layout>
      <Grid
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.cartContainer }}
      >
        <Grid item>
          <Typography variant="h1">{user.username}'s Cart</Typography>
        </Grid>
        <Grid item container>
          <CartItems />
          <CheckoutPortal user={user} />
        </Grid>
      </Grid>
    </Layout>
  )
}
