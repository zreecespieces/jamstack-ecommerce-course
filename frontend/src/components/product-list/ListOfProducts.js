import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import ProductFrameGrid from "./ProductFrameGrid"
import ProductFrameList from "./ProductFrameList"

const useStyles = makeStyles(theme => ({
  productContainer: {
    width: "95%",
    "& > *": {
      marginRight: ({ layout }) =>
        layout === "grid" ? "calc((100% - (25rem * 4)) / 3)" : 0,
      marginBottom: "5rem",
    },
    "& > :nth-child(4n)": {
      marginRight: 0,
    },
  },
}))

export default function ListOfProducts({
  products,
  layout,
  page,
  productsPerPage,
}) {
  const classes = useStyles({ layout })

  const FrameHelper = ({ Frame, product, variant }) => {
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    var sizes = []
    var colors = []
    product.node.variants.map(variant => {
      sizes.push(variant.size)
      colors.push(variant.color)
    })

    return (
      <Frame
        sizes={sizes}
        colors={colors}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        setSelectedSize={setSelectedSize}
        setSelectedColor={setSelectedColor}
        variant={variant}
        product={product}
      />
    )
  }

  var content = []
  products.map((product, i) =>
    product.node.variants.map(variant => content.push({ product: i, variant }))
  )

  return (
    <Grid item container classes={{ root: classes.productContainer }}>
      {content
        .slice((page - 1) * productsPerPage, page * productsPerPage)
        .map(item => (
          <FrameHelper
            Frame={layout === "grid" ? ProductFrameGrid : ProductFrameList}
            key={item.variant.id}
            variant={item.variant}
            product={products[item.product]}
          />
        ))}
    </Grid>
  )
}
