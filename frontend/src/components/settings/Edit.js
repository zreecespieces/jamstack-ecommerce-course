import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"

import BackwardsIcon from "../../images/BackwardsOutline"
import editIcon from "../../images/edit.svg"
import saveIcon from "../../images/save.svg"

const useStyles = makeStyles(theme => ({
  icon: {
    height: "8rem",
    width: "8rem",
  },
  editContainer: {
    borderLeft: "4px solid #fff",
  },
}))

export default function Edit({ setSelectedSetting }) {
  const classes = useStyles()

  return (
    <Grid
      item
      container
      xs={6}
      justify="space-evenly"
      alignItems="center"
      classes={{ root: classes.editContainer }}
    >
      <Grid item>
        <IconButton onClick={() => setSelectedSetting(null)}>
          <span className={classes.icon}>
            <BackwardsIcon color="#fff" />
          </span>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <img src={editIcon} alt="edit settings" className={classes.icon} />
        </IconButton>
      </Grid>
    </Grid>
  )
}
