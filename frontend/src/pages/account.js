import React, { useContext } from "react"
import Button from "@material-ui/core/Button"

import { UserContext } from "../contexts"
import { setUser } from "../contexts/actions"

import Layout from "../components/ui/layout"
import AuthPortal from "../components/auth/AuthPortal"

export default function Account() {
  const { user, dispatchUser, defaultUser } = useContext(UserContext)

  const handleLogout = () => {
    dispatchUser(setUser(defaultUser))
  }

  return (
    <Layout>
      {user.jwt && user.onboarding ? (
        <Button variant="contained" onClick={handleLogout}>
          logout
        </Button>
      ) : (
        <AuthPortal />
      )}
    </Layout>
  )
}
