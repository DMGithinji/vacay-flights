import React from 'react';
import divider from '../../../assets/images/Divider.png';
import HorizontalDivider from '../../../assets/images/HorizontalDivider.png';
import TakeOffIcon from '../../../assets/images/TakeOffIcon.png';


const FlightResultSM = (props) => (
    <div className="card shadow-none flight-card p-0">
            <div className="row">
            <div className="col-8">
            <div className="d-flex align-items-start flex-column border-right">
                <div className="flight-details border-bottom">
                    <div className="p-3">
                        <div className="grid-container">
                            <strong className="item1 pl-4">Tue, Jan 21</strong>
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
                    <strong className="item1 pl-4">Tue, Jan 21</strong>
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

const FlightResultLG = (props) => (
    <div className="card shadow-none flight-card-lg">
        <div className="row border-bottom pb-2">
            <div className="col-12 d-flex inline justify-content-between">
                <div className= "d-flex flex-column" >
                    <span className = "trip-locations"> Mombasa to Nairobi</span>
                    <span className = "passenger-count">2 Adults, 1 Child</span>
                </div>
                <div className="price text-primary d-flex  align-items-center">
                    <span>KES 9000</span>
                </div>
            </div>
        </div>
        <div className="row border-bottom mt-3 pb-2">
            <div className="col-3 d-flex flex-column">
                <div className="d-flex justify-content-start">
                    <span className="badge badge-primary mb-2">Departure</span>
                </div>
                <span className="time">17:40</span>
                <div className="date">Tue, Jan 21</div>
                <div className="location-details">Airport, Place</div>
            </div>
            <div className="col-6 middle-col">
                <img src={TakeOffIcon} className="height-45" alt="plane" />
                <div className="detail-text mt-1">Duration: 50min</div>
                <img src={HorizontalDivider} className="height-45" alt="divider" />
                <div className="detail-text">Cabin Class: Economy</div>            
                <div className="detail-text">FlightID | Airline</div>            
            </div>
            <div className="col-3 d-flex flex-column">
                <div className="d-flex justify-content-start">
                    <span className="badge badge-primary mb-2">Arrival</span>
                </div>
                <span className="time">17:40</span>
                <div className="date">Tue, Jan 21</div>
                <div className="location-details">Airport, Place</div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <h5 className="text-primary underline pt-3">BOOK NOW! </h5>
            </div>
        </div>
    </div>
)


const FlightResult = ({ flight}) => {
        console.log('Option Props', flight);

        return (
            <FlightResultLG flight={flight}></FlightResultLG>
        );
    }


export default FlightResult;