import React, { Component } from "react";
import { Formik } from "formik";
import  PassengerDetailsInput from "./PassengerDetailsInput";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { savePassengerDetails } from '../../store/actions/passengers';

class PassengerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false
    };
  }

  

  getDateLimit = (paxType) => {
    if (paxType === 'Adult'){
      return false;
    } else if (paxType === 'Child'){
      return false;
    } else {
      return false;
    }
  }

  //Submit function for an individual form
  submit = data => {
      console.log(data);
      this.props.nextStep(this.props.currentStep, this.props.totalSteps)
      this.props.savePassengerDetails(data, this.props.formIndex);
  };

  render() {

    const { formIndex, adultNumber, childrenNumber, infantNumber, departDate } = this.props;

    /**Returns the type of passenger for the form header based on the form Index */
  const getPaxType = (formIndex) => {
    const paxString = 'Adult '.repeat(adultNumber) + 'Child '.repeat(childrenNumber) + 'Infant '.repeat(infantNumber);
    const paxList = paxString.split(" ");
    console.log('paxType ', paxList[formIndex]);
    return `${paxList[formIndex]}`;
  }

  /**Returns the header for the passenger form eg Adult 2 or Infant 1 */
  const paxHeader = (formIndex) => {
      const paxType = getPaxType(formIndex);
      if (paxType === 'Adult'){
          const paxNumber = formIndex+1;
          return `${paxType} ${paxNumber}`;
      } else if (paxType === 'Child'){
          const paxNumber = formIndex + 1 - adultNumber;
          return `${paxType} ${paxNumber}`;
      } else if (paxType === 'Infant'){
          const paxNumber = formIndex + 1 - adultNumber  - childrenNumber;
          return `${paxType} ${paxNumber}`;
      }
      
  }

  const getMaxDateLimit = (paxType) => {
    /**
     * 1yr = 31540000 sec
     * 1 month = 2628000 sec
     * 1 day = 86400 sec
     * adult - min 12yrs
     * child - 12yrs max - 2 yrs min
     * infant - max of 2 yrs
     * date.min(limit: Date | string | Ref, message?: string | function): Schema
     * date.max(limit: Date | string | Ref, message?: string | function): Schema
     */

    const departDateInSeconds = (Date.parse(departDate))/1000; // departdate in seconds
    if (paxType === 'Adult'){
      const maxDateinSec = 31540000*120;
      const maxDate = new Date((departDateInSeconds - maxDateinSec)*1000);
      return maxDate;
    } else if (paxType === 'Child') {
      const maxDateinSec = 31540000*12 - 86400;
      const maxDate = new Date((departDateInSeconds - maxDateinSec)*1000);
      return maxDate;
    } else {
      const maxDateinSec = 31540000*2 - 86400;
      const maxDate = new Date((departDateInSeconds - maxDateinSec)*1000);
      return maxDate;
    }
  }

  const getMinDateLimit = (paxType) => {
    /**
     * 1yr = 31540000 sec
     * 1 month = 2628000 sec
     * 1 day = 86400 sec
     * adult - min 12yrs
     * child - 12yrs max - 2 yrs min
     * infant - max of 2 yrs
     * date.min(limit: Date | string | Ref, message?: string | function): Schema
     * date.max(limit: Date | string | Ref, message?: string | function): Schema
     */

    const departDateInSeconds = (Date.parse(departDate))/1000; // departdate in seconds
    if (paxType === 'Adult'){
      const minDateinSec = 31540000*12 + 4*86400;
      const minDate = new Date((departDateInSeconds - minDateinSec)*1000);
      console.log('minDate ', minDate);
      return minDate;
    } else if (paxType === 'Child'){
      const minDateinSec = 31540000*2;
      const minDate = new Date((departDateInSeconds - minDateinSec)*1000);
      return minDate;
    }
    else {
      const minDateinSec = 86400*10;
      const minDate = new Date((departDateInSeconds - minDateinSec)*1000);
      return minDate;
    }
  }
 
    
    const validationSchema = Yup.object({
      title: Yup.string("Select a title").required("Title is required"),
      firstname: Yup.string("Enter firstname").required("Firstname is required"),
      lastname: Yup.string("Enter lastname").required("Lastname is required"),
      nationality: Yup.string("Enter nationality").required("Nationality is required"),
      docnumber: Yup.string("Enter passport or ID number").required("Passport or ID number is required"),
      docexpiry: Yup.date("Enter document expiration date").typeError('You must specify a date'),
      birthdate: Yup.date("Select a date")
      .required("Birthdate is required")
      .typeError('You must specify a date')
      .min(getMaxDateLimit(getPaxType(formIndex)), `${getPaxType(formIndex)} too old for birthdate`)
      .max(getMinDateLimit(getPaxType(formIndex)), `${getPaxType(formIndex)} too young`),
    });
    const values = { 
      title: !!this.props.details.title ?  this.props.details.title : "Mr",
      firstname: !!this.props.details.firstname ? this.props.details.firstname : "",
      lastname: !!this.props.details.lastname ? this.props.details.lastname : "",
      nationality: !!this.props.details.nationality ? this.props.details.nationality : "KE",
      docnumber: !!this.props.details.docnumber ? this.props.details.docnumber : "",
      docexpiry: !!this.props.details.docexpiry ? this.props.details.docexpiry : null,
      birthdate: !!this.props.details.birthdate ? this.props.details.birthdate : null,
    };

      return (
            <React.Fragment>
              <Formik
                  render={props => 
                    <PassengerDetailsInput 
                      {...props} 
                      formIndex = {formIndex}
                      paxDetail = {paxHeader(formIndex)}
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

  const mapStateToProps = state => {
    const { 
        querry: { adultNumber, childrenNumber, infantNumber, departDate },
    } = state;
    return { adultNumber, childrenNumber, infantNumber, departDate }
  }

  const mapDispatchToProps = dispatch => {
    return {
      savePassengerDetails: (passenger, formIndex) => dispatch(savePassengerDetails (passenger, formIndex))
    };
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PassengerForm);