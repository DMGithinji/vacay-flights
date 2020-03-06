import { PASSENGER } from './types';
import config from '../../config';
import axios from 'axios';

const API_URL = config.API_URL;

export const savePassengerDetails = (passengerDetails, formIndex) => {
    return { type: PASSENGER.SAVE_PAX_DETAILS, passengerDetails: passengerDetails, formIndex: formIndex }
}

export const saveContactDetails= (contactDetails) => {
    return { type: PASSENGER.SAVE_CONTACT, contactDetails: contactDetails }
}

/**
 * Sends passenger data to the backend
 * @param {} body 
 */
export const sendPassengerData = (passengerData, sessionId) => dispatch => {
    console.log('Loading Payments...');

    console.log("Passenger Data", passengerData);
    console.log("Session ID", sessionId);
    dispatch({ 
        type: PASSENGER.SEND_DATA, 
        loading: true,
    });
    axios.post(`${API_URL}/api/confirm/${sessionId}/`, passengerData)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
}