import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/HeroBlock"
import PromotionalProducts from "../components/home/PromotionalProducts"
import FeaturedProducts from "../components/home/FeaturedProducts"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
    <FeaturedProducts />
  </Layout>
)

export default IndexPage
