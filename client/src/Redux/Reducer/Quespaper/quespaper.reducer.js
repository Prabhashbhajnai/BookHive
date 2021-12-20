import { GET_PAPER, GET_MIDSEM_LIST, GET_TERMEND_LIST } from "./quespaper.type";

const INITIAL_STATE = {
    papers:{},
    MidsemList: [],
    TermendList: [],
};

const PaperReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MIDSEM_LIST:
            return {
                ...state,
                MidsemList: action.payload,
            };
        case GET_TERMEND_LIST:
            return {
                ...state,
                TermendList: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default PaperReducer;