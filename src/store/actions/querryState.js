import { SET_QUERRY } from './types';


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