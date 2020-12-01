import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

import ProductFrameGrid from "../product-list/ProductFrameGrid"

const useStyles = makeStyles(theme => ({
  recentContainer: {
    margin: "10rem 0",
    "& > :not(:last-child)": {
      marginRight: "5rem",
    },
  },
  arrow: {
    minWidth: 0,
    height: "4rem",
    width: "4rem",
    fontSize: "4rem",
    color: theme.palette.primary.main,
    borderRadius: 50,
  },
}))

export default function RecentlyViewed({ products }) {
  const classes = useStyles()
  const [firstIndex, setFirstIndex] = useState(0)

  const handleNavigation = direction => {
    if (firstIndex === 0 && direction === "backward") return null
    if (firstIndex + 4 === products.length && direction === "forward")
      return null
    setFirstIndex(direction === "forward" ? firstIndex + 1 : firstIndex - 1)
  }

  return (
    <Grid
      item
      container
      justify="center"
      alignItems="center"
      classes={{ root: classes.recentContainer }}
    >
      <Grid item>
        <Button
          onClick={() => handleNavigation("backward")}
          classes={{ root: classes.arrow }}
        >
          {"<"}
        </Button>
      </Grid>
      {products
        ? products.slice(firstIndex, firstIndex + 4).map(product => {
            const hasStyles = product.node.variants.some(
              variant => variant.style !== null
            )

            return (
              <ProductFrameGrid
                key={product.node.variants[product.selectedVariant].id}
                product={product}
                variant={product.node.variants[product.selectedVariant]}
                disableQuickView
                small
                hasStyles={hasStyles}
              />
            )
          })
        : null}
      <Grid item>
        <Button
          onClick={() => handleNavigation("forward")}
          classes={{ root: classes.arrow }}
        >
          {">"}
        </Button>
      </Grid>
    </Grid>
  )
}
