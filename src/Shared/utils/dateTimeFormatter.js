
export const pluralize = (passengerType, number) => {
    if (passengerType === 'Adult'  || passengerType === 'Infant'){
        return number !== 1 ? ('s') : null;
    } else {
        return number !== 1 ? ('ren') : null;
    }
}

// const setRedirect = (sessionId, outboundFlightid, inboundFlightid) => {
//     selectFlight(sessionId, outboundFlightid, inboundFlightid);
//     return  <Redirect to='/target' />
//   }

export const getDate = (unixTimeStamp) => {
    const dateTime = new Date( unixTimeStamp*1000);
    const day = dateTime.getDate();
    const month = dateTime.getMonth();
    const year = dateTime.getFullYear();
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return `${months[month]} ${day}, ${year}`;
}

export const getTime = (unixTimeStamp) => {
    const dateTime = new Date( unixTimeStamp*1000);
    const hours = dateTime.getHours();
    const minutes = '0'+dateTime.getMinutes();
    const am_pm = (hours <= 11 ) ? "AM" : "PM";
    return `${hours}:${minutes} ${am_pm}`;
}

