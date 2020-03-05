import React from 'react';
import StepWizard from 'react-step-wizard';

import Aux from "../../hoc/_Aux";
import PassengerForm from './PassengerForm';
import { connect } from 'react-redux';
import { submitPassenger } from '../../store/actions/passengers';
import ContactForm from './ContactForm';

const defaultFormValues = { 
    title: "Mr.",
    firstName: "", 
    lastName: "", 
    nationality: "KE", 
    docNumber: "", 
    docExpiry: null, 
    birthdate: null, 
};

class FormsWizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passengersFormComponents: [],
        };      
    }



    render() {

        const { adultNumber, childrenNumber, infantNumber } = this.props;
        const passengerNumbers = parseInt(adultNumber) +  parseInt(childrenNumber) + parseInt(infantNumber);

        for (let i = 0; i < passengerNumbers; i++){
            this.props.submitPassenger(defaultFormValues, i);
        }

        return (
            <Aux>
                
                <StepWizard>
                    {
                        this.props.passengerForms.map((passengerForm, index) => (
                            <PassengerForm key = {index} formIndex = {index} details = { passengerForm } />
                        ))
                    }
                    <ContactForm />
                </StepWizard>
            </Aux>
        );
    }
}


const mapStateToProps = state => {
    const { 
        querry: { adultNumber, childrenNumber, infantNumber },
        passengers: { passengerForms }
    } = state;
    return { adultNumber, childrenNumber, infantNumber, passengerForms }
}

const mapDispatchToProps = dispatch => {
    return {
            submitPassenger: (passenger, formIndex) => dispatch(submitPassenger (passenger, formIndex))
        };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormsWizard);