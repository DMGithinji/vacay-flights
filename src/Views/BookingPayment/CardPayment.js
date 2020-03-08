import React from 'react';
import { Row,  Col,  Card, } from 'react-bootstrap';
import * as Yup from "yup";
import { connect } from 'react-redux';
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import card from '../../assets/images/card.png';
import CustomSelect from "../../Shared/components/SelectInputField";
import axios from 'axios';
import config from '../../config';
import { withRouter } from 'react-router-dom';

const API_URL = config.API_URL;


const validationSchema = Yup.object({
    number: Yup.string("Enter card number").required("Card number is required"),
    name: Yup.string("Enter name on card").required("Cardholder name is required"),
    month: Yup.string("Card expiry date").required("Card expiry date is required"),
    date: Yup.string("Card expiry date").required("Card expiry date is required"),
    ccv: Yup.string("Enter CVV code").required("CVV code is required"),
});

const FormInput = (props) => {

    const {
        values: { number, name, month, date, ccv },
        errors,
        touched,
        handleChange,
        isValid,
    } = props;

    return (
    <Card.Body className="p-4">
        <form onSubmit={props.handleSubmit}>
            <Row className="mb-4">
                <Col md={12}>
                <label id="number-label" className="text-muted">Card Number</label>
                <TextField
                    name="number"
                    error={Boolean(errors.number  && touched.number)}
                    placeholder="Card Number"
                    value={number}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    size="small"                                                               
                />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <label id="name-label" className="text-muted">Name on Card</label>
                    <TextField
                        name="name"
                        error={Boolean(errors.name  && touched.name)}
                        placeholder="Name on Card"
                        value={name}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        size="small"                                                               
                    />
                </Col>
                <Col md={4}>
                    <label id="expiry-label" className="text-muted">Card Expiry</label>
                    <div className="d-flex inline">
                    <CustomSelect
                        className="pr-2"
                        name="month"
                        error={Boolean(errors.month  && touched.month)}
                        placeholder="Month"
                        value={month}
                        handleSelect={handleChange}
                        variant="outlined"
                        fullWidth
                        size="small" 
                        options = {[
                            { value: 'January', name: 'January' },
                            { value: 'February', name: 'February' },
                            { value: 'March', name: 'March' },
                            { value: 'April', name: 'April'},
                            { value: 'May', name: 'May'},
                            { value: 'June', name: 'June'},
                            { value: 'July', name: 'July'},
                            { value: 'August', name: 'August'},
                            { value: 'September', name: 'September'},
                            { value: 'October', name: 'October'},
                            { value: 'November', name: 'November'},
                            { value: 'December', name: 'December'}
                            ]}                                                              
                    />

                    <CustomSelect
                        name="date"
                        className="flex-grow"
                        error={Boolean(errors.date  && touched.date)}
                        placeholder="Date"
                        value={date}
                        handleSelect={handleChange}
                        variant="outlined"
                        size="small"
                        options = {[
                            { value: '1', name: '1' },
                            { value: '2', name: '2' },
                            { value: '3', name: '3' },
                            { value: '4', name: '4'},
                            { value: '5', name: '5'},
                            { value: '6', name: '6'},
                            { value: '7', name: '7'},
                            { value: '8', name: '8'},
                            { value: '9', name: '9'},
                            { value: '10', name: '10'},
                            { value: '11', name: '11'},
                            { value: '12', name: '12'},
                            { value: '13', name: '13'},
                            { value: '14', name: '14'}
                            ]}                                                              
                    />
                    </div>
                </Col>
                <Col md={2}>
                <label id="ccv-label" className="text-muted">CCV</label>
                <TextField
                    name="ccv"
                    error={Boolean(errors.ccv  && touched.ccv)}
                    placeholder="xxx"
                    value={ccv}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    size="small"
                />
                </Col>
                </Row>
                <Row className="mt-5 mb-3">
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
                            // color =  "primary"
                            disabled={!isValid}>
                            Submit
                        </button>
                    </Col>
                </Row>
            </form>
        </Card.Body>
)};


const postCardPayment = (cardDetails, sessionId) => {

    console.log("Body ", cardDetails);
    axios.post(`${API_URL}/api/payment/${sessionId}/card/`, cardDetails)
    .then((response) => {
        if (response.status !== 200 ) {
            console.log('Error! Unsuccessful request to server')
            throw new Error ('Unsuccessful request to server')
        }
        const data = response.data;
        this.props.history.push('/booking-confirmation'); //Start redirect to payments page
    })
    .catch((error) => {
        console.log(error);
    });

}


class CardPayment extends React.Component {



    submit = ( data , sessionId ) => {
        console.log(data);
        postCardPayment(data, sessionId);
        // this.props.saveContactDetails(data);
        // this.props.handleSubmit();
    };


    render(){

    const values = { 
        number : "",
        name:  "",
        month:  "",
        date:  "",
        ccv: "",
    };
    return (
        <React.Fragment>
            <Row className="pt-3">
                <Col sm={8} className="mr-4">
                    <p className="mb-0 pl-3 pt-1">
                        Safe money transfer using your through Mastercard and Visa.
                    </p>
                </Col>
                <Col sm={3} className="text-sm-right mt-3 mt-sm-0">
                    <img className="pl-3 " src={card} height="24" alt="payment-images" />
                </Col>
            </Row>
            <Formik 
                    render={props =><FormInput {...props}  />} 
                    values={values}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={this.submit}
                />
        </React.Fragment>

        );
    }
}


const mapStateToProps = state => {
    const { querry: { sessionId }} = state;
    return { sessionId }
}


export default withRouter(connect(
    mapStateToProps,
)(CardPayment));