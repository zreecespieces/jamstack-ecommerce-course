import React, { useContext } from "react"

import { UserContext } from "../contexts"
import { setUser } from "../contexts/actions"
import { useIsClient } from "../hooks"

import Layout from "../components/ui/layout"
import AuthPortal from "../components/auth/AuthPortal"
import SettingsPortal from "../components/settings/SettingsPortal"

export default function Account() {
  const { user } = useContext(UserContext)
  const { isClient, key } = useIsClient()

  if (!isClient) return null

  return (
    <Layout key={key}>
      {user.jwt && user.onboarding ? <SettingsPortal /> : <AuthPortal />}
    </Layout>
  )
}
