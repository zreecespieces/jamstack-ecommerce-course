import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  slot: {
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "2.5rem",
    height: "2.5rem",
    minWidth: 0,
    border: `0.15rem solid ${theme.palette.secondary.main}`,
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  slotText: {
    color: theme.palette.secondary.main,
    marginLeft: "-0.25rem",
  },
  slotWrapper: {
    marginLeft: "2rem",
    "& > :not(:first-child)": {
      marginLeft: "-0.5rem",
    },
  },
}))

export default function QuickView() {
  const classes = useStyles()

  return (
    <Grid item classes={{ root: classes.slotWrapper }}>
      {[1, 2, 3].map(slot => (
        <Button key={slot} classes={{ root: classes.slot }}>
          <Typography variant="h5" classes={{ root: classes.slotText }}>
            {slot}
          </Typography>
        </Button>
      ))}
    </Grid>
  )
}
