//Action Types

export const SET_DESTINATIONS = 'SET_DESTINATIONS'; //To store destinations provided by API, for selecting origin and destination

//To set user querry parameters
export const SET_QUERRY_PARAMETERS = {
    ORIGIN: 'SET_ORIGIN',
    DESTINATION: 'SET_DESTINATION',
    DEPART_DATE: 'SET_DEPART_DATE',
    RETURN_DATE: 'SET_RETURN_DATE',
    FLIGHT_TYPE: 'SET_FLIGHT_TYPE',
    ADULT_NO: 'SET_ADULT_NO',
    CHILDREN_NO: 'CHILDREN_NO',
    INFANT_NO: 'SET_INFANT_NO',
} 


export const FLIGHTS = {
    FETCH_SUCCESS: 'FETCH_FLIGHTS_SUCCESS',
    FETCH_ERROR: 'FETCH_FLIGHTS_ERROR',
}