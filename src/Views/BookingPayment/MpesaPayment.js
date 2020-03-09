import React from 'react';
import { Row,  Col,  Card, } from 'react-bootstrap';
import mpesa from '../../assets/images/Mpesa.png';
import axios from 'axios';
import config from '../../config';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const API_URL = config.API_URL;



class MpesaPayment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };      
    }

    render() {
        const { sessionId, contactDetails } = this.props;

        const postMpesaPayment = (sessionId, contactDetails) => () => {
            const body = {
                phonenumber: contactDetails.phone
            }
            this.setState({ loading: true });
            console.log("Body ", body);
            axios.post(`${API_URL}/api/payment/${sessionId}/mpesa/`, body)
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

        return (
            <Card.Body>
                <Row className="pt-3">
                    <Col sm={8} className="mr-4">
                        <p className="mb-0 pl-3 pt-1">
                            Mpesa Payment Steps.
                        </p>
                    </Col>
                    <Col sm={3} className="text-sm-right mt-3 mt-sm-0">
                        <img className="pl-3 " src={mpesa} height="45" alt="payment-images" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <ol>
                        <li>Go to Mpesa menu on your phone</li>
                        <li>Select Pay Bill option</li>
                        <li>Enter Business no. 220220</li>
                        <li>Enter Account no. xxxxxxxx</li>
                        <li>Enter the Amount KES {this.props.flightDetails.cost}</li>
                        <li>Enter your M-PESA PIN and Send</li>
                        <li>Click 'Confirm Submission' on making payment</li>
                        </ol>
                    </Col>

                </Row>
                <Row className="m-2">
                    <Col md={6}  className="mt-3">
                        <button
                            type="button"
                            fullWidth
                            className = "btn btn-default btn-previous  w-100"
                            onClick = {this.props.previousStep}
                            >
                            Previous Section
                        </button>
                    </Col>
                    <Col md={6}  className="mt-3">
                        <button
                            type="submit"
                            fullWidth
                            className = "btn btn-primary w-100"
                            onClick = { postMpesaPayment(sessionId, contactDetails) }
                            >
                            {
                                this.state.loading ? (
                                <div> 
                                        <span>Confirming</span>
                                        <div class="spinner-border spinner-border-sm float-right" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                </div>
                                ) : (<span>Confirm Submission</span>)
                            }
                        </button>
                    </Col>
                </Row>
            </Card.Body>
        );
    }
}


const mapStateToProps = state => {
    const { 
        querry: { sessionId },
        passengers: { contactDetails },
        selectedFlight: { flightDetails }
    } = state;
    return { sessionId, contactDetails, flightDetails }
}


export default withRouter(connect(
    mapStateToProps,
)(MpesaPayment));