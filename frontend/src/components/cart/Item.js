import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Chip from "@material-ui/core/Chip"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import QtyButton from "../product-list/QtyButton"

import { CartContext } from "../../contexts"
import { removeFromCart } from "../../contexts/actions"

import FavoriteIcon from "../../images/Favorite"
import SubscribeIcon from "../../images/Subscription"
import DeleteIcon from "../../images/Delete"

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
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem",
    },
  },
  actionWrapper: {
    height: "3rem",
    width: "3rem",
    marginBottom: -8,
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
      width: "2rem",
    },
  },
  infoContainer: {
    width: "35rem",
    height: "8rem",
    marginLeft: "1rem",
    position: "relative",
  },
  chipWrapper: {
    position: "absolute",
    top: "3.5rem",
  },
  itemContainer: {
    margin: "2rem 0 2rem 2rem",
    [theme.breakpoints.down("md")]: {
      margin: "2rem 0",
    },
  },
  actionButton: {
    [theme.breakpoints.down("xs")]: {
      padding: "12px 6px",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))

export default function Item({ item }) {
  const classes = useStyles()
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))
  const { dispatchCart } = useContext(CartContext)

  const handleDelete = () => {
    dispatchCart(removeFromCart(item.variant, item.qty))
  }

  const actions = [
    { icon: FavoriteIcon, color: theme.palette.secondary.main },
    { icon: SubscribeIcon, color: theme.palette.secondary.main },
    {
      icon: DeleteIcon,
      color: theme.palette.error.main,
      size: matchesXS ? "1.75rem" : "2.5rem",
      onClick: handleDelete,
    },
  ]

  return (
    <Grid item container classes={{ root: classes.itemContainer }}>
      <Grid item>
        <img
          className={classes.productImage}
          src={process.env.GATSBY_STRAPI_URL + item.variant.images[0].url}
          alt={item.variant.id}
        />
      </Grid>
      <Grid
        item
        container
        direction={matchesXS ? "row" : "column"}
        justify="space-between"
        classes={{ root: classes.infoContainer }}
      >
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
              isCart
            />
          </Grid>
        </Grid>
        <Grid item classes={{ root: classes.chipWrapper }}>
          <Chip label={`$${item.variant.price}`} />
        </Grid>
        <Grid item container justify="space-between" alignItems="flex-end">
          <Grid item xs={7} sm>
            <Typography variant="body1" classes={{ root: classes.id }}>
              ID: {item.variant.id}
            </Typography>
          </Grid>
          <Grid item container justify="flex-end" xs={5} sm>
            {actions.map((action, i) => (
              <Grid item key={i}>
                <IconButton
                  disableRipple
                  onClick={() => action.onClick()}
                  classes={{ root: classes.actionButton }}
                >
                  <span
                    className={classes.actionWrapper}
                    style={{ height: action.size, width: action.size }}
                  >
                    <action.icon color={action.color} />
                  </span>
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
