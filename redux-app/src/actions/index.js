import axios from "axios";

export const FETCH_CHARACTER_START = "FETCH_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

export const getMorty = data => dispatch => {
    dispatch({type: FETCH_CHARACTER_START});
    axios.get("https://rickandmortyapi.com/api/character/1,183")
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_CHARACTER_SUCCESS, payload: res.info.results})
    })
    .catch(err => {
        console.log(err.response);
        dispatch({FETCH_CHARACTER_FAILURE, payload: `${err.rsponse.status} ${err.response.data}`})
    });
}