import { combineReducers } from "redux";

import book from "./book/book.reducer";
import reviews from "./review/review.reducer";
import user from "./user/user.reducer";
import teacher from "./teacher/teacher.reducer";

const rootReducer = combineReducers({book, reviews, user, teacher});

export default rootReducer;