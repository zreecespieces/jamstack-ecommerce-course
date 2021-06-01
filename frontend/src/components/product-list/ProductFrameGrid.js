import React, { useState } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

import QuickView from "./QuickView"

import frame from "../../images/product-frame-grid.svg"

const useStyles = makeStyles(theme => ({
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "25rem",
    width: "25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "20rem",
      width: "20rem",
    },
    [theme.breakpoints.up("xs")]: {
      height: ({ small }) => (small ? "15rem" : undefined),
      width: ({ small }) => (small ? "15rem" : undefined),
    },
  },
  product: {
    height: "20rem",
    width: "20rem",
    [theme.breakpoints.down("xs")]: {
      height: "15rem",
      width: "15rem",
    },
    [theme.breakpoints.up("xs")]: {
      height: ({ small }) => (small ? "12rem" : undefined),
      width: ({ small }) => (small ? "12rem" : undefined),
    },
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    height: "5rem",
    width: "25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-0.1rem",
    [theme.breakpoints.down("xs")]: {
      width: "20rem",
    },
    [theme.breakpoints.up("xs")]: {
      width: ({ small }) => (small ? "15rem" : undefined),
    },
  },
  invisibility: {
    visibility: "hidden",
  },
  frameContainer: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}))

export const colorIndex = (product, variant, color) => {
  return product.node.variants.indexOf(
    product.node.variants.filter(
      item =>
        item.color === color &&
        variant.style === item.style &&
        item.size === variant.size
    )[0]
  )
}

export default function ProductFrameGrid({
  product,
  variant,
  sizes,
  colors,
  selectedColor,
  selectedSize,
  setSelectedColor,
  setSelectedSize,
  hasStyles,
  disableQuickView,
  small,
  stock,
  rating,
}) {
  const classes = useStyles({ small })
  const [open, setOpen] = useState(false)

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  if (matchesMD && open) {
    setOpen(false)
  }

  const imageIndex = colorIndex(product, variant, selectedColor)

  const imgURL =
    imageIndex !== -1
      ? product.node.variants[imageIndex].images[0].localFile
      : variant.images[0].localFile

  const image = getImage(imgURL)

  const productName = product.node.name.split(" ")[0]

  return (
    <Grid
      item
      classes={{
        root: clsx(classes.frameContainer, {
          [classes.invisibility]: open === true,
        }),
      }}
    >
      <Grid
        container
        direction="column"
        onClick={() =>
          matchesMD || disableQuickView
            ? navigate(
                `/${product.node.category.name.toLowerCase()}/${product.node.name
                  .split(" ")[0]
                  .toLowerCase()}${hasStyles ? `?style=${variant.style}` : ""}`
              )
            : setOpen(true)
        }
      >
        <Grid item classes={{ root: classes.frame }}>
          <GatsbyImage
            image={image}
            alt={product.node.name}
            className={classes.product}
          />
        </Grid>
        <Grid item classes={{ root: classes.title }}>
          <Typography variant="h5">{productName}</Typography>
        </Grid>
      </Grid>
      <QuickView
        open={open}
        setOpen={setOpen}
        image={image}
        name={productName}
        price={variant.price}
        product={product}
        variant={variant}
        sizes={sizes}
        colors={colors}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        setSelectedSize={setSelectedSize}
        setSelectedColor={setSelectedColor}
        hasStyles={hasStyles}
        stock={stock}
        rating={rating}
        imageIndex={imageIndex}
      />
    </Grid>
  )
}
