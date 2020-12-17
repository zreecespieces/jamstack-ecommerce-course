import { SET_SNACKBAR } from "./action-types"

export const setSnackbar = ({ status, message, open }) => ({
  type: SET_SNACKBAR,
  payload: { status, message, open },
})
