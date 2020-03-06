import React, { Component } from 'react';
import { Row,  Col, } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { MDBProgress } from 'mdbreact';
import * as Yup from "yup";
// import { connect } from 'react-redux';
// import { submitPassenger } from '../../store/actions/passengers';
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CustomSelect from "../../Shared/components/SelectInputField";

const validationSchema = Yup.object({
    title: Yup.string("Select a title").required("Title is required"),
    firstName: Yup.string("Enter firstname").required("Firstname is required"),
    lastName: Yup.string("Enter lastname").required("Lastname is required"),
    email: Yup.string("Enter email").required("Email is required"),
    phone: Yup.string("Enter phone number").required("Phone number is required"),
});

const ContactDetailsInput = (props) => {
    const {
        values: { title, firstName, lastName, phone, email },
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
                                        name="firstName"
                                        error={Boolean(errors.firstName  && touched.firstName)}
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        size="small"                                                               
                                    />
                                    <div className="text-danger pl-2">{Boolean(errors.firstName &&  touched.firstName) ? errors.firstName : ""}</div>
                                </Col>
                                <Col md={5} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">Last Name</label>
                                    <TextField
                                        name="lastName"
                                        error={Boolean(errors.lastName && touched.lastName)}
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        size="small"                                                              
                                    />
                                    <div className="text-danger pl-2">{Boolean(errors.lastName && touched.lastName) ? errors.lastName : ""}</div>
                                </Col>
                                <Col md={6} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">Phone Number</label>   
                                    <TextField
                                        name="phone"
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
                <Row>

                    <Col md={6} className="pt-4">
                        <button
                            type="button"
                            fullWidth
                            className = "btn btn-default btn-previous  w-100"
                            onClick = {props.previousStep}
                            >
                            Previous Passenger
                        </button>
                    </Col>
                    
                    <Col md={6} className="pt-4">
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
    


    submit = data => {
        console.log(data);
        // this.props.submitPassenger(data, this.props.formIndex);
        this.props.lastStep()
    };


    render() {
        const values = { 
            title : "Mr.",
            firstName:  "",
            lastName:  "",
            email: "",
            phone: "",

        };

        if (this.props.currentStep !== this.props.totalSteps) {
            return null
        } 
    
        return (
            <React.Fragment>
                <h6 className="pl-2 text-primary">Where will we send your booking information?</h6>
                <MDBProgress className="progressBar" material value={100} color="primary" />
                <Formik 
                    render={props => <ContactDetailsInput {...props}  
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

// const mapDispatchToProps = dispatch => {
//   return {
//     submitPassenger: (passenger, formIndex) => dispatch(submitPassenger (passenger, formIndex))
//   };
// }

export default ContactForm;