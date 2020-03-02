
import { SELECT_FLIGHT } from './types';
import config from '../../config';

const API_URL = config.API_URL;


//Action called on redirect from messenger bot
export const selectFlight = (sessionId, outboundFlightId, inboundFlightId) => dispatch => {
    console.log('Loading...');
    dispatch({ type: SELECT_FLIGHT.AWAITING, loading: true });
    fetch(`${API_URL}/api/hold/${sessionId}/?outbound=${outboundFlightId}&inbound=${inboundFlightId}`, { 
        method: "POST",
        headers: { "Content-type": "application/json" } 
    })
    .then(response => {
        if (response.status !== 200 ) {
            console.log('Error! Unsuccessful request to server')
            throw new Error ('Unsuccessful request to server')
        }
        return response.json()
    })
    .then(json => {
        console.log('selectFlight Result', json);
        const flights = setFlights(json);
        dispatch({
                type: SELECT_FLIGHT.SUCCESS,
                flights: flights,
                flightDetails: json.result.details,
                loading: false
            });
        console.log('Loading Complete!');
        })
        .catch(error => {
            console.log('Error while getting query data with error ', error );
            dispatch({ type: SELECT_FLIGHT.ERROR, message: error.message, loading: false })
        });
    }


const setFlights = (response) => {
    let flights = [];
    flights.push(response.result.outbound);
    if (response.result.outbound) {
        flights.push(response.result.inbound);
    }
    return flights;
}