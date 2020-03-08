import React from 'react';
import { connect } from 'react-redux';
import {Row,  Col,  Card,  Collapse } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import FlightsSummary from '../FlightsSummary';
import Timer from 'react-compound-timer';
import CardPayment from './CardPayment';
import MpesaPayment from './MpesaPayment';



class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accordionKey: 1
        };
    }

    /**Timer for payment */
    calculateTime (deadline){
        const currentTime = new Date();
        const currentUnixTime = (Date.parse(currentTime));
        console.log('currentUnixTime', currentUnixTime);
        const difference = currentUnixTime - deadline;
        return  difference/60/1000;
    }

    render() {
        const { accordionKey } = this.state;
        return (
            <Aux>
                <Row className='content-wrapper'>
                    <Col md={8} className="form-column">
                    <div className="accordion">
                            <Card className='mb-0 shadow-none '>
                                <Card className="mb-0 shadow-none">
                                    <Card.Header className="card-header">
                                        <h5 className="m-2">Payment Selection</h5>
                                        {
                                            !!this.props.paymentLimit ? (
                                                <div className="alert alert-danger mb-0 mt-1" role="alert">
                                                    Select a payment method and follow the steps given to complete your booking process. <br />
                                                    Please do so within the next { }
                                                    <Timer
                                                        initialTime={this.calculateTime(this.props.paymentLimit)}
                                                        direction="backward"
                                                    >
                                                        {() => (
                                                            <React.Fragment>
                                                                <Timer.Minutes /> minutes { }
                                                                <Timer.Seconds /> seconds { }
                                                            </React.Fragment>
                                                        )}
                                                    </Timer>
                                                    to confirm.
                                                </div>
                                            ) : (
                                                <div className="alert alert-primary mb-0 mt-1" role="alert">
                                                    Select a payment method and follow the steps given to complete your booking process.
                                                </div>
                                            )
                                        }
                                    </Card.Header>
                                </Card>
                            </Card>
                            <Card className='mb-0 shadow-none border-top'>
                                <Card.Header>
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            id="BillingPaypal"
                                            onClick={() => this.setState({ accordionKey: (accordionKey !== 1) ? 1 : 0 })}
                                            name="billingOptions"
                                            active
                                            className="custom-control-input"
                                            aria-controls="accordion1" />
                                        <label className="custom-control-label font-weight-bold" htmlFor="BillingPaypal">Pay with Mpesa</label>
                                    </div>
                                </Card.Header>
                                <Collapse in={this.state.accordionKey === 1}>
                                    <div id="accordion1">
                                        <MpesaPayment />
                                    </div>
                                </Collapse>
                            </Card>
                            <Card className='mb-0 shadow-none border-top'>
                                <Card.Header>
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            id="BillingCard"
                                            onClick={() => this.setState({ accordionKey: (accordionKey !== 2) ? 2 : 0 })}
                                            name="billingOptions"
                                            className="custom-control-input"
                                            aria-controls="accordion2" />
                                        <label className="custom-control-label font-weight-bold" htmlFor="BillingCard">Credit / Debit Card</label>
                                    </div>
                                </Card.Header>
                                <Collapse in={this.state.accordionKey === 2}>
                                    <div id="accordion2">
                                        <CardPayment />
                                    </div>
                                </Collapse>
                            </Card>
                        </div>
                    </Col>
                    <Col md={4} className = "form-column">
                        <FlightsSummary passengersDetails = {this.props.passengersDetails} contactDetails = {this.props.passengersDetails}/>
                    </Col>
                </Row>

            </Aux>
        );
    }
}

const mapStateToProps = state => {
    const { 
        passengers: { passengersDetails, contactDetails, paymentLimit }
    } = state;
    return { passengersDetails, contactDetails, paymentLimit }
}


export default connect(
    mapStateToProps,
)(Checkout);