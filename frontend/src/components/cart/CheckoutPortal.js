import React, { useState, useEffect, useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import CheckoutNavigation from "./CheckoutNavigation"
import BillingConfirmation from "./BillingConfirmation"
import Details from "../settings/Details"
import Location from "../settings/Location"
import Payments from "../settings/Payments"
import Shipping from "./Shipping"
import Confirmation from "./Confirmation"
import ThankYou from "./ThankYou"
import validate from "../ui/validate"

import { CartContext } from "../../contexts"

const useStyles = makeStyles(theme => ({
  stepContainer: {
    width: "40rem",
    height: "25rem",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  container: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "5rem",
    },
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

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PK)

export default function CheckoutPortal({ user }) {
  const classes = useStyles()
  const { cart } = useContext(CartContext)
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const hasSubscriptionCart = cart.some(item => item.subscription)
  const hasSubscriptionActive = user.subscriptions?.length > 0

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

  const [cardSlot, setCardSlot] = useState(0)
  const [cardError, setCardError] = useState(true)
  const [saveCard, setSaveCard] = useState(hasSubscriptionCart)
  const [card, setCard] = useState({ brand: "", last4: "" })

  const [errors, setErrors] = useState({})

  const [order, setOrder] = useState(null)

  const [selectedShipping, setSelectedShipping] = useState(null)
  const shippingOptions = [
    { label: "FREE SHIPPING", price: 0 },
    { label: "2-DAY SHIPPING", price: 9.99 },
    { label: "OVERNIGHT SHIPPING", price: 29.99 },
  ]

  const errorHelper = (values, forBilling, billingValues, slot) => {
    const valid = validate(values)

    //If we have one slot marked as billing...
    if (forBilling !== false && forBilling !== undefined) {
      //...validate billing values
      const billingValid = validate(billingValues)

      //If we are currently on the same slot as marked for billing, ie billing and shipping are the same...
      if (forBilling === slot) {
        //...then we just need to validate the one set of values because they are the same
        return Object.keys(billingValid).some(value => !billingValid[value])
      } else {
        //Otherwise, if we are currently on a different slot than the slot marked for billing, ie billing and shipping are different, then we need to validate both the billing values, and the shipping values
        return (
          Object.keys(billingValid).some(value => !billingValid[value]) ||
          Object.keys(valid).some(value => !valid[value])
        )
      }
    } else {
      //if no slots were marked for billing, just validate current slot
      return Object.keys(valid).some(value => !valid[value])
    }
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
          billingValues={billingDetails}
          setBillingValues={setBillingDetails}
          selectedStep={selectedStep}
          checkout
        />
      ),
      hasActions: true,
      error: errorHelper(
        detailValues,
        detailForBilling,
        billingDetails,
        detailSlot
      ),
    },
    {
      title: "Billing Info",
      component: (
        <Details
          values={billingDetails}
          setValues={setBillingDetails}
          errors={errors}
          setErrors={setErrors}
          selectedStep={selectedStep}
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
          billingValues={billingLocation}
          selectedStep={selectedStep}
          setBillingValues={setBillingLocation}
          checkout
        />
      ),
      hasActions: true,
      error: errorHelper(
        locationValues,
        locationForBilling,
        billingLocation,
        locationSlot
      ),
    },
    {
      title: "Billing Address",
      component: (
        <Location
          values={billingLocation}
          setValues={setBillingLocation}
          errors={errors}
          setErrors={setErrors}
          selectedStep={selectedStep}
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
          selectedStep={selectedStep}
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
          setCard={setCard}
          slot={cardSlot}
          setSlot={setCardSlot}
          user={user}
          saveCard={saveCard}
          setSaveCard={setSaveCard}
          setCardError={setCardError}
          selectedStep={selectedStep}
          hasSubscriptionCart={hasSubscriptionCart}
          hasSubscriptionActive={hasSubscriptionActive}
          checkout
        />
      ),
      error: cardError,
    },
    {
      title: "Confirmation",
      component: (
        <Confirmation
          user={user}
          order={order}
          card={card}
          cardSlot={cardSlot}
          saveCard={saveCard}
          setOrder={setOrder}
          detailValues={detailValues}
          billingDetails={billingDetails}
          detailForBilling={detailForBilling}
          locationValues={locationValues}
          billingLocation={billingLocation}
          locationForBilling={locationForBilling}
          shippingOptions={shippingOptions}
          selectedShipping={selectedShipping}
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
        />
      ),
    },
    {
      title: `Thanks, ${user.username.split(" ")[0]}!`,
      component: (
        <ThankYou
          selectedStep={selectedStep}
          order={order}
          selectedShipping={selectedShipping}
        />
      ),
    },
  ]

  if (detailForBilling !== false) {
    steps = steps.filter(step => step.title !== "Billing Info")
  }

  if (locationForBilling !== false) {
    steps = steps.filter(step => step.title !== "Billing Address")
  }

  useEffect(() => {
    setErrors({})
  }, [detailSlot, locationSlot, selectedStep])

  return (
    <Grid
      item
      container
      direction="column"
      classes={{ root: classes.container }}
      alignItems={matchesMD ? "flex-start" : "flex-end"}
      lg={6}
    >
      <CheckoutNavigation
        steps={steps}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
        details={detailValues}
        detailSlot={detailSlot}
        setDetails={setDetailValues}
        location={locationValues}
        setLocation={setLocationValues}
        locationSlot={locationSlot}
        setErrors={setErrors}
      />
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        classes={{ root: classes.stepContainer }}
      >
        <Elements stripe={stripePromise}>
          {steps.map((step, i) =>
            React.cloneElement(step.component, {
              stepNumber: i,
              key: i,
            })
          )}
        </Elements>
      </Grid>
      {steps[selectedStep].title === "Confirmation" && (
        <BillingConfirmation
          detailForBilling={detailForBilling}
          billingDetails={billingDetails}
          detailSlot={detailSlot}
          locationForBilling={locationForBilling}
          billingLocation={billingLocation}
          locationSlot={locationSlot}
        />
      )}
    </Grid>
  )
}
