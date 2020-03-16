//Reducer to handle action cases

import { QUERY_DATA } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_QUERRY_PARAMETERS = {
    origin: "BCN",
    destination: "",
    departDate:  new Date(),
    returnDate: null,
    adultNumber: 1,
    childrenNumber: 0,
    infantNumber: 0,
    flightType: "RT",
    flightClass: "Economy",
    flightResults: [],
    loading: false,
    searchType: null,
    fetchState: "default",
}

const querryReducer = (state = DEFAULT_QUERRY_PARAMETERS, action) => {
    switch(action.type) {

        //Configure store after successful flight search
        case QUERY_DATA.FETCH_SUCCESS:
            return {
                ...state,
                sessionId: action.sessionId,
                origin: action.origin,
                destination: action.destination,
                departDate: action.departDate,
                returnDate: action.returnDate,
                adultNumber: action.adultNumber,
                childrenNumber: action.childrenNumber,
                infantNumber: action.infantNumber,
                flightType: action.flightType,
                flightClass: action.flightClass,
                flightResults: action.flightResults,
                loading: action.loading,
                fetchState: fetchStates.success
            }
        //Sets appState to 'loading' & updates the parameters in the app
        case QUERY_DATA.FETCHING:
            return { 
                ...state,  
                origin: action.origin,
                destination: action.destination,
                departDate: action.departDate,
                returnDate: action.returnDate,
                adultNumber: action.adultNumber,
                childrenNumber: action.childrenNumber,
                infantNumber: action.infantNumber,
                flightType: action.flightType,
                flightClass: action.flightClass,
                flightResults: action.flightResults,
                loading: action.loading,
                searchType: action.searchType,
                fetchState: fetchStates.fetching
            }
        //If there is an error
        case QUERY_DATA.FETCH_ERROR:
            return {
                ...state,
                message: action.message,
                loading: action.loading,
                fetchState: fetchStates.error
            }     
        default:
            return state;
    }
};

export default querryReducer;