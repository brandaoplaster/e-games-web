import { combineReducers } from "redux";
import authReducer from "@/store/modules/auth";
import searchReducer from "@/store/modules/admin/shared/search/reducer";
import categoryReducer from "@/store/modules/admin/category/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  category: categoryReducer,
});

export default rootReducer;
