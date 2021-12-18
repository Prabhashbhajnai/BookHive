import axios from "axios";

// Redux types
import { GET_BOOK } from "./book.type";

export const getTextbook = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=textbook`,
        });

        return dispatch({ type: GET_BOOK, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getFiction = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=fiction`,
        });

        return dispatch({ type: GET_BOOK, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getRomance = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=romance`,
        });

        return dispatch({ type: GET_BOOK, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getScifi = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=Scifi`,
        });

        return dispatch({ type: GET_BOOK, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getScitech = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=Scitech`,
        });

        return dispatch({ type: GET_BOOK, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};