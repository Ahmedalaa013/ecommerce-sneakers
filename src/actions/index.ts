import fakeStore from "../apis/fakeStore";
let products: any = [];

export const getAllProducts = (): any => async (dispatch: any) => {
  const response = await fakeStore.get("/products");
  dispatch({ type: "GET_ALL_PRODUCTS", payload: response.data });
};
export const getProduct =
  (id: string): any =>
  async (dispatch: any) => {
    const response = await fakeStore.get(`/products/${id}`);
    dispatch({ type: "GET_PRODUCT", payload: response.data });
  };

export const getMenProducts = (): any => async (dispatch: any) => {
  const response = await fakeStore.get("/products/category/men's%20clothing");
  dispatch({ type: "GET_MEN_PRODUCTS", payload: response.data });
};
export const getWomenProducts = (): any => async (dispatch: any) => {
  const response = await fakeStore.get("/products/category/women's%20clothing");
  dispatch({ type: "GET_WOMEN_PRODUCTS", payload: response.data });
};

export const addToCart = (product: any) => {
  products.push(product);
  return {
    type: "ADD_TO_CART",
    payload: products,
  };
};
export const removeFromCart = (removedProduct: any) => {
  const newProducts = products.filter(
    (product: any) => removedProduct.title !== product.title
  );
  products = newProducts;
  return {
    type: "REMOVE_FROM_CART",
    payload: products,
  };
};
