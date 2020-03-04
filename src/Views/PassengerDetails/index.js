import React, { Component } from "react";
import { Formik } from "formik";
import { Form } from "./passengerDetailsForm";
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

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = data => {
    console.log(data);
  };

  render() {
    const values = { 
      title: "Mr.",
      firstName: "", 
      lastName: "", 
      nationality: "KE", 
      docNumber: "", 
      docExpiry: null, 
      birthdate: null, 
    };
    return (
      <React.Fragment>
        <div  className='content-wrapper'>
            <div className="row">
              <div className = "col-md-8">
                  <div className="card shadow-none">
                    <div className="card-header">
                          <h5 className="mb-2">Billing information</h5>
                          <p className="text-muted card-header-detail">Fill the form below in order to send you the order's invoice.</p>
                      </div>
                    <div className="card-header">
                        <h5 className="mb-2">Indicator for form wizard</h5>
                    </div>            
                    <Formik 
                        render={props => <Form {...props} />}
                        initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={this.submit}
                      />
                </div>
              </div>
              <div className = "col-md-4">

              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InputForm;
