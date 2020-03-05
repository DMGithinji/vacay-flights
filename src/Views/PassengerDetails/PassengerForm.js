import React, { Component } from "react";
import { Formik } from "formik";
import { PassengerDetailsInput } from "./PassengerDetailsInput";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { submitPassenger } from '../../store/actions/passengers';
import { MDBProgress } from 'mdbreact';


const validationSchema = Yup.object({
  title: Yup.string("Select a title").required("Title is required"),
  firstName: Yup.string("Enter firstname").required("Firstname is required"),
  lastName: Yup.string("Enter lastname").required("Lastname is required"),
  nationality: Yup.string("Enter nationality").required("Nationality is required"),
  docNumber: Yup.string("Enter passport or ID number").required("Passport or ID number is required"),
  docExpiry: Yup.date("Enter document expiration date").required("Document expiry date is required").typeError('You must specify a date'),
  birthdate: Yup.date("Select a title").required("Birthdate is required").typeError('You must specify a date'),
});

class PassengerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = data => {
      console.log(data);
      this.props.submitPassenger(data, this.props.details.id);
      this.props.nextStep()
  };

  headerMessage = (currentStep, totalSteps) => {

        switch(currentStep) {
          case 1:
              if (totalSteps - 1 === currentStep ){
                return `Enter Your Booking Details`
              } else {
                return "1st Passenger's Booking Details"
              }
          case 2:
              return "2nd Passenger's Booking Details"
          case 3:
            return "3rd Passenger's Booking Details"
          default:
              return `${currentStep}th Passenger's Booking Details`;
    }
  }

  progress = (currentSteps, totalSteps) => {
    return (currentSteps/totalSteps)*100;
  }

  render() {

    console.log("Passenger form index", this.props.details.id, "-", this.props);

    const values = { 
      title: !!this.props.details.title ?  this.props.details.title : "Mr",
      firstName: !!this.props.details.firstName ? this.props.details.firstName : "",
      lastName: !!this.props.details.lastName ? this.props.details.lastName : "",
      nationality: !!this.props.details.nationality ? this.props.details.nationality : "KE",
      docNumber: !!this.props.details.docNumber ? this.props.details.docNumber : "",
      docExpiry: !!this.props.details.docExpiry ? this.props.details.docExpiry : null,
      birthdate: !!this.props.details.birthdate ? this.props.details.birthdate : null,
    };


    return (
      <React.Fragment>
        <h6 className="pl-2 text-primary">{this.headerMessage(this.props.currentStep, this.props.totalSteps)}</h6>
        <MDBProgress className="progressBar" material value={this.progress(this.props.currentStep, this.props.totalSteps)} color="primary" />
        <Formik 
            render={props => <PassengerDetailsInput {...props} currentStep={this.props.currentStep} totalSteps={this.props.totalSteps}  previousStep = {this.props.previousStep}/>}
            initialValues={values}
            validationSchema={validationSchema}
            formIndex = {this.props.formIndex}
            onSubmit={this.submit}
          />
      </React.Fragment>
    );
  }
}

  const mapDispatchToProps = dispatch => {
    return {
      submitPassenger: (passenger, formIndex) => dispatch(submitPassenger (passenger, formIndex))
    };
  }

  export default connect(
    null,
    mapDispatchToProps
)(PassengerForm);