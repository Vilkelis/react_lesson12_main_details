import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, switchMap, catchError } from 'rxjs/operators';
import { FETCH_SERVICES_REQUEST, FETCH_SERVICE_REQUEST } from '../actions/actionTypes';
import { fetchServicesSuccess, 
         fetchServicesFailure,
         fetchServiceSuccess, 
         fetchServiceFailure         
         } from '../actions/actionCreators';
import { of } from 'rxjs';

export const fetchServicesEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICES_REQUEST),   
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}`).pipe(
      retry(3),            
      map(o => fetchServicesSuccess(o)),
      catchError(e => of(fetchServicesFailure(e)))     
  )),
);

export const fetchServiceEpic = action$ => action$.pipe(
  ofType(FETCH_SERVICE_REQUEST),   
  map(o => o.payload),      
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}/${o}`).pipe(
      retry(3),       
      map(o => fetchServiceSuccess(o)),
      catchError(e => of(fetchServiceFailure(e))),
  )),
);
