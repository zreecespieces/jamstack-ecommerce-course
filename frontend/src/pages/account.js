import React, { useContext } from "react"

import { UserContext } from "../contexts"
import { setUser } from "../contexts/actions"

import Layout from "../components/ui/layout"
import AuthPortal from "../components/auth/AuthPortal"
import SettingsPortal from "../components/settings/SettingsPortal"

export default function Account() {
  const { user } = useContext(UserContext)

  return (
    <Layout>
      {user.jwt && user.onboarding ? <SettingsPortal /> : <AuthPortal />}
    </Layout>
  )
}
