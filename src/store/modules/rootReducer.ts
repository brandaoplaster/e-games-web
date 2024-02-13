import { combineReducers } from "redux";
import auth from "@/store/modules/auth";
import search from "@/store/modules/admin/shared/search/reducer";
import Category from "@/store/modules/admin/category/reducer";

export default combineReducers({
  auth,
  search,
  Category
});
