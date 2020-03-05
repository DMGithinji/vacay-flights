import React, { Component } from "react";
import { Formik } from "formik";
import { PassengerDetailsInput } from "./passengerDetailsInput";
import * as Yup from "yup";



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
  };

  render() {

    const values = { 
      title: this.props.details.title,
      firstName:  this.props.details.firstName,
      lastName:  this.props.details.lastName,
      nationality: this.props.details.nationality,
      docNumber:  this.props.details.docNumber,
      docExpiry:  this.props.details.docExpiry,
      birthdate:  this.props.details.birthdate,
    };

    console.log(`Key - ${this.props.componentId}`)
    return (
      <React.Fragment>

        <Formik 
            render={props => <PassengerDetailsInput {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={this.submit}
          />

      </React.Fragment>
    );
  }
}

export default PassengerForm;
