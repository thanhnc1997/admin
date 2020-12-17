import { FETCH_CUSTOMERS } from '../actions/customers';

const initialState = {
  list: []
}

function customersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CUSTOMERS: {
      state.list = JSON.parse(JSON.stringify(payload))
      return state;
    }
    default:
      return state;
  }
}

export default customersReducer