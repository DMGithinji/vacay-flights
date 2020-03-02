//Action

import { SET_DESTINATIONS } from './types';
import config from '../../config';

import axios from 'axios';
import auth from '../../auth';
const API_URL = config.API_URL;


/**
 * Get destination options to be used for 'Origin' and 'Destination' input fields
 * If successful, dispatches an array of destination objects
 */
export const getDestinationOptions = () => dispatch  => {
    return axios.get(API_URL, { headers: auth })
        .then(response => {
            const data = response.data;
            console.log(data);
            dispatch({ type: SET_DESTINATIONS.FETCH_SUCCESS, destinations: data.aerocrs.destinations.destination, })
        })
        .catch((error) => {
            console.log('error ', error);
            dispatch({ type: SET_DESTINATIONS.FETCH_ERROR, message: error.message })
        });
}

