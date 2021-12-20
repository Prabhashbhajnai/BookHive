import axios from 'axios'

//Redux types
import { GET_PAPER ,GET_MIDSEM_LIST, GET_TERMEND_LIST } from './quespaper.type'


export const getPaper = (paperId)  => async (dispatch) => {
    try {
        const paper = await axios({
            method: "GET",
            url: `http://localhost:4000/quespaper/${paperId}`
        })

        return dispatch({ type: GET_PAPER,  payload: paper.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};

export const getMidsemList = (midsemId)  => async (dispatch) => {
    try {
        const Paper = await axios({
            method: "GET",
            url: `http://localhost:4000/midsem/list/${midsemId}`
        })

        return dispatch({ type: GET_MIDSEM_LIST, payload: Paper.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};

export const getTermendList = (termendId)  => async (dispatch) => {
    try {
        const Paper = await axios({
            method: "GET",
            url: `http://localhost:4000/termend/list/${termendId}`
        })

        return dispatch({ type: GET_TERMEND_LIST, payload: Paper.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};