import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/cart/reducers";
import productsReducer from "./modules/products/reducers";

const reducers = combineReducers({products: productsReducer, cart: cartReducer})

const store = createStore(reducers, applyMiddleware(thunk))

export default store