import { combineReducers } from "redux";
import products from "./products.reducer";

const mainReducer = combineReducers({
      products
});

type MainReducerType = typeof mainReducer;
export type AppStateType = ReturnType<MainReducerType>;

export default mainReducer;