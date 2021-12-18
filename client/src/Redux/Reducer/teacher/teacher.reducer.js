import { GET_TEACHER, GET_SPECIFIC_TEACHER } from "./teacher.type";

const INITIAL_STATE = {
    teachers: [],
    selectedTeacher: {},
};

const teacherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TEACHER: 
            return {
                ...state,
                teachers: action.payload,
            };

        case GET_SPECIFIC_TEACHER:
            return {
                ...state,
                selectedTeacher: action.payload,
            };
            
        default:
            return {
                ...state,
            };
    }
};

export default teacherReducer;