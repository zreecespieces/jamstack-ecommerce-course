import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/ui/layout"
import SEO from "../components/ui/seo"
import CheckoutPortal from "../components/cart/CheckoutPortal"
import CartItems from "../components/cart/CartItems"

import { UserContext } from "../contexts"

const useStyles = makeStyles(theme => ({
  cartContainer: {
    minHeight: "70vh",
  },
  name: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
}))

export default function Cart() {
  const classes = useStyles()
  const { user } = useContext(UserContext)
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const items = <CartItems />
  const checkout = <CheckoutPortal user={user} />

  return (
    <Layout>
      <SEO
        title="Cart"
        description="Make one-time purchases or buy a subscription for any of the amazing products at VAR-X."
      />
      <Grid
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.cartContainer }}
      >
        <Grid item>
          <Typography
            variant="h1"
            align="center"
            classes={{ root: classes.name }}
          >
            {user.username}'s Cart
          </Typography>
        </Grid>
        <Grid item container>
          {matchesMD ? checkout : items}
          {matchesMD ? items : checkout}
        </Grid>
      </Grid>
    </Layout>
  )
}
