//Root reducer that combines all reducers

import { combineReducers } from 'redux';
import configReducer from './config';
import destinationsReducer from './destinations';
import querryReducer from './querryState';


export default combineReducers({
    config: configReducer,
    destinations: destinationsReducer,
    querry: querryReducer,

});