import React from "react"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { DataGrid } from "@material-ui/data-grid"
import { makeStyles } from "@material-ui/core/styles"

import BackwardsIcon from "../../images/BackwardsOutline"

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
    width: "100%",
  },
  header: {
    height: "8rem",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    height: "4rem",
    width: "4rem",
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
    ".MuiDataGrid-root .MuiDataGrid-cell": {
      "white-space": "pre-wrap",
      "max-height": "100% !important",
      "line-height": "initial !important",
      padding: "1rem",
      "padding-right": "calc(1rem + 26px)",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "font-weight": 600,
      "border-bottom": "2px solid #fff",
    },
    ".MuiDataGrid-root .MuiDataGrid-row": {
      "max-height": "100% !important",
    },
    ".MuiDataGrid-root .MuiDataGrid-footer": {
      "margin-top": "-11rem",
    },
    ".MuiTablePagination-caption": {
      color: "#fff",
    },
    ".MuiSvgIcon-root": {
      fill: "#fff",
    },
    ".MuiDataGrid-root .MuiDataGrid-columnsContainer": {
      "background-color": theme.palette.secondary.main,
      border: "none",
    },
    ".MuiDataGrid-root": {
      border: "none",
    },
    ".MuiDataGrid-root .MuiDataGrid-overlay": {
      bottom: "8rem",
    },
  },
}))

export default function SettingsGrid({
  setSelectedSetting,
  rows,
  columns,
  setOpen,
  rowsPerPage,
}) {
  const classes = useStyles()

  return (
    <Grid item container classes={{ root: classes.container }}>
      <Grid item classes={{ root: classes.header }}>
        <IconButton onClick={() => setSelectedSetting(null)}>
          <div className={classes.icon}>
            <BackwardsIcon color="#fff" />
          </div>
        </IconButton>
      </Grid>
      <DataGrid
        hideFooterSelectedRowCount
        onRowClick={event => (setOpen ? setOpen(event.row.id) : null)}
        rows={rows}
        columns={columns}
        pageSize={rowsPerPage || 5}
      />
    </Grid>
  )
}
