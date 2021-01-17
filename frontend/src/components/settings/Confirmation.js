import React, { useState } from "react"
import axios from "axios"
import CircularProgress from "@material-ui/core/CircularProgress"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"

import Fields from "../auth/Fields"
import { EmailPassword } from "../auth/Login"

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.error.main,
  },
  button: {
    fontFamily: "Montserrat",
  },
}))

export default function Confirmation({
  dialogOpen,
  setDialogOpen,
  user,
  dispatchFeedback,
  setSnackbar,
}) {
  const classes = useStyles()
  const [values, setValues] = useState({ password: "", confirmation: "" })
  const [errors, setErrors] = useState({})
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

  const { password } = EmailPassword(false, false, visible, setVisible)

  const fields = {
    password: { ...password, placeholder: "Old Password" },
    confirmation: { ...password, placeholder: "New Password" },
  }

  const disabled =
    Object.keys(errors).some(error => errors[error] === true) ||
    Object.keys(errors).length !== Object.keys(values).length

  const handleConfirm = () => {
    setLoading(true)

    axios
      .post(process.env.GATSBY_STRAPI_URL + "/auth/local", {
        identifier: user.email,
        password: values.password,
      })
      .then(response => {
        axios
          .post(
            process.env.GATSBY_STRAPI_URL +
              "/users-permissions/change-password",
            {
              password: values.confirmation,
            },
            { headers: { Authorization: `Bearer ${user.jwt}` } }
          )
          .then(response => {
            setLoading(false)
            setDialogOpen(false)
            dispatchFeedback(
              setSnackbar({
                status: "success",
                message: "Password Changed Successfully",
              })
            )
            setValues({ password: "", confirmation: "" })
          })
          .catch(error => {
            setLoading(false)
            console.error(error)
            dispatchFeedback(
              setSnackbar({
                status: "error",
                message:
                  "There was a problem changing your password, please try again.",
              })
            )
          })
      })
      .catch(error => {
        setLoading(false)
        console.error(error)
        dispatchFeedback(
          setSnackbar({ status: "error", message: "Old Password Invalid." })
        )
      })
  }

  const handleCancel = () => {
    setDialogOpen(false)
    dispatchFeedback(
      setSnackbar({
        status: "error",
        message: "Your password has NOT been changed.",
      })
    )
  }

  return (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle disableTypography>
        <Typography
          align={matchesXS ? "center" : undefined}
          variant="h3"
          classes={{ root: classes.title }}
        >
          Change Password
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText align={matchesXS ? "center" : undefined}>
          You are changing your account password. Please confirm old password
          and new password.
        </DialogContentText>
        <Fields
          fields={fields}
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCancel}
          disabled={loading}
          color="primary"
          classes={{ root: classes.button }}
        >
          Do Not Change Password
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={loading || disabled}
          color="secondary"
          classes={{ root: classes.button }}
        >
          {loading ? <CircularProgress /> : "Yes, Change My Password"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
