import { SET_USER } from "./action-types"

export const setUser = user => ({
  type: SET_USER,
  payload: { user },
})
