import { combineReducers } from 'redux'
import routerModalReducer from "./routerModalReducer"
import chartJSReducer from "./chartJSReducer"

const rootReducer = combineReducers({
  routerModalReducer:routerModalReducer,
  chartJSReducer:chartJSReducer
}) 

export default rootReducer