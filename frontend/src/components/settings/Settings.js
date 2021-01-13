import React, { useContext } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Details from "./Details"
import Payments from "./Payments"
import Location from "./Location"
import Edit from "./Edit"

import { UserContext } from "../../contexts"

const useStyles = makeStyles(theme => ({
  bottomRow: {
    borderTop: "4px solid #fff",
  },
  sectionContainer: {
    height: "50%",
  },
}))

export default function Settings({ setSelectedSetting }) {
  const classes = useStyles()
  const { user } = useContext(UserContext)

  return (
    <>
      <Grid container classes={{ root: classes.sectionContainer }}>
        <Details user={user} />
        <Payments user={user} />
      </Grid>
      <Grid
        container
        classes={{ root: clsx(classes.bottomRow, classes.sectionContainer) }}
      >
        <Location user={user} />
        <Edit user={user} setSelectedSetting={setSelectedSetting} />
      </Grid>
    </>
  )
}
