import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Chip from "@material-ui/core/Chip"
import { makeStyles } from "@material-ui/core/styles"

import QtyButton from "../product-list/QtyButton"

import favoriteIcon from "../../images/favorite.svg"
import subscribeIcon from "../../images/subscription.svg"
import deleteIcon from "../../images/delete.svg"

const useStyles = makeStyles(theme => ({
  productImage: {
    height: "10rem",
    width: "10rem",
  },
  name: {
    color: theme.palette.secondary.main,
  },
  id: {
    color: theme.palette.secondary.main,
    fontSize: "1rem",
  },
}))

export default function Item({ item }) {
  const classes = useStyles()

  const actions = [
    { icon: favoriteIcon },
    { icon: subscribeIcon },
    { icon: deleteIcon },
  ]

  return (
    <Grid item container>
      <Grid item>
        <img
          className={classes.productImage}
          src={process.env.GATSBY_STRAPI_URL + item.variant.images[0].url}
          alt={item.variant.id}
        />
      </Grid>
      <Grid item container direction="column">
        <Grid item container justify="space-between">
          <Grid item>
            <Typography variant="h5" classes={{ root: classes.name }}>
              {item.name}
            </Typography>
          </Grid>
          <Grid item>
            <QtyButton
              name={item.name}
              selectedVariant={0}
              variants={[item.variant]}
              stock={[{ qty: item.stock }]}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Chip label={`$${item.variant.price}`} />
        </Grid>
        <Grid item container justify="space-between">
          <Grid item>
            <Typography variant="body1" classes={{ root: classes.id }}>
              ID: {item.variant.id}
            </Typography>
          </Grid>
          <Grid item container>
            {actions.map(action => (
              <Grid item>
                <IconButton>
                  <img src={action.icon} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
