import React from 'react';
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
            passengersDetails: [],
            currentStep: 1,
            totalSteps: 2,
        };      
    }

    componentDidMount(){
        //Set default values for passenger forms based on no. of passengers
        const { adultNumber, childrenNumber, infantNumber } = this.props;
        const passengerNumbers = parseInt(adultNumber) +  parseInt(childrenNumber) + parseInt(infantNumber);

        for (let i = 0; i < passengerNumbers; i++){
            this.props.submitPassenger(defaultFormValues, i);
        }
        this.setState({ passengersDetails: this.props.passengerForms });
        const totalSteps = this.props.passengerForms.length + 1;
        this.setState({ totalSteps: totalSteps });
    }

    handleSubmit = data => {
        alert(`Your registration detail: \n 
        ${data}`)
    }

    /*
    * the functions for our button
    */
    previousButton =() => {

        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    nextStep = () => {
        let currentStep = this.state.currentStep;
        const totalSteps = this.state.totalSteps;
        currentStep = currentStep >= totalSteps  ? totalSteps : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    render() {



        return (
                
                <React.Fragment>
                    {
                        this.props.passengerForms.map((passenger, i) => {
                            return <PassengerForm 
                                key = {i} 
                                details = {passenger} 
                                currentStep={this.state.currentStep}
                                totalSteps={this.state.totalSteps}
                                previousStep={this.previousButton}
                                nextStep={this.nextStep}
                                id = {i} />
                        })
                    }
                    <ContactForm 
                        currentStep={this.state.currentStep}
                        totalSteps={this.state.totalSteps}
                        previousStep={this.previousButton}
                        handleSubmit={this.handleSubmit}
                    />
                </React.Fragment>        
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