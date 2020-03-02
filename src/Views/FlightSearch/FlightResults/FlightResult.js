import React from 'react';
import divider from '../../../assets/images/Divider.png';
import HorizontalDivider from '../../../assets/images/HorizontalDivider.png';
import TakeOffIcon from '../../../assets/images/TakeOffIcon.png';
import {connect} from 'react-redux';

const pluralize = (passengerType, number) => {
    if (passengerType === 'Adult'  || passengerType === 'Infant'){
        return number !== 1 ? ('s') : null;
    } else {
        return number !== 1 ? ('ren') : null;
    }
}

const getDate = (unixTimeStamp) => {
    const dateTime = new Date( unixTimeStamp*1000);
    const day = dateTime.getDate();
    const month = dateTime.getMonth();
    const year = dateTime.getFullYear();
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return `${months[month]} ${day}, ${year}`;
}

const getTime = (unixTimeStamp) => {
    const dateTime = new Date( unixTimeStamp*1000);
    const hours = dateTime.getHours();
    const minutes = '0'+dateTime.getMinutes();
    const am_pm = (hours <= 11 ) ? "AM" : "PM";
    return `${hours}:${minutes} ${am_pm}`;
}

const getFlightDuration = (depart, arrive) => {
    return false;
}

const FlightResultSM = (props) => (
    <div className="card shadow-none flight-card p-0">
            <div className="row">
            <div className="col-8">
            <div className="d-flex align-items-start flex-column border-right">
                <div className="flight-details border-bottom">
                    <div className="p-3">
                        <div className="grid-container">
                            <strong className="item1 pl-4">Jan, 21st</strong>
                            <div className="item2 pl-4"><img src={divider} className="height-45" alt="divider" /></div>
                            <span className="item3 small">{props.flight.airlineName}</span>  
                            <div className="item4">{props.flight.fromcode}, Mombasa</div>
                            <div className="item5">{props.flight.tocode}, Nairobi</div>
                            <div className="item6">17:40</div>
                            <span className="item7 small">50 min</span>
                            <div className="item8">18:30</div>
                        </div>
                    </div>
                </div>
            <div className="flight-details">
            <div className="p-3">
                    
            <div className="grid-container">
                    <strong className="item1 pl-4">April, 21st</strong>
                    <div className="item2 pl-4"><img src={divider} className="height-45" alt="divider" /></div>
                        <span className="item3 small">{props.flight.airlineName}</span>  
                        <div className="item5">MBA, Mombasa</div>
                        <div className="item4">NRB, Nairobi</div>
                        <div className="item6">17:40</div>
                        <span className="item7 small">50 min</span>
                        <div className="item8">18:30</div>
                    </div>
                </div>
            </div>
        </div>
        
            </div>
            <div className="col-4">
                
            </div>  
            </div>
        </div>
);

const OneWayFlight = ({ flightDetails }) => {

    return (
        <div className="row border-bottom mt-3 pb-3">
            <div className="col-3 d-flex flex-column">
                <div className="d-flex justify-content-start">
                    <span className="badge badge-primary mb-2">Departure</span>
                </div>
                <span className="time">{getTime(flightDetails.departure)}</span>
                <div className="date">{getDate(flightDetails.departure)}</div>
                <div className="location-details">{flightDetails.fromcode}, {flightDetails.from}</div>
            </div>
            <div className="col-6 middle-col">
                <img src={TakeOffIcon} className="height-45" alt="plane" />
                <div className="detail-text mt-1">Duration: 50min</div>
                <img src={HorizontalDivider} className="height-45" alt="divider" />
                <div className="detail-text">Cabin Class: {flightDetails.classname}</div>            
                <div className="detail-text">{flightDetails.airline}</div>            
            </div>
            <div className="col-3 d-flex flex-column">
                <div className="d-flex justify-content-start">
                    <span className="badge badge-primary mb-2">Arrival</span>
                </div>
                <span className="time">{getTime(flightDetails.arrival)}</span>
                <div className="date">{getDate(flightDetails.departure)}</div>
                <div className="location-details">{flightDetails.tocode}, {flightDetails.to}</div>
            </div>
        </div>
    )
}

const FlightResultLG = ({ flightDetails, queryDetails}) => {
    
    console.log("props", flightDetails, queryDetails);
    return (
    <div className="card shadow-none flight-card-lg">
        <div className="row border-bottom pb-2">
            <div className="col-12 d-flex inline justify-content-between">
                <div className= "d-flex flex-column" >
                    <span className = "trip-locations"> {flightDetails.outbound.from} to {flightDetails.outbound.to}</span>
                    <span className = "passenger-count">
                        {queryDetails.adultNumber > 0 ? (<span>{queryDetails.adultNumber} {' '} Adult{pluralize('Adult', queryDetails.adultNumber)}{', '}</span>) : null}
                        {queryDetails.childrenNumber > 0 ? (<span>{queryDetails.childrenNumber} {' '} Child{pluralize('Child', queryDetails.childrenNumber)}</span>) : null}
                        {queryDetails.infantNumber > 0 ? (<span>{', '}{queryDetails.infantNumber} {' '} Infant{pluralize('Infant', queryDetails.infantNumber)}</span>) : null}
                    </span>
                </div>
                <div className="price text-primary d-flex  align-items-center">
                    <span>{flightDetails.outbound.currency}&nbsp;</span> 
                    {
                        !!flightDetails.inbound.totalcost ? 
                            (<span>{flightDetails?.outbound?.totalcost+flightDetails.inbound.totalcost}</span>) : 
                            (<span>{flightDetails.inbound.totalcost}</span>)
                    }
                </div>
            </div>
        </div>
        <OneWayFlight flightDetails = {flightDetails.outbound} />
        <OneWayFlight flightDetails = {flightDetails.inbound} />
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <h5 className="text-primary underline pt-3">BOOK NOW! </h5>
            </div>
        </div>
    </div>
)
}


const FlightResult = ({ queryDetails, flightDetails }) => {
        console.log('Option Props', queryDetails);
        return (
            <FlightResultLG flightDetails={flightDetails} queryDetails={queryDetails} ></FlightResultLG>
        );
    }

const mapStateToProps = state => {
    const { querry: { flightResults } } = state;
    return { flightResults }
}

export default connect(
    mapStateToProps,
)(FlightResult);