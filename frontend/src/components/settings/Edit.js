import React, { useContext, useState } from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"

import Confirmation from "./Confirmation"

import { FeedbackContext } from "../../contexts"
import { setSnackbar, setUser } from "../../contexts/actions"

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
    [theme.breakpoints.down("md")]: {
      height: "30rem",
      borderLeft: 0,
    },
  },
}))

export default function Edit({
  setSelectedSetting,
  edit,
  setEdit,
  details,
  locations,
  detailSlot,
  locationSlot,
  changesMade,
  user,
  dispatchUser,
  isError,
}) {
  const classes = useStyles()
  const { dispatchFeedback } = useContext(FeedbackContext)
  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleEdit = () => {
    if (edit && isError) {
      dispatchFeedback(
        setSnackbar({
          status: "error",
          message: "All fields must be valid before saving.",
        })
      )
      return
    }

    setEdit(!edit)
    const { password, ...newDetails } = details

    if (password !== "********") {
      setDialogOpen(true)
    }

    if (edit && changesMade) {
      setLoading(true)

      axios
        .post(
          process.env.GATSBY_STRAPI_URL + "/users-permissions/set-settings",
          {
            details: newDetails,
            detailSlot,
            location: locations,
            locationSlot,
          },
          { headers: { Authorization: `Bearer ${user.jwt}` } }
        )
        .then(response => {
          setLoading(false)
          dispatchFeedback(
            setSnackbar({
              status: "success",
              message: "Settings Saved Successfully",
            })
          )
          dispatchUser(
            setUser({ ...response.data, jwt: user.jwt, onboarding: true })
          )
        })
        .catch(error => {
          setLoading(false)
          console.error(error)
          dispatchFeedback(
            setSnackbar({
              status: "error",
              message:
                "There was a problem saving your settings, please try again.",
            })
          )
        })
    }
  }

  return (
    <Grid
      item
      container
      lg={6}
      xs={12}
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
        {loading ? (
          <CircularProgress color="secondary" size="8rem" />
        ) : (
          <IconButton disabled={loading} onClick={handleEdit}>
            <img
              src={edit ? saveIcon : editIcon}
              alt={`${edit ? "save" : "edit"} settings`}
              className={classes.icon}
            />
          </IconButton>
        )}
      </Grid>
      <Confirmation
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        user={user}
        dispatchFeedback={dispatchFeedback}
        setSnackbar={setSnackbar}
      />
    </Grid>
  )
}
