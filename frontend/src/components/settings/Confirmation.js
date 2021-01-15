import React from "react"
import axios from "axios"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Fields from "../auth/Fields"

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.error.main,
  },
  button: {
    fontFamily: "Montserrat",
  },
}))

export default function Confirmation({ dialogOpen, setDialogOpen }) {
  const classes = useStyles()

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
      </DialogContent>
      <DialogActions>
        <Button color="primary" classes={{ root: classes.button }}>
          Do Not Change Password
        </Button>
        <Button color="secondary" classes={{ root: classes.button }}>
          Yes, Change My Password
        </Button>
      </DialogActions>
    </Dialog>
  )
}
