//Root reducer that combines all reducers

import { combineReducers } from 'redux';
import configReducer from './config';
import destinationsReducer from './destinations';


export default combineReducers({
    config: configReducer,
    destinations: destinationsReducer,

});