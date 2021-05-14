import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import SettingsGrid from "./SettingsGrid"

import { UserContext, FeedbackContext } from "../../contexts"
import { setSnackbar } from "../../contexts/actions"

const useStyles = makeStyles(theme => ({}))

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
    { field: "details", headerName: "Details", width: 250, sortable: false },
    { field: "item", headerName: "Item", width: 250, sortable: false },
    { field: "quantity", headerName: "Quantity", width: 250, sortable: false },
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

  console.log(rows)

  return (
    <SettingsGrid
      setSelectedSetting={setSelectedSetting}
      rows={[]}
      columns={columns}
      rowsPerPage={3}
    />
  )
}
