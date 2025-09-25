import { combineReducers } from "redux";
import navigationReducer from "./features/navigationSlice";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
});
