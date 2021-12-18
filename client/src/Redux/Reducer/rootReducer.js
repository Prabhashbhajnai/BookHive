import { combineReducers } from "redux";

import book from "./book/book.reducer";
import reviews from "./review/review.reducer";
import user from "./user/user.reducer"

const rootReducer = combineReducers({book, reviews, user});

export default rootReducer;