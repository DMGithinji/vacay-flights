import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import Loki from 'react-loki';

import Aux from "../../hoc/_Aux";
import PassengerForm from './PassengerForm';
import { connect } from 'react-redux';


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
            passengersFormData: [],
            isFinished: false
        };      
    }

    customRenderer = ({ currentStep, stepIndex, cantBack, isInFinalStep, backHandler, nextHandler }) => {
        let i = 0;
        const steps = this.state.passengersFormComponents.map((step, index) => {
            const isActive = currentStep === index + 1;
            let itemLinkClass = ['nav-item mb-10'];
            if (isActive) {
                itemLinkClass = [...itemLinkClass, 'active'];
                i=1;
            } else if (i === 0 || this.state.isFinished) {
                itemLinkClass = [...itemLinkClass, 'done'];
            }

            return (
                <li key={index} className={itemLinkClass.join(' ')}>
                        <h6 className="mr-5">{step.label}</h6>
                </li>
            );
        });

        return <ul className="nav nav-tabs step-anchor">{steps}</ul>;
    };

    customActions = ({ currentStep, stepIndex, cantBack, isInFinalStep, backHandler, nextHandler }) => {
        return (
            <div className="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-between m-4">
                    <Button variant="secondary" className="mr-auto" onClick={backHandler} disabled={cantBack}>Previous</Button>
                    <Button variant="primary" className="ml-auto"  onClick={nextHandler} disabled={this.state.isFinished && isInFinalStep}>{isInFinalStep ? 'Finish' : 'Next'}</Button>
            </div>
        );
    };

    customComponents = ({currentStep}) => {
        return this.state.passengersFormComponents.map((step, index) => {
            if (currentStep === index + 1) {
                return <div key={index}>{step.component}</div>
            }
            return false;
        });
    };

    onFinish = () => {
        this.setState({isFinished: true});
    };

    render() {

        const { adultNumber, childrenNumber, infantNumber } = this.props;

        const passengerNumbers = parseInt(adultNumber) +  parseInt(childrenNumber) + parseInt(infantNumber);
        console.log("Passenger Number", passengerNumbers);

        for (let i = 0; i < passengerNumbers; i++){

            this.state.passengersFormData.push(defaultFormValues);
            let component = {
                label: `Passenger ${i+1}`,
                component: <PassengerForm componentId = {i} details = { this.state.passengersFormData[i]} />
            }
            this.state.passengersFormComponents.push(component);

        }

        console.log("Passengers' Components", this.state.passengersFormComponents);
        console.log("Passengers' Forms", this.state.passengersFormData);


        return (
            <Aux>
                <Row>
                    <Col>
                        <div className='sw-main sw-theme-default'>
                            <Loki steps={ this.state.passengersFormComponents } currentStep={2} renderComponents={this.customComponents} renderSteps={this.customRenderer} renderActions={this.customActions} onFinish={this.onFinish} />
                        </div>
                    </Col>
                </Row>
            </Aux>
        );
    }
}


const mapStateToProps = state => {
    const { 
        querry: { adultNumber, childrenNumber, infantNumber }
    } = state;
    return { adultNumber, childrenNumber, infantNumber }
}


export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(FormsWizard);