export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';

function fetchCustomer() {
  const API_CUSTOMERS = 'https://5fd331a98cee610016ae009d.mockapi.io/api_products/customers';
  return async function (dispatch) {
    const res = await fetch(API_CUSTOMERS);
    const res_1 = await res.json();
    if (res_1.error) {
      throw (res_1.error);
    }
    dispatch({
      type: FETCH_CUSTOMERS,
      payload: res_1
    });
  }
}

export { fetchCustomer }