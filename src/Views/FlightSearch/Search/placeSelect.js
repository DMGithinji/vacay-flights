/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import places from '../../../Shared/utils/places';

const PlaceSelect = () => {

  return (
    <Autocomplete
        id="country-select-demo"
        onChange={this.handleChange}
        options={places}
        autoHighlight
        getOptionLabel={option => option.label}
        renderOption={option => (
            <React.Fragment>
            {option.label} ({option.code}) +{option.phone}
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
    );  
}

export default PlaceSelect;