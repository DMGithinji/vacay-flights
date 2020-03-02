
import { SELECT_FLIGHT } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_SELECTED_FLIGHT = {
    flights: [],
    flightDetails: {},
    loading: false,
    fetchState: "",
}

const selectFlightReducer = (state = DEFAULT_SELECTED_FLIGHT, action ) => {
    switch(action.type) {
        case SELECT_FLIGHT.SUCCESS:
            return {...state, 
                flights: action.flights,
                flightDetails: action.flightDetails,
                loading: action.loading,
                fetchState: fetchStates.success
            }
        case SELECT_FLIGHT.ERROR:
            return {
                ...state,
                message: action.message,
                loading: action.loading,
                fetchState: fetchStates.error
            }
        //Reducer to configure set appState to 'loading'
        case SELECT_FLIGHT.AWAITING:
            return {...state, loading: action.loading,
            }
        default:
            return state;
    }
}

export default selectFlightReducer;