import { combineReducers } from "redux";

const getAllProductsReducer = (state = [], action: any) => {
  if (action.type === "GET_ALL_PRODUCTS") {
    return action.payload;
  }
  return state;
};
const getProductReducer = (state = [], action: any) => {
  if (action.type === "GET_PRODUCT") {
    return action.payload;
  }
  return state;
};
const getMenProductsReducer = (state = [], action: any) => {
  if (action.type === "GET_MEN_PRODUCTS") {
    return action.payload;
  }
  return state;
};
const getWomenProductsReducer = (state = [], action: any) => {
  if (action.type === "GET_WOMEN_PRODUCTS") {
    return action.payload;
  }
  return state;
};
const addToCartReducer = (state = [], action: any) => {
  if (action.type === "ADD_TO_CART") {
    return action.payload;
  }
  if (action.type === "REMOVE_FROM_CART") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  allProducts: getAllProductsReducer,
  menProducts: getMenProductsReducer,
  womenProducts: getWomenProductsReducer,
  productDetails: getProductReducer,
  cartData:addToCartReducer
});
