import React from 'react';
import { connect } from 'react-redux';
import {Row,  Col,  Card,  Collapse } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import FlightsSummary from '../FlightsSummary';
import Timer from 'react-compound-timer';
import CardPayment from './CardPayment';
import MpesaPayment from './MpesaPayment';
import ModalPage from './failedPayment';
import axios from 'axios';
import config from '../../config';
import { withRouter } from 'react-router-dom';


const API_URL = config.API_URL;

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accordionKey: 1,
            showError: false
        };
    }


    postCardPayment = (cardDetails) => {

        console.log("Body ", cardDetails);
        axios.post(`${API_URL}/api/payment/${this.props.sessionId}/card/`, cardDetails)
        .then((response) => {
            if (response.status !== 200 ) {
                console.log('Error! Unsuccessful request to server')
                throw new Error ('Unsuccessful request to server')
            }
            const data = response.data;
            if (data.result.status === "successful"){
                this.props.history.push('/booking-confirmation'); //Start redirect to payments page
            } else {
                this.props.showError();
            }
        })
        .catch((error) => {
            console.log(error);
            this.props.showError();
        });
    
    }
    


    postMpesaPayment = ( contactDetails) => () => {
    const body = {
        phonenumber: contactDetails.phone
    }
    this.setState({ loading: true });
    console.log("Body ", body);
    axios.post(`${API_URL}/api/payment/${this.props.sessionId}/mpesa/`, body)
    .then((response) => {
        this.setState({ loading: false });
        if (response.status !== 200 ) {
            console.log('Error! Unsuccessful request to server')
            throw new Error ('Unsuccessful request to server')
        }
        const data = response.data;
        if (data.result.status === "successful"){
            this.props.history.push('/booking-confirmation'); //Start redirect to payments page
        } else {
            this.props.showError();
        }
    })
    .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
        this.props.showError();
    });

}



    /**Timer for payment */
    calculateTime (deadline){
        const currentTime = new Date();
        const currentUnixTime = (Date.parse(currentTime));
        console.log('currentUnixTime', currentUnixTime);
        const difference = currentUnixTime - deadline;
        return  difference/60/1000;
    }

    showError = () => {
        this.setState({ showError: true })
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
                                            className="custom-control-input"
                                            aria-controls="accordion1" />
                                        <label className="custom-control-label font-weight-bold" htmlFor="BillingPaypal">Pay with Mpesa</label>
                                    </div>
                                </Card.Header>
                                <Collapse in={this.state.accordionKey === 1}>
                                    <div id="accordion1">
                                        <MpesaPayment  showError={this.showError} />
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
                                        <CardPayment showError={this.showError} />
                                    </div>
                                </Collapse>
                            </Card>
                            <Card.Footer>
                                
                            </Card.Footer>
                        </div>
                    </Col>
                    <Col md={4} className = "form-column">
                        <FlightsSummary passengersDetails = {this.props.passengersDetails} contactDetails = {this.props.passengersDetails}/>
                    </Col>
                </Row>
                {
                    this.state.showError ? (
                        <ModalPage showError={this.state.showError} />
                    ) : null
                }
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    const { 
        passengers: { passengersDetails, contactDetails, paymentLimit },
        querry: { sessionId },
    } = state;
    return { passengersDetails, contactDetails, paymentLimit, sessionId }
}


export default withRouter(connect(
    mapStateToProps,
)(Checkout));