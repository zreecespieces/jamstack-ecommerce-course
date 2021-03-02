import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { DataGrid } from "@material-ui/data-grid"
import { makeStyles } from "@material-ui/core/styles"

import { UserContext } from "../../contexts"

const useStyles = makeStyles(theme => ({
  item: {
    height: "100%",
    width: "100%",
  },
  "@global": {
    ".MuiDataGrid-root .MuiDataGrid-colCellTitle": {
      fontWeight: 600,
    },
    ".MuiDataGrid-root .MuiDataGrid-columnSeparator": {
      display: "none",
    },
    ".MuiDataGrid-root .MuiDataGrid-colCellTitleContainer": {
      "justify-content": "center",
    },
    ".MuiDataGrid-root .MuiDataGrid-colCellMoving": {
      "background-color": "transparent",
    },
  },
}))

export default function OrderHistory() {
  const classes = useStyles()
  const [order, setOrder] = useState([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    axios
      .get(process.env.GATSBY_STRAPI_URL + "/orders/history", {
        headers: { Authorization: `Bearer ${user.jwt}` },
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const columns = [
    { field: "shipping", headerName: "Shipping", flex: 1, sortable: false },
    { field: "order", headerName: "Order", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "date", headerName: "Date", flex: 1, type: "date" },
    { field: "total", headerName: "Total", flex: 1 },
    { field: "", flex: 1.5, sortable: false },
  ]

  const rows = []

  return (
    <Grid item classes={{ root: classes.item }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </Grid>
  )
}
