export const FETCH_ORDER = 'FETCH_ORDER';

function fetchOrder() {
  const API_ORDERS = 'https://5fd331a98cee610016ae009d.mockapi.io/api_products/orders';

  return async function (dispatch) {
    const res = await fetch(API_ORDERS);
    const res_1 = await res.json();
    //console.log(res_1)
    if (res_1.error) {
      throw (res_1.error);
    }
    dispatch({
      type: FETCH_ORDER,
      payload: res_1
    });
  }
}

export { fetchOrder }