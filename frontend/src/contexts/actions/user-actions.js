import { SET_USER } from "./action-types"

export const setUser = user => {
  return {
    type: SET_USER,
    payload: { user },
  }
}
