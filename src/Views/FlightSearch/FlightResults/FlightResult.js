import React from 'react';
// import divider from '../../../assets/images/Divider.png';
import HorizontalDivider from '../../../assets/images/HorizontalDivider.png';
import TakeOffIcon from '../../../assets/images/TakeOffIcon.png';
import {connect} from 'react-redux';
import { selectFlight } from '../../../store/actions/selectFlight';
import { Link } from 'react-router-dom';
import { getDate, getTime, pluralize } from '../../../Shared/utils/dateTimeFormatter';


const getFlightDuration = (depart, arrive) => {
    const departTime = new Date( depart*1000);
    const arriveTime = new Date( arrive*1000);
    const hours = Math.floor((arriveTime.getTime() - departTime.getTime()) / 3600000);
    const minutes = Math.floor((arriveTime.getTime() - departTime.getTime()) % 3600000)*6;
    const hourPeriod = !!hours ? (`${hours} hr`) : "";
    const minutePeriod = !!minutes ? (`${minutes} min`) : "";
    return (`${hourPeriod} ${minutePeriod}`);
}

// const FlightResultSM = (props) => (
//     <div className="card shadow-none flight-card p-0">
//             <div className="row">
//             <div className="col-8">
//             <div className="d-flex align-items-start flex-column border-right">
//                 <div className="flight-details border-bottom">
//                     <div className="p-3">
//                         <div className="grid-container">
//                             <strong className="item1 pl-4">Jan, 21st</strong>
//                             <div className="item2 pl-4"><img src={divider} className="height-45" alt="divider" /></div>
//                             <span className="item3 small">{props.flight.airlineName}</span>  
//                             <div className="item4">{props.flight.fromcode}, Mombasa</div>
//                             <div className="item5">{props.flight.tocode}, Nairobi</div>
//                             <div className="item6">17:40</div>
//                             <span className="item7 small">50 min</span>
//                             <div className="item8">18:30</div>
//                         </div>
//                     </div>
//                 </div>
//             <div className="flight-details">
//             <div className="p-3">
                    
//             <div className="grid-container">
//                     <strong className="item1 pl-4">April, 21st</strong>
//                     <div className="item2 pl-4"><img src={divider} className="height-45" alt="divider" /></div>
//                         <span className="item3 small">{props.flight.airlineName}</span>  
//                         <div className="item5">MBA, Mombasa</div>
//                         <div className="item4">NRB, Nairobi</div>
//                         <div className="item6">17:40</div>
//                         <span className="item7 small">50 min</span>
//                         <div className="item8">18:30</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//             </div>
//             <div className="col-4">
                
//             </div>  
//             </div>
//         </div>
// );

const OneWayFlight = ({ flightDetails }) => {

    return (
        <div className="row border-bottom mt-3 pb-3">
            <div className="col-3 d-flex flex-column">
                <div className="d-flex justify-content-start">
                    <span className="badge badge-primary mb-2">Departure</span>
                </div>
                <span className="time">{getTime(flightDetails.departure)}</span>
                <div className="date">{getDate(flightDetails.departure)}</div>
                <div className="location-details">{flightDetails.from_airport}</div>
            </div>
            <div className="col-6 middle-col">
                <img src={TakeOffIcon} className="height-45" alt="plane" />
                <div className="detail-text mt-1">Duration: {getFlightDuration(flightDetails.departure, flightDetails.arrival)}</div>
                <img src={HorizontalDivider} className="horizontal-divider height-45" alt="divider" />
                <div className="detail-text">Cabin Class: {flightDetails.classname}</div>            
                <div className="detail-text">{flightDetails.airline}</div>            
            </div>
            <div className="col-3 d-flex flex-column">
                <div className="d-flex justify-content-start">
                    <span className="badge badge-primary mb-2">Arrival</span>
                </div>
                <span className="time">{getTime(flightDetails.arrival)}</span>
                <div className="date">{getDate(flightDetails.departure)}</div>
                <div className="location-details">{flightDetails.to_airport}</div>
            </div>
        </div>
    )
}

const FlightResultLG = ({ flightDetails, queryDetails, selectFlight, sessionId}) => {
    
    return (
    <div className="card shadow-none flight-card-lg">
        <div className="row border-bottom pb-1">
            <div className="col-12 d-flex inline justify-content-between">
                <div className= "d-flex flex-column" >
                    <span className = "trip-locations"> {flightDetails.outbound.from} to {flightDetails.outbound.to}</span>
                    <span className = "passenger-count">
                        {queryDetails.adultNumber > 0 ? (<span>{queryDetails.adultNumber} {' '} Adult{pluralize('Adult', parseInt(queryDetails.adultNumber))}</span>) : null}
                        {queryDetails.childrenNumber > 0 ? (<span>{', '} {queryDetails.childrenNumber} {' '} Child{pluralize('Child', parseInt(queryDetails.childrenNumber))}</span>) : null}
                        {queryDetails.infantNumber > 0 ? (<span>{', '}{queryDetails.infantNumber} {' '} Infant{pluralize('Infant', parseInt(queryDetails.infantNumber))}</span>) : null}
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
                <Link to={`/passenger-details/${sessionId}`}>
                    <button className="btn btn-primary call-to-action" 
                        onClick = {selectFlight(sessionId, flightDetails.outbound.flightid, flightDetails.inbound.flightid)}>
                        BOOK NOW! 
                    </button>
                </Link>
            </div>
        </div>
    </div>
)
}


const FlightResult = (props) => {
        return (
            <FlightResultLG 
                flightDetails={props.flightDetails} 
                queryDetails={props.queryDetails} 
                selectFlight = {props.selectFlight} 
                sessionId = {props.sessionId}>
            </FlightResultLG>
        );
    }

const mapStateToProps = state => {
    const { querry: { sessionId } } = state;
    return { sessionId }
}

const mapDispatchToProps = dispatch => {
    return {
        selectFlight: (sessionId, outboundId, inboundId) => () => dispatch(selectFlight(sessionId, outboundId, inboundId))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightResult);