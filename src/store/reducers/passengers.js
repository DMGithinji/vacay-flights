
import { PASSENGER, QUERY_DATA } from '../actions/types';
// import fetchStates from './fetchStates';

const DEFAULT_SELECTED_FLIGHT = {
    passengersDetails: [],//array of objects of passenger details
    contactDetails: {},
    loading: false,
}

const passengersReducer = (state = DEFAULT_SELECTED_FLIGHT, action ) => {
    switch(action.type) {
        case PASSENGER.SAVE_PAX_DETAILS:
            const { passengersDetails } = state;
            passengersDetails[action.formIndex] = action.passengerDetails;
            return {...state, 
                passengersDetails: passengersDetails,
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
            return { ...state, passengersDetails: [] } 
        default:
            return state;
    }
}

export default passengersReducer;