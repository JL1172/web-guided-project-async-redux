import axios from "axios";
export const GET_PERSON = "GET_PERSON"; 
export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS"; 
export const GET_PERSON_ERROR = "GET_PERSON_ERROR"; 
export const SET_IS_FETCHING = "SET_IS_FETCHING"; 

export const getPerson = () => dispatch => {
    dispatch(setIsFetching(true));
    axios.get("https://randomuser.me/api/")
    .then(res=> {
        const person = res.data.results[0];
        dispatch(getPersonSuccess(person));
    }, error => dispatch(getPersonError(error.message)))
}

const setIsFetching = (isFetching) => {
    return {type : SET_IS_FETCHING, payload : isFetching}
}

const getPersonSuccess = (person) => {
    return{type : GET_PERSON_SUCCESS, payload : person}
}

const getPersonError = (error) => {
    return{type : GET_PERSON_ERROR, payload : error}
}