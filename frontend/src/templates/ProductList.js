import React from "react"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/ui/layout"
import DynamicToolbar from "../components/product-list/DynamicToolbar"

export default function ProductList({ pageContext }) {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToolbar filterOptions={pageContext.filterOptions} />
      </Grid>
    </Layout>
  )
}
