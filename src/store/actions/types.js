//Action Types

//To store destinations provided by API, for selecting origin and destination
export const SET_DESTINATIONS = {
    FETCH_SUCCESS: 'SET_DESTINATIONS_FETCH_SUCCESS',
    FETCH_ERROR: 'SET_DESTINATIONS_FETCH_ERROR',
};

//To set querry parameters and get initial flight results
export const QUERY_DATA = {
    FETCH_SUCCESS: 'FETCH_QUERY_SUCCESS',
    FETCH_ERROR: 'FETCH_QUERY_ERROR',
    FETCHING: 'FETCH_AWAITING_RESPONSE',
};

//To set user querry parameters
export const SET_QUERRY = {
    ORIGIN: 'SET_ORIGIN',
    DESTINATION: 'SET_DESTINATION',
    DEPART_DATE: 'SET_DEPART_DATE',
    RETURN_DATE: 'SET_RETURN_DATE',
    FLIGHT_TYPE: 'SET_FLIGHT_TYPE',
    FLIGHT_CLASS: 'SET_FLIGHT_CLASS',
    ADULT_NO: 'SET_ADULT_NO',
    CHILDREN_NO: 'CHILDREN_NO',
    INFANT_NO: 'SET_INFANT_NO',
}; 


export const FLIGHTS = {
    FETCH_SUCCESS: 'FETCH_FLIGHTS_SUCCESS',
    FETCH_ERROR: 'FETCH_FLIGHTS_ERROR',
};