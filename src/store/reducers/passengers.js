
import { PASSENGER, QUERY_DATA } from '../actions/types';
// import fetchStates from './fetchStates';

const DEFAULT_SELECTED_FLIGHT = {
    passengerForms: [],//array of objects of passenger details
    contactDetails: {},
    loading: false,
}

const passengersReducer = (state = DEFAULT_SELECTED_FLIGHT, action ) => {
    switch(action.type) {
        case PASSENGER.SAVE_PAX_DETAILS:
            const { passengerForms } = state;
            passengerForms[action.formIndex] = action.passengerDetails;
            return {...state, 
                passengerForms: passengerForms,
            }
        case PASSENGER.SAVE_CONTACT:
            return {...state, 
                contactDetails: action.contactDetails,
            }
        case PASSENGER.SEND_DATA:
            return {...state, 
                loading: action.loading,
            }
        case QUERY_DATA.FETCHING: //On  each new query, the passenger details are reset
            return { ...state, passengerForms: [] } 
        default:
            return state;
    }
}

export default passengersReducer;