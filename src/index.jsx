// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import citiesReducer from './reducers/cities_reducer';
import clickedCityReducer from './reducers/clicked_city_reducer';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer,
  clickedCity: clickedCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App className="row"/>
  </Provider>,
  document.getElementById('root')
);
