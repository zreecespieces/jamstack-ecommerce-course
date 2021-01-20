import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./action-types"

export const addToCart = (variant, qty, name, stock) => ({
  type: ADD_TO_CART,
  payload: { variant, qty, name, stock },
})

export const removeFromCart = (variant, qty) => ({
  type: REMOVE_FROM_CART,
  payload: { variant, qty },
})

export const clearCart = () => ({
  type: CLEAR_CART,
})
