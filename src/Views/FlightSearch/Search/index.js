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
import places from '../../../Shared/utils/places';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.updateStore(name, value);
        console.log('value', value);
    };

    handleOriginSelect = (event, newValue) => {
        let selected = {
            target: { name: 'origin', value: newValue.code },
        }
        console.log(selected);
        this.handleChange(selected);
    }

    handleDestinationSelect = (event, newValue) => {
        let selected = {
            target: { name: 'destination', value: newValue.code },
        }
        console.log(selected);
        this.handleChange(selected);
    }
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
        const placeOptions = places.aerocrs.destinations.destination;

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
                        <form className="mt-4">
                            <div className="row"> 
                                <div className="col-md-5 col-sm-12 p-0 pr-4">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <Autocomplete
                                                id="origin-select"
                                                onChange={this.handleOriginSelect}
                                                options={placeOptions}
                                                autoHighlight
                                                getOptionLabel={option => option.name}
                                                renderOption={option => (
                                                    <React.Fragment>
                                                    {option.name} ({option.country}) +{option.countryiso}
                                                    </React.Fragment>
                                                )}
                                                renderInput={params => (
                                                    <TextField
                                                    {...params}
                                                    label="Origin"
                                                    variant="outlined"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <Autocomplete
                                                id="destination-select"
                                                onChange={this.handleDestinationSelect}
                                                options={placeOptions}
                                                autoHighlight
                                                getOptionLabel={option => option.name}
                                                renderOption={option => (
                                                    <React.Fragment>
                                                    {option.name} ({option.country}) +{option.countryiso}
                                                    </React.Fragment>
                                                )}
                                                renderInput={params => (
                                                    <TextField
                                                    {...params}
                                                    label="Destination"
                                                    variant="outlined"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12 p-0 pr-5">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 d-flex flex-column">
                                            <MuiPickersUtilsProvider utils={DateFnsUtils} className="searchDate">
                                                <KeyboardDatePicker
                                                    inputVariant="outlined"
                                                    label="Departure date"
                                                    id="date-picker-dialog"
                                                    format="dd/MM/yyyy"
                                                    value={form.departDate.value}
                                                    onChange={this.handleDepartDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                        <div className="col-md-6 col-sm-12  d-flex flex-column">
                                            <MuiPickersUtilsProvider utils={DateFnsUtils} className="searchDate">
                                                <KeyboardDatePicker
                                                    inputVariant="outlined"
                                                    label="Return date"
                                                    id="date-picker-dialog"
                                                    format="dd/MM/yyyy"
                                                    value={form.returnDate.value}
                                                    placeholder = "dd/mm/yyyy"
                                                    onChange={this.handleReturnDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>                                   
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-12 search-btn p-0">
                                <button className="btn p-2" onClick={(e) => {this.formSubmitHandler(e)}}>Modify Search</button>                                
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