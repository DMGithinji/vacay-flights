import React from 'react';
import PassengerForm from './PassengerForm';
import { connect } from 'react-redux';
import { savePassengerDetails, sendPassengerData } from '../../store/actions/passengers';
import ContactForm from './ContactForm';
import { withRouter } from 'react-router-dom';
import { formatDateYyyyMmDd } from '../../Shared/utils/dateTimeFormatter';
import { Row,  Col, } from 'react-bootstrap';

const defaultFormValues = { 
    title: "Mr.",
    firstname: "", 
    lastname: "", 
    nationality: "KE", 
    docnumber: "", 
    docexpiry: null, 
    birthdate: null, 
};

class FormsWizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passengersDetails: [],
            currentStep: 1,
            currentSection: 1,
            isValid: false, //determines validity of passenger info to enable movement to next page
        };      
    }

    componentDidMount(){
        //Set default values for passenger forms based on no. of passengers
        const { adultNumber, childrenNumber, infantNumber } = this.props;
        const passengersDetails = this.props.passengersDetails;
        const passengerNumbers = parseInt(adultNumber) +  parseInt(childrenNumber) + parseInt(infantNumber);
        
        //If app state has no passenger forms created/saved, create based on pax_no
        if (passengersDetails.length === 0) {
            for (let i = 0; i < passengerNumbers; i++){
                this.props.savePassengerDetails(defaultFormValues, i);
            }
        }
        this.setState({ passengersDetails: this.props.passengersDetails });

        const totalSteps = this.props.passengersDetails.length + 1;
        this.setState({ totalSteps: totalSteps });
    }

    handleSubmit = () => {
        this.props.history.push('/booking-payment'); //Start redirect to payments page
        const contactDetails = this.props.contactDetails;
        const passengersDetails = this.props.passengersDetails;
        passengersDetails.map(form => {
            form.birthdate = formatDateYyyyMmDd(form.birthdate);
            form.docexpiry = formatDateYyyyMmDd(form.docexpiry);
            return form;
        })
        const passengerData = {
            contact: {
                "confirmation": contactDetails.email,
                "phone": contactDetails.phone,
                "name": `${contactDetails.firstname} ${contactDetails.lastname}`
            },
            passengers:  this.props.passengersDetails
        }
        this.props.sendPassengerData(passengerData, this.props.sessionId);
    }

    /*
    * the functions for our button
    */
    previousButton =() => {
        this.setState({ currentSection: 1 })
    }

    nextStep = () => {
        let currentStep = this.state.currentStep;
        const totalSteps = this.state.totalSteps;
        currentStep = currentStep >= totalSteps  ? totalSteps : currentStep + 1
        this.setState({ currentStep: currentStep })
        if (currentStep === totalSteps){
            this.setState({ isValid: true })
        }
    }

    //Function to go to the next section ie contact section
    toContact = () => {
        if (true){ //check if all forms submitted
            this.setState({ currentSection: 2 })
        }
    }

    render() {
        if (this.state.currentSection === 1) {
            return (
                <React.Fragment>
                    {
                        this.props.passengersDetails.map((passenger, i) => {
                            return <PassengerForm 
                                key = {i} 
                                details = {passenger} 
                                currentStep={this.state.currentStep}
                                totalSteps={this.state.totalSteps}
                                previousStep={this.previousButton}
                                nextStep={this.nextStep}
                                currentSection={this.state.currentSection}
                                toContact = {this.toContact}
                                formIndex = {i} />
                        })
                    }
                    <Row className="mt-3">
                            <Col md={6} className = "passenger-input-field">
                                {
                                    <button
                                        type="button"
                                        fullWidth
                                        className = "btn btn-default btn-previous  w-100"
                                        >
                                        Previous Section
                                    </button>
                                }                                                    
                            </Col>
                            <Col md={6} className = "passenger-input-field">
                            {
                                <button
                                    type="button"
                                    fullWidth
                                    disabled={!this.state.isValid}
                                    className = "btn btn-outline-primary btn-previous  w-100"
                                    onClick = {this.toContact}
                                    >
                                    Next
                                </button>
                            }
                            </Col>
                        </Row>
                </React.Fragment>
        )} else{
            return (
                <ContactForm 
                    currentStep={this.state.currentStep}
                    totalSteps={this.state.totalSteps}
                    previousStep={this.previousButton}
                    currentSection = {this.state.currentSection}
                    handleSubmit={this.handleSubmit}
                />
            );
        }
    }
}


const mapStateToProps = state => {
    const { 
        querry: { adultNumber, childrenNumber, infantNumber, sessionId },
        passengers: { passengersDetails, contactDetails }
    } = state;
    return { adultNumber, childrenNumber, infantNumber, sessionId, passengersDetails, contactDetails }
}

const mapDispatchToProps = dispatch => {
    return {
        savePassengerDetails: (passenger, formIndex) => dispatch(savePassengerDetails (passenger, formIndex)),
        sendPassengerData: (passengerData, sessionId) => dispatch(sendPassengerData (passengerData, sessionId))
        };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FormsWizard));