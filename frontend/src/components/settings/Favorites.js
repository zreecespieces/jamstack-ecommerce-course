import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { DataGrid } from "@material-ui/data-grid"
import { makeStyles } from "@material-ui/core/styles"

import { UserContext } from "../../contexts"

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
    width: "100%",
  },
}))

export default function Favorites() {
  const classes = useStyles()
  const { user } = useContext(UserContext)

  const columns = [
    { field: "item", headerName: "Item", width: 250 },
    { field: "variant", headerName: "Variant", width: 275, sortable: false },
    { field: "quantity", headerName: "Quantity", width: 250, sortable: false },
    { field: "price", headerName: "Price", width: 250 },
    { field: "", width: 500, sortable: false },
  ]

  console.log(user.favorites)

  return (
    <Grid item container classes={{ root: classes.container }}>
      <DataGrid
        hideFooterSelectedRowCount
        rows={[]}
        columns={columns}
        pageSize={5}
      />
    </Grid>
  )
}
