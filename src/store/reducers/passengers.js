
import { PASSENGER, QUERY_DATA } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_SELECTED_FLIGHT = {
    passengersDetails: [],//array of objects of passenger details
    contactDetails: {},
    loading: false,
    paymentLimit: null,
    ticketingLimit: null,
    fetchState: "",
}

const passengersReducer = (state = DEFAULT_SELECTED_FLIGHT, action ) => {
    switch(action.type) {
        case PASSENGER.SAVE_PAX_DETAILS://Save a passenger's details
            const { passengersDetails } = state;
            passengersDetails[action.formIndex] = action.passengerDetails;
            return {...state, 
                passengersDetails: passengersDetails,
            }
        case PASSENGER.SAVE_CONTACT://Save contact's details
            return {...state, 
                contactDetails: action.contactDetails,
            }
        case PASSENGER.SEND_DATA://Save status of the query
            return {...state, 
                loading: action.loading,
            }
        case PASSENGER.SEND_SUCCESS://Passenger details successfully sent
            return {...state, 
                loading: action.loading,
                paymentLimit: action.paymentLimit,
                ticketingLimit: action.ticketingLimit,
                fetchState: fetchStates.success
            }        
        case PASSENGER.SEND_ERROR://Passenger details not sent successfully
            return {...state, 
                loading: action.loading,
                fetchState: fetchStates.error,
                message: action.message,
            }
        case QUERY_DATA.FETCHING: //On  each new flight query, the passenger details are reset
            return { ...state, passengersDetails: [] 
            }

        default:
            return state;
    }
}

export default passengersReducer;