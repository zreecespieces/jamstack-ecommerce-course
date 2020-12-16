import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { ApolloWrapper } from "../../apollo/ApolloWrapper"
import { UserWrapper } from "../../contexts"
import theme from "./theme"

export default ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloWrapper>
        <UserWrapper>{element}</UserWrapper>
      </ApolloWrapper>
    </ThemeProvider>
  )
}
