import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDestinationOptions } from '../../../store/actions/destinations';
import { setQuery } from '../../../store/actions/querryState';
import places from '../../../Shared/utils/places';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import PaxNumber from './PaxNumber';
import OptionSelect from './OptionSelect';
import { Link } from 'react-router-dom';


class Search extends Component {
    state = {
            origin: { value: this.props.origin },
            destination: { value: this.props.destination },
            departDate: { value: this.props.departDate },
            returnDate: { value: this.props.returnDate },
            adultNumber: { value: this.props.adultNumber },
            childrenNumber: { value: this.props.childrenNumber },
            infantNumber: { value: this.props.infantNumber },
            flightClass: {
                value: 'Any',
                options: [
                    { value: "Any", displayValue: 'Any' },
                    { value: 'Economy', displayValue: 'Economy' },
                    { value: 'Business', displayValue: 'Business'}
                ]
            },
            flightType: {
                value: this.props.flightType,
                options: [
                    { value: "Any", displayValue: 'Any' },
                    { value: 'RT', displayValue: 'Return' },
                    { value: 'OW', displayValue: 'One-Way'}
                ]
            },
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.updateState(name, value);
        console.log('event',event);
        console.log('state', this.state);
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
    updateState = (fieldName, value) => {
        switch(fieldName) {
            case 'origin':
                this.setState({ origin: { value } });
                return;
            case 'destination':
                this.setState({ destination: { value } });
                return;
            case 'departDate':
                this.setState({ departDate: { value } });
                return;
            case 'returnDate':
                this.setState({ returnDate: { value } });
                return;
            case 'adultNumber':
                this.setState({ adultNumber: { value } });
                return;
            case 'childrenNumber':
                this.setState({ childrenNumber: { value } });
                return;
            case 'infantNumber':
                this.setState({ infantNumber: { value } });
                return;
            case 'flightType':
                this.setState({
                        flightType: {
                        ...this.state.flightType,
                        value
                        }
                });
                return;
            case 'flightClass':
                this.setState({
                        flightClass: {
                        ...this.state.flightClass,
                        value
                        }
                });
                return;
            default:
                return;
        }
    }

    handleDepartDateChange = value => {
        this.updateState( 'departDate', value);
    };

    handleReturnDateChange = value => {
        this.updateState( 'returnDate', value);
    };

    formSubmitHandler = () => {
        const querry = this.state;
        console.log('querry ', querry);
        this.props.setQuery(querry); //dispatch the SEARCH action creator
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
                                        value={this.props.flightType}
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
                            <PaxNumber handleChange={this.handleChange} adultNumber={form.adultNumber} childrenNumber = {form.childrenNumber} infantNumber = {form.infantNumber} />
                        </div>
                        <div className="mt-4">
                            <div className="row"> 
                                <div className="col-md-5 col-sm-12 p-0 pr-4">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 pb-3 pr-2">
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
                                        <div className="col-md-6 col-sm-12 pb-3 ">
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
                                        
                                        <div className="col-md-6 col-sm-12 pb-3 d-flex flex-column">
                                            <MuiPickersUtilsProvider utils={DateFnsUtils} className="searchDate">
                                                <KeyboardDatePicker
                                                    inputVariant="outlined"
                                                    label="Departure date"
                                                    id="date-picker-dialog"
                                                    format="dd/MM/yyyy"
                                                    value={this.props.departDate}
                                                    onChange={this.handleDepartDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                        <div className="col-md-6 col-sm-12 pb-3   d-flex flex-column">
                                            <MuiPickersUtilsProvider utils={DateFnsUtils} className="searchDate">
                                                <KeyboardDatePicker
                                                    inputVariant="outlined"
                                                    label="Return date"
                                                    id="date-picker-dialog"
                                                    format="dd/MM/yyyy"
                                                    value={this.props.returnDate}
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
                                    <Link to={`/new-search`}>
                                        <span className="btn p-2" onClick={ this.formSubmitHandler}> Modify Search </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { querry: { origin, destination, departDate, returnDate, flightType, flightClass, adultNumber, childrenNumber, infantNumber  } } = state;
    return { origin, destination, departDate, returnDate, flightType, flightClass, adultNumber, childrenNumber, infantNumber   }
};

const mapDispatchToProps = dispatch => {
    return {
        getDestinationOptions: () => dispatch(getDestinationOptions()), //To get origin/destination options
        setQuery: querry => dispatch(setQuery(querry)), //To initiate search for flights
        };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);