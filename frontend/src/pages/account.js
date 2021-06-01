import React, { useContext } from "react"

import { UserContext } from "../contexts"
import { setUser } from "../contexts/actions"
import { useIsClient } from "../hooks"

import Layout from "../components/ui/layout"
import SEO from "../components/ui/seo"
import AuthPortal from "../components/auth/AuthPortal"
import SettingsPortal from "../components/settings/SettingsPortal"

export default function Account() {
  const { user } = useContext(UserContext)
  const { isClient, key } = useIsClient()

  if (!isClient) return null

  return (
    <Layout key={key}>
      <SEO
        title="Account"
        description="Login/Sign Up for an account to VAR-X or manage your existing account."
      />
      {user.jwt && user.onboarding ? <SettingsPortal /> : <AuthPortal />}
    </Layout>
  )
}
