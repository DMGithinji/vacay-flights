import React, { Component } from 'react';
import { Row,  Col, } from 'react-bootstrap';
import { MDBProgress } from 'mdbreact';
import * as Yup from "yup";
import { connect } from 'react-redux';
import { saveContactDetails } from '../../store/actions/passengers';
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import CustomSelect from "../../Shared/components/SelectInputField";
import InputMask from 'react-input-mask';

const validationSchema = Yup.object({
    title: Yup.string("Select a title").required("Title is required"),
    firstname: Yup.string("Enter firstname").required("Firstname is required"),
    lastname: Yup.string("Enter lastname").required("Lastname is required"),
    email: Yup.string("Enter email").email('Please enter a valid email').required("Email is required"),
    phone: Yup.string("Enter phone number").required("Phone number is required"),
});

const ContactDetailsInput = (props) => {
    const {
        values: { title, firstname, lastname, phone, email },
        errors,
        touched,
        handleChange,
        isValid,
    } = props;

    return (
        <div>
            <Row>
        <Col lg={12}>
            <div className="card p-4 m-0 shadow-none">
                <form onSubmit={props.handleSubmit}>
                <Row className="">
                    <Col md={2} className = "passenger-input-field">
                        <label id="title-label" className="text-muted">Title</label>
                        <CustomSelect
                            labelId="title-label"
                            id="title"
                            name="title"
                            placeholder="Title"
                            error={Boolean(errors.title && touched.title)}
                            value={title}
                            options = {[
                                { value: 'Mr.', name: 'Mr.' },
                                { value: 'Mrs.', name: 'Mrs.' },
                                { value: 'Miss.', name: 'Miss.' },
                                { value: 'Child', name: 'Child'},
                                { value: 'Infant', name: 'Infant'}
                                ]}
                                handleSelect={handleChange}
                            />   
                            <div className="text-danger pl-2">{Boolean(errors.title) ? errors.title : ""}</div>
                        </Col>
                        <Col md={5} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">First Name</label>
                                    <TextField
                                        name="firstname"
                                        error={Boolean(errors.firstname  && touched.firstname)}
                                        placeholder="First Name"
                                        value={firstname}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        size="small"                                                               
                                    />
                                    <div className="text-danger pl-2">{Boolean(errors.firstname &&  touched.firstname) ? errors.firstname : ""}</div>
                                </Col>
                                <Col md={5} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">Last Name</label>
                                    <TextField
                                        name="lastname"
                                        error={Boolean(errors.lastname && touched.lastname)}
                                        placeholder="Last Name"
                                        value={lastname}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        size="small"                                                              
                                    />
                                    <div className="text-danger pl-2">{Boolean(errors.lastname && touched.lastname) ? errors.lastname : ""}</div>
                                </Col>
                                <Col md={6} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">Phone Number</label>   
                                    <InputMask 
                                        name="phone"
                                        mask="+(999)-999-999999" 
                                        className="form-control form-mask" 
                                        placeholder="Phone number"
                                        error={Boolean(errors.phone && touched.phone)}
                                        value={phone}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        size="small"                                                              
                                    />
                                    <div className="text-danger pl-2">{Boolean(errors.phone && touched.phone) ? errors.phone : ""}</div>
                                </Col>
                                <Col md={6} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">Email</label>   
                                    <TextField
                                        name="email"
                                        placeholder="Email"
                                        error={Boolean(errors.email && touched.email)}
                                        value={email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        size="small"                                                              
                                    />
                                    <div className="text-danger pl-2">{Boolean(errors.email && touched.email) ? errors.email : ""}</div>
                                </Col>
                </Row>
                <Row className="mt-3">

                    <Col md={6} className="passenger-input-field">
                        <button
                            type="button"
                            fullWidth
                            className = "btn btn-default btn-previous w-100"
                            onClick = {props.previousStep}
                            >
                            Previous
                        </button>
                    </Col>
                    
                    <Col md={6} className="passenger-input-field">
                            <button
                                type="submit"
                                fullWidth
                                className = "btn btn-primary w-100"
                                disabled={!isValid}>
                                Submit
                            </button>
                        </Col>
                    </Row>
                    </form>
                    </div>           
            </Col>
            </Row>
        </div>
        )
    };


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    // configure = (number) => {
    //     let numberList = [];
    //     for (let i = 0; i<number.length; i++){
    //         if( range(0,9)
    //         .includes(number[i])){
    //             console.log("item ", number[i])
    //             numberList.push(number[i]);
    //         }
    //     }
    //     // return(numberList.join(""))
    // }

    submit = data => {
        console.log(data);
        // data.phone = this.configure(data.phone)
        this.props.saveContactDetails(data);
        this.props.handleSubmit();
    };

    render() {

        let values;
        if (this.props.passengersDetails.length) {
            const passengerOne = this.props.passengersDetails[0];
            const contactDetails = this.props.contactDetails;
            values = { //Set saved details in app state if available else set first passenger as default
                title : !!contactDetails.title ? contactDetails.title : passengerOne.title,
                firstname:  !!contactDetails.firstname ? contactDetails.firstname : passengerOne.firstname,
                lastname:  !!contactDetails.lastname ? contactDetails.lastname : passengerOne.lastname,
                email: !!contactDetails.email ? contactDetails.email : "",
                phone:  !!contactDetails.phone ? contactDetails.phone : "",
            };
        } else {
            values = { 
                title : "",
                firstname:  "",
                lastname:  "",
                email: "",
                phone: "",
            };
        }

        if (this.props.currentStep !== this.props.totalSteps) {
            return null
        } 
        return (
            <React.Fragment>
                <h6 className="pl-2 text-primary">Where will we send your booking information?</h6>
                <MDBProgress className="progressBar" material value={100} color="primary" />
                <Formik 
                    render={ props => <ContactDetailsInput {...props}  
                    sessionId={this.props.sessionId} 
                    previousStep = {this.props.previousStep} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={this.submit}
                />
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    const { 
        querry: { sessionId },
        passengers: { passengersDetails, contactDetails }
    } = state;
    return { sessionId, passengersDetails, contactDetails }
}

const mapDispatchToProps = dispatch => {
    return {
        saveContactDetails: (contactDetails) => dispatch(saveContactDetails (contactDetails))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactForm);