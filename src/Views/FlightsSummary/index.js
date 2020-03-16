import React from 'react';
import {connect} from 'react-redux';
import { getTime, getDate, pluralize } from '../../Shared/utils/dateTimeFormatter'
import {
    Card,
} from 'react-bootstrap';

// const encodeHTML = (text) => {
//     const terms = decodeURIComponent(text);
//     console.log("Terms - ", terms);
//     document.getElementById("terms").innerHTML = terms;

// }

const PriceSummary = (props) => (
    <div className="row  mt-2 mb-4">
                        <div className="col-12">
                            <div className="places text-center"> Total Price Plus Taxes</div>
                            <div className="text-center mb-4"> {props.flightDetails.currency} {' '} {props.flightDetails.cost}</div>
                        </div>
                        <div className="col-12 text-center">
                            <span className=""> Flight Tickets for </span>
                            <span className="">
                                {props.flightDetails.adults > 0 ? <span>{props.flightDetails.adults} {' '} Adult{pluralize('Adult', parseInt(props.flightDetails.adults))}{', '}</span> : null}
                                {props.flightDetails.child > 0 ? <span>{props.flightDetails.child} {' '} Child{pluralize('Child', parseInt(props.flightDetails.child))}</span> : null}
                                {props.flightDetails.infant > 0 ? <span>{', '}{props.flightDetails.infant} {' '} Infant{pluralize('Infant', parseInt(props.flightDetails.infant))}</span> : null}
                            </span>
                        </div>
                    </div>
);



const FlightSummary = (props) => (
    <div className="row  mt-2 mb-4">
        <div className="col-12">
            <span className="places"> {props.flight.from} to {props.flight.to}</span>
        </div>
        <div className="col-6">
            <span className="list-detail"> {getDate(props.flight.departure)}</span>
        </div>
        <div className="col-6">
            <span className="list-detail">  {getDate(props.flight.arrival)}</span>
        </div>
        <div className="col-6">
            <span className="list-detail"> {getTime(props.flight.departure)}</span>
        </div>
        <div className="col-6">
            <span className="list-detail">  {getTime(props.flight.arrival)}</span>
        </div>
        <div className="col-6">
            <span className="list-detail"> {props.flight.fromcode}</span>
        </div>
        <div className="col-6">
            <span className="list-detail">  {props.flight.tocode}</span>
        </div>  
        <div id="terms" className="col-12">   
        </div> 
        {/* {encodeHTML(props.flight.terms)}                           */}
    </div>
);


const PassengersSummary = (props) => (
    <div>
        <div className="row mt-2 mb-2">
        <div className="col-12">
            <span className="places">Passengers</span>
        </div>
            <ol className="passengers">
                {
                    props.passengersDetails.map(passenger => {
                        return (
                            <li>{passenger.firstname} {passenger.lastname}</li>
                        )
                    })
                }
            </ol>
        </div>
        <div className="row mb-4">
            <div className="col-12">
                <span className="places">Contact Details</span>
            </div>            
            <div className="col-12">
                <span className="list-detail">Name :&nbsp; {props.contactDetails.firstname} {props.contactDetails.lastname}</span>
            </div>
            <div className="col-12">
                <span className="list-detail">Phone :&nbsp; {props.contactDetails.phone}</span>
            </div>
            <div className="col-12">
                <span className="list-detail"> Email :&nbsp; {props.contactDetails.email}</span>
            </div> 
        </div>
    </div>
);


class FlightsSummary extends React.Component {


    render() {

    const { flightDetails, flights, contactDetails, passengersDetails } = this.props;

    
    return (
        <div className=""  id="style-1">
            <Card className="shadow-none summary-container">
                <Card.Header>
                    <h5 className="mb-2">Booking Summary</h5>
                    <p className="text-muted card-header-detail">Please confirm that the details are in order</p>
                </Card.Header>
                
                {
                    !!flightDetails.cost ? (
                        <div>
                            <Card.Body className="py-2">
                                {
                                    !!contactDetails.firstname ? (
                                        <PassengersSummary contactDetails={contactDetails} passengersDetails={passengersDetails}></PassengersSummary>
                                    ) : null
                                }
                                {
                                    flights.map(flight => (
                                        <FlightSummary flight={flight}></FlightSummary>
                                    ))
                                }
                            </Card.Body>
                            <Card.Footer>
                                <PriceSummary flightDetails={flightDetails}></PriceSummary>
                        </Card.Footer>
                        </div>
                    ) : (<h5 className="text-center p-5">Loading...</h5>)
                }
            </Card>
        </div>
    )
}

}
const mapStateToProps = state => {
    const { 
        selectedFlight: { flights, flightDetails },
        passengers: { passengersDetails, contactDetails },
     } = state;
    return { flights, flightDetails, passengersDetails, contactDetails }
}

export default connect(
    mapStateToProps,
)(FlightsSummary);