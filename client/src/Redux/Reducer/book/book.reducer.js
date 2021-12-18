import { GET_BOOK, GET_SPECIFIC_BOOK } from "./book.type";

const INITIAL_STATE = {
    books: [],
    selectedBook: {},
};

const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BOOK:
            return {
                ...state,
                books: action.payload,
            };
        
        case GET_SPECIFIC_BOOK:
            return {
                ...state,
                selectedBook: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default bookReducer;