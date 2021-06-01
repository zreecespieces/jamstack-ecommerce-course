import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  selected: {
    height: "40rem",
    width: "40rem",
    [theme.breakpoints.down("sm")]: {
      height: "30rem",
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "20rem",
      width: "20rem",
    },
  },
  small: {
    height: "5rem",
    width: "5rem",
    [theme.breakpoints.down("xs")]: {
      height: "3rem",
      width: "3rem",
    },
  },
  imageItem: {
    margin: "1rem",
  },
}))

export default function ProductImages({
  images,
  selectedImage,
  setSelectedImage,
}) {
  const classes = useStyles()

  const image = getImage(images[selectedImage].localFile)

  return (
    <Grid item container direction="column" alignItems="center" lg={6}>
      <Grid item>
        <GatsbyImage
          image={image}
          alt="product_large"
          className={classes.selected}
        />
      </Grid>
      <Grid item container justify="center">
        {images.map((imageData, i) => {
          const image = getImage(imageData.localFile)

          return (
            <Grid item classes={{ root: classes.imageItem }} key={i}>
              <IconButton onClick={() => setSelectedImage(i)}>
                <GatsbyImage
                  image={image}
                  alt={`product_small${i}`}
                  className={classes.small}
                />
              </IconButton>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
