
import { PASSENGER, QUERY_DATA } from '../actions/types';
// import fetchStates from './fetchStates';

const DEFAULT_SELECTED_FLIGHT = {
    passengerForms: [],//array of objects of passenger details
    contactDetails: {},
}

const passengersReducer = (state = DEFAULT_SELECTED_FLIGHT, action ) => {
    switch(action.type) {
        case PASSENGER.SUBMIT_PAX_DETAILS:
            const { passengerForms } = state;
            console.log("Reducer", action.passengerDetails, action.formIndex);
            passengerForms[action.formIndex] = action.passengerDetails;
            return {...state, 
                passengerForms: passengerForms,
            }
        case QUERY_DATA.FETCHING:
            return { ...state, passengerForms: [] } 
        default:
            return state;
    }
}

export default passengersReducer;