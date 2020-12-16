import React, { useReducer, createContext } from "react"
import userReducer from "../reducers/user-reducer"
import { setUser } from "../actions"

export const UserContext = createContext()
const UserProvider = UserContext.Provider

export function UserWrapper({ children }) {
  const defaultUser = { username: "Guest" }
  const [user, dispatchUser] = useReducer(userReducer, defaultUser)

  return (
    <UserProvider value={{ user, dispatchUser, defaultUser }}>
      {children}
    </UserProvider>
  )
}
