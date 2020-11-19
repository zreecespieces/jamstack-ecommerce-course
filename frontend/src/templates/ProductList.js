import React, { useState, useRef } from "react"
import Fab from "@material-ui/core/Fab"
import Pagination from "@material-ui/lab/Pagination"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"

import Layout from "../components/ui/layout"
import DynamicToolbar from "../components/product-list/DynamicToolbar"
import ListOfProducts from "../components/product-list/ListOfProducts"

const useStyles = makeStyles(theme => ({
  fab: {
    alignSelf: "flex-end",
    marginRight: "2rem",
    marginBottom: "2rem",
    color: "#fff",
    fontFamily: "Montserrat",
    fontSize: "5rem",
    width: "5rem",
    height: "5rem",
  },
  pagination: {
    alignSelf: "flex-end",
    marginRight: "2%",
    marginTop: "-3rem",
    marginBottom: "4rem",
    [theme.breakpoints.only("md")]: {
      marginTop: "1rem",
    },
  },
  "@global": {
    ".MuiPaginationItem-root": {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      color: theme.palette.primary.main,
      "&.Mui-selected": {
        color: "#fff",
      },
    },
  },
}))

export default function ProductList({
  pageContext: { filterOptions: options, name, description },
  data: {
    allStrapiProduct: { edges: products },
  },
}) {
  const classes = useStyles()
  const [layout, setLayout] = useState("grid")
  const [page, setPage] = useState(1)
  const [filterOptions, setFilterOptions] = useState(options)
  const scrollRef = useRef(null)

  const scroll = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const productsPerPage = layout === "grid" ? 16 : 6
  var numVariants = 0

  products.map(product => (numVariants += product.node.variants.length))

  const numPages = Math.ceil(numVariants / productsPerPage)

  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <div ref={scrollRef} />
        <DynamicToolbar
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
          name={name}
          description={description}
          layout={layout}
          setLayout={setLayout}
          setPage={setPage}
        />
        <ListOfProducts
          page={page}
          filterOptions={filterOptions}
          productsPerPage={productsPerPage}
          layout={layout}
          products={products}
        />
        <Pagination
          count={numPages}
          page={page}
          onChange={(e, newPage) => setPage(newPage)}
          color="primary"
          classes={{ root: classes.pagination }}
        />
        <Fab onClick={scroll} color="primary" classes={{ root: classes.fab }}>
          ^
        </Fab>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query GetCategoryProducts($id: String!) {
    allStrapiProduct(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          name
          category {
            name
          }
          variants {
            color
            id
            price
            size
            style
            colorLabel
            images {
              url
            }
          }
        }
      }
    }
  }
`
