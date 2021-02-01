import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import CheckoutNavigation from "./CheckoutNavigation"
import Details from "../settings/Details"
import Location from "../settings/Location"
import Payments from "../settings/Payments"
import Shipping from "./Shipping"
import Confirmation from "./Confirmation"
import validate from "../ui/validate"

const useStyles = makeStyles(theme => ({
  stepContainer: {
    width: "40rem",
    height: "25rem",
    backgroundColor: theme.palette.primary.main,
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #fff",
    },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

export default function CheckoutPortal({ user }) {
  const classes = useStyles()
  const [selectedStep, setSelectedStep] = useState(0)
  const [detailValues, setDetailValues] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [detailSlot, setDetailSlot] = useState(0)
  const [detailForBilling, setDetailForBilling] = useState(false)

  const [locationValues, setLocationValues] = useState({
    street: "",
    zip: "",
    city: "",
    state: "",
  })
  const [billingLocation, setBillingLocation] = useState({
    street: "",
    zip: "",
    city: "",
    state: "",
  })
  const [locationSlot, setLocationSlot] = useState(0)
  const [locationForBilling, setLocationForBilling] = useState(false)

  const [billingSlot, setBillingSlot] = useState(0)
  const [saveCard, setSaveCard] = useState(false)

  const [errors, setErrors] = useState({})

  const [selectedShipping, setSelectedShipping] = useState(null)
  const shippingOptions = [
    { label: "FREE SHIPPING", price: 0 },
    { label: "2-DAY SHIPPING", price: 9.99 },
    { label: "OVERNIGHT SHIPPING", price: 29.99 },
  ]

  const errorHelper = values => {
    const valid = validate(values)

    return Object.keys(valid).some(value => !valid[value])
  }

  let steps = [
    {
      title: "Contact Info",
      component: (
        <Details
          user={user}
          values={detailValues}
          setValues={setDetailValues}
          slot={detailSlot}
          setSlot={setDetailSlot}
          errors={errors}
          setErrors={setErrors}
          billing={detailForBilling}
          setBilling={setDetailForBilling}
          checkout
        />
      ),
      error: errorHelper(detailValues),
    },
    {
      title: "Billing Info",
      component: (
        <Details
          values={billingDetails}
          setValues={setBillingDetails}
          errors={errors}
          setErrors={setErrors}
          checkout
          noSlots
        />
      ),
      error: errorHelper(billingDetails),
    },
    {
      title: "Address",
      component: (
        <Location
          user={user}
          values={locationValues}
          setValues={setLocationValues}
          slot={locationSlot}
          setSlot={setLocationSlot}
          billing={locationForBilling}
          setBilling={setLocationForBilling}
          errors={errors}
          setErrors={setErrors}
          checkout
        />
      ),
      error: errorHelper(locationValues),
    },
    {
      title: "Billing Address",
      component: (
        <Location
          values={billingLocation}
          setValues={setBillingLocation}
          errors={errors}
          setErrors={setErrors}
          checkout
          noSlots
        />
      ),
      error: errorHelper(billingLocation),
    },
    {
      title: "Shipping",
      component: (
        <Shipping
          shippingOptions={shippingOptions}
          selectedShipping={selectedShipping}
          setSelectedShipping={setSelectedShipping}
        />
      ),
      error: selectedShipping === null,
    },
    {
      title: "Payment",
      component: (
        <Payments
          slot={billingSlot}
          setSlot={setBillingSlot}
          user={user}
          saveCard={saveCard}
          setSaveCard={setSaveCard}
          checkout
        />
      ),
      error: false,
    },
    {
      title: "Confirmation",
      component: (
        <Confirmation
          detailValues={detailValues}
          billingDetails={billingDetails}
          detailForBilling={detailForBilling}
          locationValues={locationValues}
          billingLocation={billingLocation}
          locationForBilling={locationForBilling}
          shippingOptions={shippingOptions}
          selectedShipping={selectedShipping}
        />
      ),
    },
    { title: `Thanks, ${user.username}!` },
  ]

  if (detailForBilling) {
    steps = steps.filter(step => step.title !== "Billing Info")
  }

  if (locationForBilling) {
    steps = steps.filter(step => step.title !== "Billing Address")
  }

  useEffect(() => {
    setErrors({})
  }, [detailSlot, locationSlot, selectedStep])

  return (
    <Grid item container direction="column" alignItems="flex-end" xs={6}>
      <CheckoutNavigation
        steps={steps}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.stepContainer }}
      >
        {steps[selectedStep].component}
      </Grid>
    </Grid>
  )
}
