import { combineReducers } from 'redux';
import ordersReducer from './orders';
import productsReducer from './products';
import customersReducer from './customers';


const rootReducer = combineReducers({
  order: ordersReducer,
  product: productsReducer,
  customer: customersReducer
})

export default rootReducer