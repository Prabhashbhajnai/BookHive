import { combineReducers } from "redux";

import book from "./book/book.reducer";

const rootReducer = combineReducers({book});

export default rootReducer;