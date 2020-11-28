import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import ProductFrameGrid from "../product-list/ProductFrameGrid"

const useStyles = makeStyles(theme => ({
  recentContainer: {
    margin: "10rem 0",
    "& > :not(:last-child)": {
      marginRight: "5rem",
    },
  },
}))

export default function RecentlyViewed({ products }) {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justify="center"
      classes={{ root: classes.recentContainer }}
    >
      {products
        ? products.map(product => {
            const hasStyles = product.node.variants.some(
              variant => variant.style !== null
            )

            return (
              <ProductFrameGrid
                key={product.node.variants[product.selectedVariant].id}
                product={product}
                variant={product.node.variants[product.selectedVariant]}
                disableQuickView
                hasStyles={hasStyles}
              />
            )
          })
        : null}
    </Grid>
  )
}
