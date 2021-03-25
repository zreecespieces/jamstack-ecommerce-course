import React, { useState, useEffect, useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { useQuery } from "@apollo/client"

import { UserContext } from "../../contexts"

import ProductReview from "./ProductReview"
import { StyledPagination } from "../../templates/ProductList"
import { GET_REVIEWS } from "../../apollo/queries"

const useStyles = makeStyles(theme => ({
  reviews: {
    padding: "0 3rem",
  },
  pagination: {
    marginBottom: "3rem",
  },
}))

export default function ProductReviews({ product, edit, setEdit }) {
  const classes = useStyles()
  const { user } = useContext(UserContext)
  const [reviews, setReviews] = useState([])
  const [page, setPage] = useState(1)

  const { data } = useQuery(GET_REVIEWS, { variables: { id: product } })

  useEffect(() => {
    if (data) {
      setReviews(data.product.reviews)
    }
  }, [data])

  const reviewsPerPage = 15
  const numPages = Math.ceil(reviews.length / reviewsPerPage)

  return (
    <Grid
      id="reviews"
      item
      container
      direction="column"
      classes={{ root: classes.reviews }}
    >
      {edit && (
        <ProductReview
          user={user}
          reviews={reviews}
          setReviews={setReviews}
          product={product}
          setEdit={setEdit}
        />
      )}
      {reviews
        .filter(review =>
          edit ? review.user.username !== user.username : review
        )
        .slice((page - 1) * reviewsPerPage, page * reviewsPerPage)
        .map(review => (
          <ProductReview
            reviews={reviews}
            key={review.id}
            product={product}
            review={review}
          />
        ))}
      <Grid item container justify="flex-end">
        <Grid item>
          <StyledPagination
            classes={{ root: classes.pagination }}
            count={numPages}
            page={page}
            onChange={(e, newPage) => setPage(newPage)}
            color="primary"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
