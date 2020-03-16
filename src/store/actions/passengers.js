import { PASSENGER } from './types';
import config from '../../config';
import axios from 'axios';
import { returnNos } from '../../Shared/utils/dateTimeFormatter';


const API_URL = config.API_URL;

export const savePassengerDetails = (passengerDetails, formIndex) => {
    return { type: PASSENGER.SAVE_PAX_DETAILS, passengerDetails: passengerDetails, formIndex: formIndex }
}

export const saveContactDetails= (contactDetails) => {
    return { type: PASSENGER.SAVE_CONTACT, contactDetails: contactDetails }
}

/**
 * Sends passenger data to the backend
 */
export const sendPassengerData = (passengerData, sessionId) => dispatch => {
    console.log('Loading Payments...');
    console.log("Passenger Data", passengerData);
    passengerData.contact.phone = returnNos(passengerData.contact.phone);
    console.log("Passenger Number", passengerData.contact.phone);

    console.log("Session ID", sessionId);
    dispatch({ 
        type: PASSENGER.SEND_DATA, 
        loading: true,
    });
    axios.post(`${API_URL}/api/confirm/${sessionId}/`, passengerData)
        .then((response) => {
            if (response.status !== 200 ) {
                console.log('Error! Unsuccessful request to server')
                throw new Error ('Unsuccessful request to server')
            }
            console.log('Loading Complete!', response.data);
            const data = response.data;
            dispatch({
                type: PASSENGER.SEND_SUCCESS,
                paymentLimit: data.result.booking_details.payment_limit,
                ticketingLimit: data.result.booking_details.ticketing_limit,
                loading: false,
            });
        }).catch((error) => {
            console.log(error);
            dispatch({ 
                type: PASSENGER.SEND_ERROR, 
                message: error.message, 
                loading: false
            })
        });
}

