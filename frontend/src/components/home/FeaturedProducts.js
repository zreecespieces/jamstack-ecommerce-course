import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import featuredAdornment from "../../images/featured-adornment.svg"
import frame from "../../images/product-frame-grid.svg"

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "120rem",
  },
  featured: {
    height: "20rem",
    width: "20rem",
  },
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 0,
    height: "25rem",
    width: "25rem",
  },
}))

export default function FeaturedProductions() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query GetFeatured {
      allStrapiProduct(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            variants {
              price
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Grid container direction="column" classes={{ root: classes.background }}>
      {data.allStrapiProduct.edges.map(({ node }, i) => (
        <Grid item container key={node.strapiId}>
          <Grid item>
            <IconButton classes={{ root: classes.frame }}>
              <img
                src={
                  process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url
                }
                alt={node.name}
                className={classes.featured}
              />
            </IconButton>
            {/* <Grid container direction="column">

            </Grid> */}
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
