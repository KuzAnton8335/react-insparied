import { combineReducers } from "redux";
import colorReducer from "./features/colorSlice";
import goodsReducer from "./features/goodsSlice";
import navigationReducer from "./features/navigationSlice";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
});
