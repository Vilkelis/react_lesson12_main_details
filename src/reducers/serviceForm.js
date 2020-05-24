import { FETCH_SERVICE_REQUEST,
         FETCH_SERVICE_SUCCESS,
         FETCH_SERVICE_FAILURE,
       } from '../actions/actionTypes'

const initialState = {
  item: {
    name: '',
    price: '',
    content: ''
  },
  loading: false,
  error: null
};

export default function serviceFormReducer(state = initialState, action) {
  switch (action.type) {
  case FETCH_SERVICE_REQUEST:
    return {...state, error: null, loading: true}; 
  case FETCH_SERVICE_SUCCESS:
    return {...state, item: action.payload, error: null, loading: false};
  case FETCH_SERVICE_FAILURE:     
    return {...state, error: action.payload.error, loading: false};
  default:
    return state;
  }
}
