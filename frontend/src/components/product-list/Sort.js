import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Chip from "@material-ui/core/Chip"
import { makeStyles } from "@material-ui/core/styles"

import sort from "../../images/sort.svg"
import close from "../../images/close-outline.svg"

const useStyles = makeStyles(theme => ({
  chipContainer: {
    [theme.breakpoints.down("md")]: {
      margin: "0.5rem",
    },
  },
}))

export default function Sort({ setOption }) {
  const classes = useStyles()

  const sortOptions = [
    { label: "A-Z" },
    { label: "Z-A" },
    { label: "NEWEST" },
    { label: "OLDEST" },
    { label: "PRICE ↑" },
    { label: "PRICE ↓" },
    { label: "REVIEWS" },
  ]

  return (
    <Grid item container justify="space-between" alignItems="center">
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={sort} alt="sort" />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Grid container justify="space-around">
          {sortOptions.map(option => (
            <Grid
              classes={{ root: classes.chipContainer }}
              item
              key={option.label}
            >
              <Chip label={option.label} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={close} alt="close" />
        </IconButton>
      </Grid>
    </Grid>
  )
}
