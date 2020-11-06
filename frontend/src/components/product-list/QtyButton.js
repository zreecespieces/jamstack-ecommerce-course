import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { makeStyles } from "@material-ui/core/styles"

import cart from "../../images/cart.svg"

const useStyles = makeStyles(theme => ({
  qtyText: {
    color: "#fff",
  },
  mainGroup: {
    height: "3rem",
  },
  editButtons: {
    height: "1.525rem",
    borderRadius: 0,
  },
}))

export default function QtyButton() {
  const classes = useStyles()
  const [qty, setQty] = useState(1)

  return (
    <Grid item>
      <ButtonGroup classes={{ root: classes.mainGroup }}>
        <Button>
          <Typography variant="h3" classes={{ root: classes.qtyText }}>
            {qty}
          </Typography>
        </Button>
        <ButtonGroup orientation="vertical">
          <Button classes={{ root: classes.editButtons }}>
            <Typography variant="h3" classes={{ root: classes.qtyText }}>
              +
            </Typography>
          </Button>
          <Button classes={{ root: classes.editButtons }}>
            <Typography variant="h3" classes={{ root: classes.qtyText }}>
              -
            </Typography>
          </Button>
        </ButtonGroup>
        <Button>
          <img src={cart} alt="add to cart" />
        </Button>
      </ButtonGroup>
    </Grid>
  )
}
