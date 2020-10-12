import React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/HeroBlock"
import PromotionalProducts from "../components/home/PromotionalProducts"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
  </Layout>
)

export default IndexPage
