const FETCHED_PRODUCTS = 'FETCHED_PRODUCTS'
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
const CREATED_PRODUCT = 'CREATED_PRODUCT'
const SHOW_CART = 'SHOW_CART'

let initialState = {
  products: [],
  cart: [],
  showingCart: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHED_PRODUCTS:
      return { ...state, products: action.payload }
    case ADD_ITEM_TO_CART:
      return { ...state, cart: [ ...state.cart, action.payload ] }
    case CREATED_PRODUCT:
      return { ...state, products: [ ...state.products, action.payload ] }
    case SHOW_CART:
      return { ...state, showingCart: action.payload }
    default:
      return state;
  }
}

export function fetchedProducts(products) {
  return {
    type: FETCHED_PRODUCTS,
    payload: products
  }
}

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  }
}

export function createdProduct(product) {
  return {
    type: CREATED_PRODUCT,
    payload: product
  }
}

export function showCart(boolean) {
  return {
    type: SHOW_CART,
    payload: boolean
  }
}