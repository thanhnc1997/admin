import { FETCH_ORDER } from '../actions/orders';

const initialState = {
  list: []
}

function orderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ORDER: {
      state.list = JSON.parse(JSON.stringify(payload));
      //console.log(state)
      return state;
    }
    default:
      return state;
  }
}

export default orderReducer