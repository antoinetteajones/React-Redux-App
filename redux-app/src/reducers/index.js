import {FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE} from "../actions";

const initialState = {
    CHARACTER: [],
    error: "",
    isFetching: false
  }

function reducer(state = initialState, action){
    console.log("reducer", action);
    switch (action.type){
    case FETCH_CHARACTER_START:
    return{
        ...state,
        error: " ",
        isFetching: true
    };
    case FETCH_CHARACTER_SUCCESS:
    return{
        ...state,
        error: " ",
        isFetching: false,
        CHARACTER: action.payload
    }
    case FETCH_CHARACTER_FAILURE:
    return{
        ...state,
        error: action.payload,
        isFetching: false
    }
    default:
        return state;

    }
}
    export default reducer;