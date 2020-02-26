import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDestinationOptions } from '../../../store/actions/destinations';

import DatePicker from "react-datepicker";
import PaxNumber from './PaxNumber';
import validate from '../../../Shared/utils/formValidator';
import OptionSelect from './OptionSelect';


class Search extends Component {

    state = {
        formControls: {
            formIsValid: false, //to track the overall form validity
            origin: {
                value: '',
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            destination: {
                value: '',
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            departDate: {
                value: new Date(),
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true
                }
            },
            returnDate: {
                value: new Date(),
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: false
                }            },
            flightClass: {
                value: 'Economy',
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true,
                },
                options: [
                    { value: 'Economy', displayValue: 'Economy' },
                    { value: 'Business', displayValue: 'Business'}
                ]
            },
            flightType: {
                value: 'Return',
                placeholder: 'One way or Return',
                valid: false,
                touched: false,
                validationRules: {
                    isRequired: true,
                },
                options: [
                    { value: 'Return', displayValue: 'Return' },
                    { value: 'One-way', displayValue: 'One-Way'}
                ]
            },
            passengers: [
                { type: 'Adults', count: 1 },
                { type: 'Children', count: 0},
                { type: 'Infants', count: 0}
            ]
        },
    };

    componentDidMount(){
        this.props.getDestinationOptions();
    }
        
    handleChange = event => {

        console.log('event', event)
        const value = event.target.value;
        const name = event.target.name;

        const updatedControls = {
            ...this.state.formControls
            };
        const updatedFormElement = {
            ...updatedControls[name]
            };

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
    
        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });
    };

    handleDateChange = event => {
        let value;
        value = event;
        
        this.setState({
            formControls: {
                ...this.state.formControls,
                departDate: {
                ...this.state.formControls.departDate,
                value
                }
            }
        });
    };

    handleReturnDateChange = event => {
        const value = event;
        
        this.setState({
            formControls: {
                ...this.state.formControls,
                returnDate: {
                ...this.state.formControls.returnDate,
                value
                }
            }
        });
    };

    formSubmitHandler = () => {
        console.log(this.state.formControls);
    }

    render(){

        const form = this.state.formControls;

        return (
            <div>
                <div className="searchCard">
                    <div className = "searchContent">
                        <div className = "dropdownSearchContent">
                            <OptionSelect className="option-select-form"
                                        name="flightType"
                                        placeholder={form.flightType.placeholder}
                                        value={form.flightType.value}
                                        options={form.flightType.options}
                                        handleSelect={this.handleChange}
                                        />
                            <OptionSelect className="mr-5"
                                        name="flightClass"
                                        placeholder={form.flightClass.placeholder}
                                        value={form.flightClass.value}
                                        options={form.flightClass.options}
                                        handleSelect={this.handleChange}
                                        />
                            <PaxNumber passengers={form.passengers}/>
                        </div>
                        <form>
                            <div className="row"> 
                                <div className="col-md-5 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <label htmlFor="Origin">Origin</label>
                                            <input 
                                                type="text"
                                                name="origin"
                                                value={form.origin.value}
                                                onChange={this.handleChange} 
                                                className="form-control" 
                                                placeholder="Place of origin" />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <label htmlFor="Destination">Destination</label>      
                                            <input 
                                                type="text"
                                                name="destination"
                                                value={form.destination.value}
                                                onChange={this.handleChange} 
                                                className="form-control" 
                                                placeholder="Destination" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 d-flex flex-column">
                                            <label htmlFor="Destination">Departue Date</label>      
                                            <DatePicker
                                                className="form-control"
                                                name="departDate"
                                                selected={form.departDate.value}
                                                placeholderText="dd/mm/yyyy"
                                                onChange={this.handleDateChange} 
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-12  d-flex flex-column">
                                            <label htmlFor="Destination">Return Date</label>      
                                            <DatePicker
                                                name="returnDate"
                                                selected={form.returnDate.value}
                                                className="form-control w-100"
                                                placeholderText="dd/mm/yyyy"
                                                onChange={this.handleReturnDateChange} 
                                            />                                    
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-12 search-btn">
                                <button onClick={this.formSubmitHandler}>Submit</button>                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        getDestinationOptions: () => dispatch(getDestinationOptions())
        };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);