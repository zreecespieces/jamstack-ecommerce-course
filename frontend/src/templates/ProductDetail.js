import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/ui/layout"
import ProductImages from "../components/product-detail/ProductImages"

export default function ProductDetail({
  pageContext: { name, id, category, description, variants },
}) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <Layout>
      <Grid container direction="column">
        <ProductImages
          images={variants[selectedVariant].images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </Grid>
    </Layout>
  )
}
