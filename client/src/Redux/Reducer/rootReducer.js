import { combineReducers } from "redux";

import bookReducer from "./book/book.reducer";

const rootReducer = combineReducers({bookReducer});

export default rootReducer;