import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import ProductFrameGrid from "./ProductFrameGrid"

const useStyles = makeStyles(theme => ({
  productContainer: {
    width: "95%",
    "& > *": {
      marginRight: "calc((100% - (25rem * 4)) / 3)",
      marginBottom: "5rem",
    },
    "& > :nth-child(4n)": {
      marginRight: 0,
    },
  },
}))

export default function ListOfProducts({ products }) {
  const classes = useStyles()

  return (
    <Grid item container classes={{ root: classes.productContainer }}>
      {products.map(product =>
        product.node.variants.map(variant => (
          <ProductFrameGrid
            key={variant.id}
            variant={variant}
            product={product}
          />
        ))
      )}
    </Grid>
  )
}
