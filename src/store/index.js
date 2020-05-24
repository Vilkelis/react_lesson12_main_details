import { createStore, combineReducers, applyMiddleware, compose, } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import serviceListReducer from '../reducers/serviceList';
import serviceFormReducer from '../reducers/serviceForm';
import { fetchServicesEpic, fetchServiceEpic } from '../epics';

const epic = combineEpics(
  fetchServicesEpic,
  fetchServiceEpic
);

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceForm: serviceFormReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;