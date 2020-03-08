import React from 'react';
import { Row,  Col,  Card, } from 'react-bootstrap';
import mpesa from '../../assets/images/Mpesa.png';
import axios from 'axios';
import config from '../../config';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { withRouter } from 'react-router-dom';

const API_URL = config.API_URL;



class MpesaPayment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayErrorMessage: false,
        };      
    }


    render() {
        const { sessionId, contactDetails } = this.props;

        const postMpesaPayment = (sessionId, contactDetails) => () => {
            const body = {
                phonenumber: contactDetails.phone
            }
            console.log("Body ", body);
            axios.post(`${API_URL}/api/payment/${sessionId}/mpesa/`, body)
            .then((response) => {
                if (response.status !== 200 ) {
                    console.log('Error! Unsuccessful request to server')
                    throw new Error ('Unsuccessful request to server')
                }
                const data = response.data;
                if (data.result.status === "successful"){
                    this.props.history.push('/booking-confirmation'); //Start redirect to payments page
                } else {
                    this.setState({ displayErrorMessage: true });
                }
            })
            .catch((error) => {
                console.log(error);
            });
        
        }

        return (
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
                        <li>Click 'Submitted' to confirm</li>
                        </ol>
                    </Col>
                    <Col sm={4} className="text-sm-right mt-3 mt-sm-0">
                        <img src={mpesa} className="hei-45" alt="payment-images" />
                    </Col>
                </Row>
                <Row className="m-2">
                    <Col md={6}>
                        <button
                            type="button"
                            fullWidth
                            className = "btn btn-default btn-previous  w-100"
                            // onClick = {props.previousStep}
                            >
                            Previous Section
                        </button>
                    </Col>
                    <Col md={6}>
                        <button
                            type="submit"
                            fullWidth
                            className = "btn btn-primary w-100"
                            onClick = { postMpesaPayment(sessionId, contactDetails) }
                            >
                            Submitted
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
        passengers: { contactDetails }
    } = state;
    return { sessionId, contactDetails }
}


export default withRouter(connect(
    mapStateToProps,
)(MpesaPayment));