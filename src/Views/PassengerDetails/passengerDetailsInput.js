import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import countries from '../../Shared/data/countries';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import {
    Row,
    Col,
} from 'react-bootstrap';
import CustomSelect from "../../Shared/components/SelectInputField";


export const PassengerDetailsInput = props => {
  const {
    values: { title, firstName, lastName, nationality, birthdate, docNumber, docExpiry },
    errors,
    // touched,
    handleSubmit,
    handleChange,
    isValid,
    // setFieldTouched
} = props;
console.table(props);

const handleBirthDateChange = value => {
    const event = {target: {name:'birthdate', value: value }};
    handleChange(event);
}

const handleExpiryDateChange = value => {
    const event = {target: {name:'docExpiry', value: value }};
    handleChange(event);
}

return (
    <Row>
        <Col lg={12}>
            <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={12} className = "p-0">
                            <div class="alert alert-primary" role="alert">
                                Please ensure that the details entered are as they appear in your passport/ID to avoid boarding complications
                            </div>
                            </Col>
                            <Col md={2} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">Title</label>
                                    <CustomSelect
                                        labelId="title-label"
                                        id="title"
                                        name="title"
                                        placeholder="Title"
                                        error={Boolean(errors.firstName)}
                                        value={title}
                                        options = {[
                                            { value: 'Mr.', name: 'Mr.' },
                                            { value: 'Mrs.', name: 'Mrs.' },
                                            { value: 'Child', name: 'Child'},
                                            { value: 'Infant', name: 'Infant'}
                                        ]}
                                        handleSelect={handleChange}
                                    />   
                                <div className="text-danger pl-2">{Boolean(errors.title) ? errors.title : ""}</div>
                            </Col>
                            <Col md={5} className = "passenger-input-field">
                                <label id="title-label" className="text-muted">First Name</label>
                                <TextField
                                    name="firstName"
                                    error={Boolean(errors.firstName)}
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    size="small"                                                               
                                />
                                <div className="text-danger pl-2">{Boolean(errors.firstName) ? errors.firstName : ""}</div>
                            </Col>
                            <Col md={5} className = "passenger-input-field">
                                <label id="title-label" className="text-muted">Last Name</label>
                                <TextField
                                    name="lastName"
                                    error={Boolean(errors.lastName)}
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    size="small"                                                              
                                />
                                <div className="text-danger pl-2">{Boolean(errors.lastName) ? errors.lastName : ""}</div>
                            </Col>
                            
                            <Col md={6} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">Nationality</label>
                                    <CustomSelect
                                        name="nationality"
                                        placeholder="Nationality"
                                        error={Boolean(errors.firstName)}
                                        value={nationality}
                                        options = {countries}
                                        handleSelect={handleChange}
                                    />   
                                <div className="text-danger pl-2">{Boolean(errors.nationality) ? errors.nationality : ""}</div>
                            </Col>
                            <Col md={6} className = "passenger-input-field">
                                <label id="title-label" className="text-muted">Date of Birth</label>   
                                <MuiPickersUtilsProvider 
                                    utils={DateFnsUtils} className="searchDate">
                                    <KeyboardDatePicker
                                        inputVariant="outlined"
                                        placeholder="dd/mm/yyyy"
                                        id="date-picker-dialog"
                                        name="birthdate"
                                        format="dd/MM/yyyy"
                                        fullWidth
                                        size="small"                                                              
                                        value={birthdate}
                                        onChange={handleBirthDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <div className="text-danger pl-2">{Boolean(errors.birthdate) ? errors.birthdate : ""}</div>
                            </Col>
                            <Col md={6} className = "passenger-input-field">
                                <label id="title-label" className="text-muted">Passport or ID Number</label>   
                                <TextField
                                    name="docNumber"
                                    placeholder="Passport or ID number"
                                    error={Boolean(errors.docNumber)}
                                    value={docNumber}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    size="small"                                                              
                                />
                                <div className="text-danger pl-2">{Boolean(errors.docNumber) ? errors.docNumber : ""}</div>
                            </Col>
                            <Col md={6} className = "passenger-input-field">
                                <label id="title-label" className="text-muted">Passport Expiration Date</label>   
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        inputVariant="outlined"
                                        placeholder="Passport expiration date"
                                        id="date-picker-dialog"
                                        name="docExpiry"
                                        format="dd/MM/yyyy"
                                        fullWidth
                                        size="small"                                                              
                                        value={docExpiry}
                                        onChange={handleExpiryDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <div className="text-danger pl-2">{Boolean(errors.docExpiry) ? errors.docExpiry : ""}</div>
                            </Col>
                            </Row>
                            <Row className="mt-3">
                            <Col md={6} className = "passenger-input-field">
                                <Button
                                    type="button"
                                    fullWidth
                                    className = "btn btn-default"
                                    >
                                    Previous Passenger
                                </Button>                                                    
                            </Col>
                            <Col md={6} className = "passenger-input-field">
                                <Button
                                    type="submit"
                                    fullWidth
                                    className = "btn btn-primary"
                                    color =  "primary"
                                    disabled={!isValid}>
                                    Next
                                </Button>
                            </Col>
                        </Row>
                        </form>

                </div>           
            </Col>
        </Row>
    );
};
