import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import SettingsGrid from "./SettingsGrid"
import QtyButton from "../product-list/QtyButton"

import { UserContext, FeedbackContext } from "../../contexts"
import { setSnackbar } from "../../contexts/actions"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 600,
  },
  productImage: {
    height: "10rem",
    width: "10rem",
  },
}))

export default function Subscriptions({ setSelectedSetting }) {
  const classes = useStyles()
  const { user } = useContext(UserContext)
  const { dispatchFeedback } = useContext(FeedbackContext)
  const [subscriptions, setSubscriptions] = useState([])

  useEffect(() => {
    axios
      .get(process.env.GATSBY_STRAPI_URL + "/subscriptions/me", {
        headers: { Authorization: `Bearer ${user.jwt}` },
      })
      .then(response => setSubscriptions(response.data))
      .catch(error => {
        console.error(error)
        dispatchFeedback(
          setSnackbar({
            status: "error",
            message:
              "There was a problem retrieving your subscriptions. Please try again.",
          })
        )
      })
  }, [])

  const createData = data =>
    data.map(
      ({
        shippingInfo,
        shippingAddress,
        billingInfo,
        billingAddress,
        paymentMethod,
        name,
        variant,
        quantity,
        frequency,
        next_delivery,
        id,
      }) => ({
        details: {
          shippingInfo,
          shippingAddress,
          billingInfo,
          billingAddress,
          paymentMethod,
        },
        item: { name, variant },
        quantity: { quantity, variant, name },
        frequency,
        next_delivery,
        total: variant.price * 1.075,
        id,
      })
    )

  const columns = [
    {
      field: "details",
      headerName: "Details",
      width: 350,
      sortable: false,
      renderCell: ({ value }) => (
        <Typography variant="body2" classes={{ root: classes.bold }}>
          {`${value.shippingInfo.name}`}
          <br />
          {`${value.shippingAddress.street}`}
          <br />
          {`${value.shippingAddress.city}, ${value.shippingAddress.state} ${value.shippingAddress.zip}`}
        </Typography>
      ),
    },
    {
      field: "item",
      headerName: "Item",
      width: 250,
      sortable: false,
      renderCell: ({ value }) => (
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img
              src={process.env.GATSBY_STRAPI_URL + value.variant.images[0].url}
              alt={value.name}
              className={classes.productImage}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2" classes={{ root: classes.bold }}>
              {value.name}
            </Typography>
          </Grid>
        </Grid>
      ),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 250,
      sortable: false,
      renderCell: ({ value }) => (
        <QtyButton
          stock={[{ qty: value.variant.qty }]}
          variant={value.variant}
          selectedVariant={0}
          name={value.name}
          white
          hideCartButton
          round
        />
      ),
    },
    {
      field: "frequency",
      headerName: "Frequency",
      width: 250,
      sortable: false,
    },
    { field: "next_delivery", headerName: "Next Order", width: 250 },
    { field: "total", headerName: "Total", width: 250 },
    { field: "", width: 250, sortable: false },
  ]

  const rows = createData(subscriptions)

  return (
    <SettingsGrid
      setSelectedSetting={setSelectedSetting}
      rows={rows}
      columns={columns}
      rowsPerPage={3}
    />
  )
}
