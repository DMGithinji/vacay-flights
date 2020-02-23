//Action

import { SET_DESTINATIONS } from './types';
import config from '../../config';

const API_URL = config.API_URL;


/**
 * Get destination options to be used for 'Origin' and 'Destination' input fields
 * If successful, dispatches an array of destination objects
 */
export const getDestinationOptions = () => dispatch  => {
    return fetch(`${API_URL}/getDestinations`)
        .then(response => {
            if (response.status !== 200 ) {
                throw new Error ('Unsuccessful request to get flight destinations options')
            }
            return response.json()
        })
        .then(json => dispatch({ type: SET_DESTINATIONS.FETCH_SUCCESS, destinations: json.aerocrs.destinations.destination, }))
        .catch(error => dispatch({ type: SET_DESTINATIONS.FETCH_ERROR, message: error.message }));
}