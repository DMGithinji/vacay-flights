import { PASSENGER } from './types';
// import config from '../../config';

// const API_URL = config.API_URL;

export const submitPassenger = (passengerDetails, formIndex) => {
    return { type: PASSENGER.SUBMIT_PAX_DETAILS, passengerDetails: passengerDetails, formIndex: formIndex }
}