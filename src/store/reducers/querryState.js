//Reducer to handle action cases

import { SET_QUERRY } from '../actions/types';

const DEFAULT_QUERRY_PARAMETERS = {
    origin: "",
    destination: "",
    departDate:  new Date(),
    returnDate: null,
    adultNumber: 1,
    childrenNumber: 0,
    infantNumber: 0,
    flightType: "",
    flightClass: "",
}

const querryReducer = (state = DEFAULT_QUERRY_PARAMETERS, action) => {
    switch(action.type) {
        case SET_QUERRY.ORIGIN:
            return {...state, origin: action.origin };
        case SET_QUERRY.DESTINATION:
            return {...state,  destination: action.destination}; 
        case SET_QUERRY.DEPART_DATE:
            return {...state,  departDate: action.departDate}; 
        case SET_QUERRY.RETURN_DATE:
            return {...state,  returnDate: action.returnDate};
        case SET_QUERRY.ADULT_NO:
            return {...state, adultNumber: action.adultNumber };
        case SET_QUERRY.CHILDREN_NO:
            return {...state,  childrenNumber: action.childrenNumber}; 
        case SET_QUERRY.INFANT_NO:
            return {...state,  infantNumber: action.infantNumber}; 
        case SET_QUERRY.FLIGHT_TYPE:
            return {...state,  flightType: action.flightType}; 
        case SET_QUERRY.FLIGHT_CLASS:
            return {...state,  flightClass: action.flightClass};         
        default:
            return state;
    }
};

export default querryReducer;