import {FETCH_SERVICES_FAILURE, 
        FETCH_SERVICES_SUCCESS, 
        FETCH_SERVICES_REQUEST
      } from '../actions/actionTypes'

const initialState = {
 items: [],
 loading: false,
 error: null
};

export default function serviceListReducer(state = initialState, action) {     
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      return {...state, items: action.payload, error: null, loading: false}
    case FETCH_SERVICES_REQUEST:
      return {...state, loading: true, error: null}
    case FETCH_SERVICES_FAILURE:       
      return {...state, loading: false, error: action.payload.error}
    default:
      return state;
  }
}