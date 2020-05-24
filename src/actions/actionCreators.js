import { FETCH_SERVICES_REQUEST,
         FETCH_SERVICES_SUCCESS,
         FETCH_SERVICES_FAILURE,
         FETCH_SERVICE_REQUEST,
         FETCH_SERVICE_SUCCESS,
         FETCH_SERVICE_FAILURE
        } from './actionTypes';

export function fetchServicesRequest() {
  return {type: FETCH_SERVICES_REQUEST};
}

export function fetchServicesSuccess(items) {
  return {type: FETCH_SERVICES_SUCCESS, payload: items};
}

export function fetchServicesFailure(error) {
  return {type: FETCH_SERVICES_FAILURE, payload: {error}};
}

export function fetchServiceRequest(id) {
  return {type: FETCH_SERVICE_REQUEST, payload: id}
}

export function fetchServiceSuccess(item) {
  return {type: FETCH_SERVICE_SUCCESS, payload: item}
}

export function fetchServiceFailure(id, error) {
  return {type: FETCH_SERVICE_FAILURE, payload: {id, error}}
}