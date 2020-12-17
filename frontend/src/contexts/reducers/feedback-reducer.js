import { SET_SNACKBAR } from "../actions/action-types"

export default function feedbackReducer(state, action) {
  const { status, message, open } = action.payload

  switch (action.type) {
    case SET_SNACKBAR:
      if (open === false) return { ...state, open }

      return {
        open: true,
        backgroundColor: status === "error" ? "#FF3232" : "#4BB543",
        message,
      }
    default:
      return state
  }
}
