import React from 'react';
import {connect} from 'react-redux';
import { getTime, getDate, pluralize } from '../../Shared/utils/dateTimeFormatter'
import {
    Card,
} from 'react-bootstrap';


const FlightSummary = ({ flightDetails, flights }) => {
    console.log('flightDetails', flightDetails);
    return (
        <div>
            <Card  className="shadow-none">
                <Card.Header>
                    <h5 className="mb-2">Booking Summary</h5>
                    <p className="text-muted card-header-detail">Please confirm that the details are in order</p>
                </Card.Header>
                
                <Card.Body className="py-2">
                    {
                        flights.map(flight => (
                            <div className="row  mt-2 mb-4">
                                <div className="col-12">
                                    <span className = "places"> {flight.from} to {flight.to}</span>
                                </div>
                                <div className="col-6">
                                    <span className = "trip-locations"> {getDate(flight.departure)}</span>
                                </div>
                                <div className="col-6">
                                    <span className = "trip-locations">  {getDate(flight.arrival)}</span>
                                </div>
                                <div className="col-6">
                                    <span className = "trip-locations"> {getTime(flight.departure)}</span>
                                </div>
                                <div className="col-6">
                                    <span className = "trip-locations">  {getTime(flight.arrival)}</span>
                                </div>
                                <div className="col-6">
                                    <span className = "trip-locations"> {flight.fromcode}</span>
                                </div>
                                <div className="col-6">
                                    <span className = "trip-locations">  {flight.tocode}</span>
                                </div>                            
                            </div>
                        ))
                    }
                </Card.Body>
                <Card.Footer>
                    <div className="row  mt-2 mb-4">
                        <div className="col-12">
                            <div className = "places text-center"> Total Price</div>
                            <div className = "text-center mb-4"> {flightDetails.currency} {' '} {flightDetails.cost}</div>
                        </div>
                        <div className="col-12 text-center">
                            <span className = ""> Flight Tickets for </span>
                            <span className = "">
                                {flightDetails.adults > 0 ? (<span>{flightDetails.adults} {' '} Adult{pluralize('Adult', flightDetails.adults)}{', '}</span>) : null}
                                {flightDetails.child > 0 ? (<span>{flightDetails.child} {' '} Child{pluralize('Child', flightDetails.child)}</span>) : null}
                                {flightDetails.infant > 0 ? (<span>{', '}{flightDetails.infant} {' '} Infant{pluralize('Infant', flightDetails.infant)}</span>) : null}
                            </span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}


const mapStateToProps = state => {
    const { selectedFlight: { flights, flightDetails } } = state;
    return { flights, flightDetails }
}

export default connect(
    mapStateToProps,
)(FlightSummary);