import React from "react";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PaxNumber from './PaxNumber';
import OptionSelect from './OptionSelect';
import places from '../../../Shared/data/places';
import TextField from '@material-ui/core/TextField';


export const SearchForm = (props) => {

    const handleSubmit = props.handleSubmit;
    const handleChange = props.handleChange;
    const { origin, destination, departDate, returnDate, flightType, flightClass, adultNumber, childrenNumber, infantNumber } = props.values;

    const handleOriginSelect = (event, newValue) => {
        if (!!newValue) {
            event.target = {name:'origin', value: newValue.code };
        } else {
            event.target = {name:'origin', value: "" };
        }
        handleChange(event);
    }
    const handleDestinationSelect = (event, newValue) => {
        if (!!newValue) {
            event.target = {name:'destination', value: newValue.code };
        } else {
            event.target = {name:'destination', value: "" };
        }
        handleChange(event);
    }
    const handleDepartDateChange = value => {
        const event = {target: {name:'departDate', value: value }};
        handleChange(event);
    }

    const handleReturnDateChange = value => {
        const event = {target: {name:'returnDate', value: value }};
        handleChange(event);
    }


    const placeOptions = places.aerocrs.destinations.destination;


    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div className = "dropdownSearchContent mb-3">
                <OptionSelect
                    name="flightClass"
                    value={flightClass}
                    options = {[
                        { value: "Any", displayValue: 'Any' },
                        { value: 'Economy', displayValue: 'Economy' },
                        { value: 'Business', displayValue: 'Business'}
                    ]}
                    handleSelect={handleChange}
                />
                <OptionSelect className="mr-5"
                    name="flightType"
                    value={flightType}
                    options= {[
                        { value: "Any", displayValue: 'Any' },
                        { value: 'RT', displayValue: 'Return' },
                        { value: 'OW', displayValue: 'One-Way'}
                    ]}
                    handleSelect={handleChange}
                />
                <PaxNumber handleChange={handleChange} adultNumber={adultNumber} childrenNumber = {childrenNumber} infantNumber = {infantNumber} />
            </div>
            <div className="search-grid-container">

                <div className="grid-item">
                <Autocomplete
                    id="origin"
                    options={placeOptions}
                    onChange={handleOriginSelect}
                    // size="small" 
                    getOptionLabel={option => option.name}
                    style={{ marginBottom: 0 }}
                    renderInput={params => <TextField {...params} label="Origin"  variant="outlined" />}
                    />
                </div>

                <div className="grid-item">
                <Autocomplete
                    id="destination"
                    options={placeOptions}
                    // size="small" 
                    getOptionLabel={option => option.name}
                    onChange={handleDestinationSelect}
                    renderInput={params => <TextField {...params} label="Destination" variant="outlined" />}
                    />
                </div>

            <div className="grid-item">
                <MuiPickersUtilsProvider utils={DateFnsUtils} className="searchDate">
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Departure date"
                        id="date-picker-dialog"
                        name="departDate"
                        format="dd/MM/yyyy"
                        fullWidth
                        // size="small" 
                        value={departDate}
                        onChange={handleDepartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div className="grid-item">
                <MuiPickersUtilsProvider utils={DateFnsUtils} className="searchDate">
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Return date"
                        id="date-picker-dialog"
                        name="returnDate"
                        format="dd/MM/yyyy"
                        fullWidth
                        // size="small" 
                        value={returnDate}
                        onChange={handleReturnDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>


            <div className="grid-item">
                <div className="search-btn">
                    {/* <Link to={`/new-search`}> */}
                    <Button
                        className="btn"
                        type="submit"
                        fullWidth
                        color="primary"
                        // disabled={!isValid}
                    >
                        Search Flights
                    </Button>                    
                {/* </Link> */}
            </div>
            </div>
        </div>

        </form>
    );  
};
