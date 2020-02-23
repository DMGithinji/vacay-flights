//Reducer to handle action cases

import { SET_DESTINATIONS } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_DESTINATIONS = {
    message: "",
    destinations: []
}

const destinationsReducer = (state = DEFAULT_DESTINATIONS, action) => {
    switch(action.type) {
        case SET_DESTINATIONS.FETCH_SUCCESS:
            return { ...state, destinations: action.destinations, fetchState: fetchStates.success };
        case SET_DESTINATIONS.FETCH_ERROR:
            return { ...state, message: action.message,  fetchState: fetchStates.error  };
        default:
            return state;
    }
};

export default destinationsReducer;