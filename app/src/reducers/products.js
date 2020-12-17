import { FETCH_PRODUCTS } from '../actions/products';

const initialState = {
  list: []
}

function productsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_PRODUCTS: {
      state.list = JSON.parse(JSON.stringify(payload))
      return state;
    }
    default:
      return state;
  }
}

export default productsReducer