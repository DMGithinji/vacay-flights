import React from 'react';

import {
    Row,
    Col,
    Card,
    Collapse
} from 'react-bootstrap';

import Aux from "./../../hoc/_Aux";

import mpesa from '../../assets/images/Mpesa.png';
import card from '../../assets/images/card.png';

import CONSTANTS from "../../store/constants";
import FlightSummary from '../FlightSummary';

class Checkout extends React.Component {
    state = {
        accordionKey: 1
    };

    render() {
        const { accordionKey } = this.state;

        return (
            <Aux>
                <Row className='content-wrapper'>
                    <Col md={8} className="form-column">
                    <div className="accordion">
                                        <Card className='mb-0 shadow-none'>
                                            <Card className="mb-0 shadow-none">
                                                <Card.Header className="card-header">
                                                    <h5 className="mb-2">Payment Selection</h5>
                                                    <p className="text-muted mb-0">Fill up given form for your payment details.</p>
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
                                                    <Card.Body>
                                                        <Row>
                                                            <Col sm={8}>
                                                                <ol>
                                                                <li>Go to Mpesa menu on your phone</li>
                                                                <li>Select Pay Bill option</li>
                                                                <li>Enter Business no. 220220</li>
                                                                <li>Enter Account no. xxxxxxxx</li>
                                                                <li>Enter the Amount KES 9,000</li>
                                                                <li>Enter your M-PESA PIN and Send</li>
                                                                </ol>
                                                            </Col>
                                                            <Col sm={4} className="text-sm-right mt-3 mt-sm-0">
                                                                <img src={mpesa} className="hei-45" alt="payment-images"/>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
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
                                                    <Card.Body className='bg-light'>
                                                        <Row>
                                                            <Col sm={8}>
                                                                <p className="mb-0 pl-3 pt-1">Safe money transfer using your bank account. We support Mastercard and Visa.</p>
                                                            </Col>
                                                            <Col sm={4} className="text-sm-right mt-3 mt-sm-0">
                                                                <img src={card} height="24" alt="payment-images"/>
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-4">
                                                            <Col md={12}>
                                                                <div className="form-group fill">
                                                                    <label htmlFor="card-number">Card Number</label>
                                                                    <input type="text" id="card-number" className="form-control bg-transparent" data-toggle="input-mask" data-mask-format="0000 0000 0000 0000" placeholder="4242 4242 4242 4242"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={6}>
                                                                <div className="form-group fill">
                                                                    <label htmlFor="card-name-on">Name on card</label>
                                                                    <input type="text" id="card-name-on" className="form-control bg-transparent" placeholder="Cardholder's Name"/>
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="form-group fill">
                                                                    <label htmlFor="card-expiry-date">Expiry date</label>
                                                                    <input type="text" id="card-expiry-date" className="form-control bg-transparent" data-toggle="input-mask" data-mask-format="00/00" placeholder="MM/YY"/>
                                                                </div>
                                                            </Col>
                                                            <Col md={3}>
                                                                <div className="form-group fill">
                                                                    <label htmlFor="card-cvv">CVV code</label>
                                                                    <input type="text" id="card-cvv" className="form-control bg-transparent" data-toggle="input-mask" data-mask-format="000" placeholder="012"/>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </div>
                                            </Collapse>
                                        </Card>
                                        <Card className="mb-0 shadow-none border-top">
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={6}>
                                                        <a href={CONSTANTS.BLANK_LINK} className="btn btn-outline-secondary">
                                                            Back to Passenger Details
                                                        </a>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <div className="text-sm-right">
                                                            <a href={CONSTANTS.BLANK_LINK} className="btn btn-primary text-sm-right mt-md-0 mt-2">
                                                                Complete Order
                                                            </a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </div>
                    </Col>
                    <Col md={4} className = "form-column">
                        <FlightSummary />
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Checkout;