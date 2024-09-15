import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Resturant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Orders/Reducer";
import resturantsOrderReducer from "./ResturantOrder/Reducer"
import { ingredientReducer } from "./Ingredients/Reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    resturant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    ingredients: ingredientReducer,
    restaurantOrder: resturantsOrderReducer

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))