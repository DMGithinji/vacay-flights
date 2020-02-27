import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDestinationOptions } from '../../../store/actions/destinations';
import {
    setOrigin,
    setDestination,
    setDepartDate,
    setReturnDate,
    setAdultNumber,
    setChildrenNumber,
    setInfantNumber,
    setFlightClass,
    setFlightType,
    setQuerry 
} from '../../../store/actions/querryState';

import DatePicker from "react-datepicker";
import PaxNumber from './PaxNumber';
import OptionSelect from './OptionSelect';


class Search extends Component {
    state = {
            origin: { value: this.props.origin },
            destination: { value: this.props.destination },
            departDate: { value: this.props.departDate },
            returnDate: { value: this.props.returnDate },
            adultNumber: {
                value: this.props.adultNumber,
            },
            childrenNumber: {
                value: this.props.childrenNumber,
            },
            infantNumber: {
                value: this.props.infantNumber,
            },
            flightClass: {
                value: this.props.flightClass,
                options: [
                    { value: 'Economy', displayValue: 'Economy' },
                    { value: 'Business', displayValue: 'Business'}
                ]
            },
            flightType: {
                value: this.props.flightType,
                options: [
                    { value: 'Return', displayValue: 'Return' },
                    { value: 'One-way', displayValue: 'One-Way'}
                ]
            },
    };

    componentDidMount(){
        this.props.getDestinationOptions();
    }

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.updateStore(name, value);

    };

    updateStore = (fieldName, value) => {
        switch(fieldName) {
            case 'origin':
                this.setState({ origin: { value } });
                this.props.setOrigin(value);
                return;
            case 'destination':
                this.setState({ destination: {value} });
                this.props.setDestination(value);
                return;
            case 'adultNumber':
                this.setState({ adultNumber: {value} });
                this.props.setAdultNumber(value);
                return;
            case 'childrenNumber':
                this.setState({ childrenNumber: {value} });
                this.props.setChildrenNumber(value);
                return;
            case 'infantNumber':
                this.setState({ infantNumber: {value} });
                this.props.setInfantNumber(value);
                return;
            case 'flightType':
                this.setState({
                        flightType: {
                        ...this.state.flightType,
                        value
                        }
                });
                this.props.setFlightType(value);
                return;
            case 'flightClass':
                this.setState({
                        flightClass: {
                        ...this.state.flightClass,
                        value
                        }
                });
                this.props.setFlightClass(value);
                return;
            default:
                return;
        }
    }

    handleDepartDateChange = value => {
        this.setState({ departDate: { value } });
        this.props.setDepartDate(value);
    };

    handleReturnDateChange = value => {
        this.setState({ returnDate: { value } });
        this.props.setReturnDate(value);
    };

    formSubmitHandler = (e) => {
        e.preventDefault();
        const querry = this.state;
        console.log('querry ', querry);
        setQuerry(querry); //dispatch the SEARCH action creator
    }


    render(){

        const form = this.state;
        return (
            <div>
                <div className="searchCard">
                    <div className = "searchContent">
                        <div className = "dropdownSearchContent mb-3">
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
                            <PaxNumber handleChange={this.handleChange} />
                        </div>
                        <form>
                            <div className="row"> 
                                <div className="col-md-5 col-sm-12 p-0 pr-4">
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
                                <div className="col-md-5 col-sm-12 p-0 pr-5">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 d-flex flex-column">
                                            <label htmlFor="Destination">Departue Date</label>      
                                            <DatePicker
                                                className="form-control"
                                                name="departDate"
                                                selected={form.departDate.value}
                                                placeholderText="dd/mm/yyyy"
                                                onChange={this.handleDepartDateChange} 
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
                                <div className="col-md-2 col-sm-12 search-btn p-0">
                                <button className="btn btn-md" onClick={(e) => {this.formSubmitHandler(e)}}>Modify Search</button>                                
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { querry: { origin, destination, departDate, returnDate, flightType, flightClass  } } = state;
    return { origin, destination, departDate, returnDate, flightType, flightClass   }
};

const mapDispatchToProps = dispatch => {
    return {
        getDestinationOptions: () => dispatch(getDestinationOptions()), //To get origin/destination options

        setOrigin: origin =>  dispatch(setOrigin(origin)),
        setDestination: destination => dispatch(setDestination(destination)),
        setDepartDate: departDate => dispatch(setDepartDate(departDate)),
        setReturnDate: returnDate => dispatch(setReturnDate(returnDate)),
        setAdultNumber: adultNumber => dispatch(setAdultNumber(adultNumber)),
        setChildrenNumber: childrenNumber => dispatch(setChildrenNumber(childrenNumber)),
        setInfantNumber: infantNumber => dispatch(setInfantNumber(infantNumber)),
        setFlightType: flightType => dispatch(setFlightType(flightType)),
        setFlightClass: flightClass => dispatch(setFlightClass(flightClass)),

        setQuerry: querry => () => dispatch(setQuerry(querry)), //To initiate search for flights
        };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);