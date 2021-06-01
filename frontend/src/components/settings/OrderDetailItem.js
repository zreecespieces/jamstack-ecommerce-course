import React from "react"
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  product: {
    height: "8rem",
    width: "8rem",
  },
  chipRoot: {
    backgroundColor: theme.palette.primary.main,
  },
  itemInfo: {
    textAlign: "right",
  },
  container: {
    height: "10rem",
  },
  subscriptionChip: {
    marginTop: "0.5rem",
  },
}))

export default function OrderDetailItem({ item }) {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      justify="space-between"
      alignItems="center"
      classes={{ root: classes.container }}
    >
      <Grid item>
        <img
          src={item.variant.images[0].url}
          alt={item.name}
          className={classes.product}
        />
      </Grid>
      <Grid item classes={{ root: classes.itemInfo }}>
        <Typography variant="body2">
          {item.name} - x{item.qty}
        </Typography>
        {item.variant.style ? (
          <Typography variant="body2">Style: {item.variant.style}</Typography>
        ) : null}
        {item.variant.size ? (
          <Typography variant="body2">Size: {item.variant.size}</Typography>
        ) : null}
        <Grid container direction="column">
          <Grid item>
            <Chip
              label={`$${item.variant.price}`}
              classes={{ root: classes.chipRoot }}
            />
          </Grid>
          {item.subscription ? (
            <Grid item classes={{ root: classes.subscriptionChip }}>
              <Chip
                label={`Every ${item.subscription}`}
                classes={{ root: classes.chipRoot }}
              />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  )
}
