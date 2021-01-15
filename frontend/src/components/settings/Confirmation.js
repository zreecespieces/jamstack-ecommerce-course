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

  const { password } = EmailPassword(false, false, visible, setVisible)

  const fields = {
    password: { ...password, placeholder: "Old Password" },
    confirmation: { ...password, placeholder: "New Password" },
  }

  const handleConfirm = () => {
    setLoading(true)
  }

  return (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle disableTypography>
        <Typography variant="h3" classes={{ root: classes.title }}>
          Change Password
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
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
          onClick={() => setDialogOpen(false)}
          color="primary"
          classes={{ root: classes.button }}
        >
          Do Not Change Password
        </Button>
        <Button
          onClick={handleConfirm}
          color="secondary"
          classes={{ root: classes.button }}
        >
          Yes, Change My Password
        </Button>
      </DialogActions>
    </Dialog>
  )
}
