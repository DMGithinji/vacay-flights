import { SET_QUERRY, QUERY_DATA } from './types';
import config from '../../config';

const API_URL = config.API_URL;

export const setOrigin = origin => {
    return { type: SET_QUERRY.ORIGIN, origin: origin }
}

export const setDestination = destination => {
    return { type: SET_QUERRY.DESTINATION, destination: destination }
}

export const setDepartDate = departDate => {
    return { type: SET_QUERRY.DEPART_DATE, departDate: departDate }
}

export const setReturnDate = returnDate => {
    return { type: SET_QUERRY.RETURN_DATE, returnDate: returnDate }
}

export const setAdultNumber = adultNumber => {
    console.log('Adult Number being set', adultNumber);
    return { type: SET_QUERRY.ADULT_NO, adultNumber: adultNumber }
}

export const setChildrenNumber = childrenNumber => {
    return { type: SET_QUERRY.CHILDREN_NO, childrenNumber: childrenNumber }
}

export const setInfantNumber = infantNumber => {
    return { type: SET_QUERRY.INFANT_NO, infantNumber: infantNumber }
}

export const setFlightType = flightType => {
    return { type: SET_QUERRY.FLIGHT_TYPE, flightType: flightType }
}

export const setFlightClass = flightClass => {
    return { type: SET_QUERRY.FLIGHT_CLASS, flightClass: flightClass }
}


/**
 * 
 * @param {
 * "from" : <city>, 
 * "to" : <city>, 
 * "start" :<timestamp>, 
 * "end" :<timestamp>, 
 * "adults" :<adults>, 
 * "child":<child>, 
 * "infant":<child>, 
 * "triptype" : <RT or OW>} 
 */

export const setQuery = query => dispatch => {
    console.log('Loading New Search...', query);
    const start =  (Date.parse(query.departDate))/1000;
    const end =  (Date.parse(query.returnDate))/1000;
    console.log("end", end, "start", start);
    dispatch({ 
        type: QUERY_DATA.FETCHING, 
        loading: true, 
        searchType: "NEW", 
        flightResults: [],
        origin: query.origin,
        destination: query.destination,
        departDate: query.departDate,
        returnDate: query.returnDate,
        adultNumber: query.adultNumber,
        childrenNumber: query.childrenNumber,
        infantNumber: query.infantNumber,
        flightType: query.flightType, 
    }); //On new search, update query parameters, set loading true and clear current flight results
    return fetch(`${API_URL}/api/search/?from=${query.origin}&to=${query.destination}&start=${start}&end=${end}&adults=${query.adultNumber}&child=${query.childrenNumber}&infant=${query.infantNumber}&triptype=${query.flightType}`)
        .then(response => {
            // if (response.status !== 200 ) {
            //     console.log('Error! Unsuccessful request to server')
            //     throw new Error ('Unsuccessful request to server')
            // }
            return response.json()
        })
        .then(json => {
            console.log('New Search Response ', json);
            console.log('Loading Complete!');
            dispatch({
                type: QUERY_DATA.FETCH_SUCCESS,
                sessionId: json.result.session,
                origin: json.result.details.from,
                destination: json.result.details.to,
                departDate: json.result.details.start,
                returnDate: json.result.details.end,
                adultNumber: json.result.details.adults,
                childrenNumber: json.result.details.child,
                infantNumber: json.result.details.infant,
                flightType: json.result.details.triptype,
                // flightClass: json.result.detail.flightClass,
                flightResults: json.result.flights,
                loading: false,
                searchType: null
            });
        })
        .catch(error => {
            console.log('Error while getting query data with error ', error );
            dispatch({ type: QUERY_DATA.FETCH_ERROR, message: error.message, loading: false })
        });
    }

//Action called on redirect from messenger bot
export const fetchQueryData = sessionId => dispatch => {
    console.log('SessionID', sessionId);
    console.log('Loading from Redirect...');
    dispatch({ type: QUERY_DATA.FETCHING, loading: true, searchType: "REDIRECT" });
    return fetch(`${API_URL}/api/${sessionId}`)
        .then(response => {
            if (response.status !== 200 ) {
                console.log('Error! Unsuccessful request to server')
                throw new Error ('Unsuccessful request to server')
            }
            return response.json()
        })
        .then(json => {
            console.log('Query Data ', json);
            console.log('Loading Complete!');
            dispatch({
                type: QUERY_DATA.FETCH_SUCCESS,
                sessionId: sessionId,
                origin: json.result.details.from,
                destination: json.result.details.to,
                departDate: json.result.details.start,
                returnDate: json.result.details.end,
                adultNumber: json.result.details.adults,
                childrenNumber: json.result.details.child,
                infantNumber: json.result.details.infant,
                flightType: json.result.details.triptype,
                // flightClass: json.result.detail.flightClass,
                flightResults: json.result.flights,
                loading: false,
                searchType: null
            });
        })
        .catch(error => {
            console.log('Error while getting query data with error ', error );
            dispatch({ type: QUERY_DATA.FETCH_ERROR, message: error.message, loading: false, searchType: null })
        });
    }
