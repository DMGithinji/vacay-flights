import React from "react";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PaxNumber from './PaxNumber';
import OptionSelect from './OptionSelect';

import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';

import places from '../../../Shared/utils/places';




export const SearchForm = (props) => {

    const {
        values: { origin, destination, departDate, returnDate },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;
        
        
    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
        };

    const placeOptions = places.aerocrs.destinations.destination;


    return (
        <form onSubmit={handleSubmit} className="search-form">

            <div className="search-grid-container">

                <div className="grid-item">
                    <Autocomplete
                        id="origin-select"
                        // onChange={this.handleOriginSelect}
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
                                name="origin"
                                label="Origin"
                                variant="outlined"
                                fullWidth
                                value={origin}
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}
                    />
                    <div>{Boolean(errors.origin) ? errors.origin : ""}</div>
                </div>

                <div className="grid-item">
                <Autocomplete
                        id="destination-select"
                        // onChange={this.handleDestinationSelect}
                        options={placeOptions}
                        // autoHighlight
                        getOptionLabel={option => option.name}
                        renderOption={option => (
                            <React.Fragment>
                                {option.name} ({option.country}) +{option.countryiso}
                            </React.Fragment>
                        )}
                        renderInput={params => (
                            <TextField
                                {...params}
                                name="destination"
                                label="Destination"
                                variant="outlined"
                                fullWidth
                                value={destination}
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}
                    />
                    <div>{Boolean(errors.destination) ? errors.destination : ""}</div>
                </div>

            <div className="grid-item">
                <MuiPickersUtilsProvider utils={DateFnsUtils} className="searchDate">
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Departure date"
                        id="date-picker-dialog"
                        name="departTime"
                        // format="dd/MM/yyyy"
                        fullWidth
                        value={departDate}
                        // onChange={this.handleDepartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <div>{errors.departDate}</div>
            </div>

            <div className="grid-item">
                <MuiPickersUtilsProvider utils={DateFnsUtils} className="searchDate">
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Return date"
                        id="date-picker-dialog"
                        name="returnDate"
                        // format="dd/MM/yyyy"
                        fullWidth
                        value={returnDate}
                        // onChange={this.handleDepartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <div>{errors.returnDate}</div>
            </div>

            <div className="grid-item">
                <div className="search-btn">
                    {/* <Link to={`/new-search`}> */}
                    <Button
                        className="btn"
                        type="submit"
                        fullWidth
                        color="primary"
                        disabled={!isValid}
                    >
                        Modify Search
                    </Button>                    
                {/* </Link> */}
            </div>
            </div>
        </div>

        </form>
    );  
};
