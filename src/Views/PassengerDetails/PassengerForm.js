import React, { Component } from "react";
import { Formik } from "formik";
import  PassengerDetailsInput from "./PassengerDetailsInput";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { savePassengerDetails } from '../../store/actions/passengers';


const validationSchema = Yup.object({
  title: Yup.string("Select a title").required("Title is required"),
  firstname: Yup.string("Enter firstname").required("Firstname is required"),
  lastname: Yup.string("Enter lastname").required("Lastname is required"),
  nationality: Yup.string("Enter nationality").required("Nationality is required"),
  docnumber: Yup.string("Enter passport or ID number").required("Passport or ID number is required"),
  docexpiry: Yup.date("Enter document expiration date").required("Document expiry date is required").typeError('You must specify a date'),
  birthdate: Yup.date("Select a title").required("Birthdate is required").typeError('You must specify a date'),
});

class PassengerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = data => {
      console.log(data);
      this.props.savePassengerDetails(data, this.props.id);
      this.props.nextStep(this.props.currentStep, this.props.totalSteps)
  };

  progress = (currentStep, totalSteps) => {
    return (currentStep/totalSteps)*100;
  }

  render() {

    const values = { 
      title: !!this.props.details.title ?  this.props.details.title : "Mr",
      firstname: !!this.props.details.firstname ? this.props.details.firstname : "",
      lastname: !!this.props.details.lastname ? this.props.details.lastname : "",
      nationality: !!this.props.details.nationality ? this.props.details.nationality : "KE",
      docnumber: !!this.props.details.docnumber ? this.props.details.docnumber : "",
      docexpiry: !!this.props.details.docexpiry ? this.props.details.docexpiry : null,
      birthdate: !!this.props.details.birthdate ? this.props.details.birthdate : null,
    };

    console.log('Props ',this.props.formIndex)
    return (
      
      <React.Fragment>
        <Formik
            render={props => 
              <PassengerDetailsInput 
                {...props} 
                formIndex = {this.props.formIndex}
                currentStep={this.props.currentStep} 
                totalSteps={this.props.totalSteps}  
                previousStep = {this.props.previousStep}/>}
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={this.submit}
            />
      </React.Fragment>
    );
  }
}

  const mapDispatchToProps = dispatch => {
    return {
      savePassengerDetails: (passenger, formIndex) => dispatch(savePassengerDetails (passenger, formIndex))
    };
  }

  export default connect(
    null,
    mapDispatchToProps
)(PassengerForm);