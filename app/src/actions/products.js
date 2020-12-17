export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

function fetchProduct() {
  const API_PRODUCTS = 'https://5fd331a98cee610016ae009d.mockapi.io/api_products/products';
  return async function (dispatch) {
    const res = await fetch(API_PRODUCTS);
    const res_1 = await res.json();
    if (res_1.error) {
      throw (res_1.error);
    }
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res_1
    });
  }
}

export { fetchProduct }