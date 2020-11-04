import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  size: {
    color: "#fff",
  },
  button: {
    border: "3px solid #fff",
    borderRadius: 50,
    height: "3rem",
    width: "3rem",
    minWidth: 0,
  },
}))

export default function Sizes({ sizes }) {
  const classes = useStyles()

  const possibleSizes = ["S", "M", "L"]
  var actualSizes = []

  if (possibleSizes.every(size => sizes.includes(size))) {
    actualSizes = possibleSizes
  }

  return (
    <Grid item container justify="space-between">
      {actualSizes.map(size => (
        <Grid item key={size}>
          <Button classes={{ root: classes.button }}>
            <Typography variant="h3" classes={{ root: classes.size }}>
              {size}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}
