import { GET_BOOK } from "./book.type";

const INITIAL_STATE = {
    books: [],
};

const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BOOK:
            return {
                ...state,
                books: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default bookReducer;