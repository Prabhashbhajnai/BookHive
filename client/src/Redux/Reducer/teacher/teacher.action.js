import axios from 'axios';

// Redux type
import { GET_TEACHER, GET_SPECIFIC_TEACHER } from './teacher.type';

export const getTeacher = () => async (dispatch) => {
    try {
        const teacherList = await axios({
            method: "GET",
            url: "http://localhost:4000/teachers",
        });

        return dispatch({type: GET_TEACHER, payload: teacherList.data})
    } catch (error) {
        return dispatch({type: "ERROR", payload: error})
    }
};

export const getSpecificTeacher = (_id) => async (dispatch) => {
    try {
        const teacher = await axios({
            method: "GET",
            url: `http://localhost:4000/teachers/${_id}`,
        });

        return dispatch({ type: GET_SPECIFIC_TEACHER, payload: teacher.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};