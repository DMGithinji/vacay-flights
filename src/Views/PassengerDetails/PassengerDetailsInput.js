import React from "react";
import TextField from "@material-ui/core/TextField";
import countries from '../../Shared/data/countries';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { Row,  Col, } from 'react-bootstrap';
import CustomSelect from "../../Shared/components/SelectInputField";


export const PassengerDetailsInput = props => {
    const {
        values: { title, firstname, lastname, nationality, birthdate, docnumber, docexpiry },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        currentStep
    } = props;
// console.table("formIndex ", formIndex);

const handleBirthDateChange = value => {
    const event = {target: {name:'birthdate', value: value }};
    handleChange(event);
}

const handleExpiryDateChange = value => {
    const event = {target: {name:'docexpiry', value: value }};
    handleChange(event);
}

const handlePreviousStep = () => {
    props.previousStep();
}


return (
    <Row>
        <Col lg={12}>
            <div className="card p-4 m-0 shadow-none">
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={12} className = "p-0 m-0">
                            <div className="alert alert-primary" role="alert">
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
                                        error={Boolean(errors.title && touched.title)}
                                        value={title}
                                        options = {[
                                            { value: 'Mr.', name: 'Mr.' },
                                            { value: 'Mrs.', name: 'Mrs.' },
                                            { value: 'Miss.', name: 'Miss.' },
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
                                    name="firstname"
                                    error={Boolean(errors.firstname  && touched.firstname)}
                                    placeholder="First Name"
                                    value={firstname}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    size="small"                                                               
                                />
                                <div className="text-danger pl-2">{Boolean(errors.firstname &&  touched.firstname) ? errors.firstname : ""}</div>
                            </Col>
                            <Col md={5} className = "passenger-input-field">
                                <label id="title-label" className="text-muted">Last Name</label>
                                <TextField
                                    name="lastname"
                                    error={Boolean(errors.lastname && touched.lastname)}
                                    placeholder="Last Name"
                                    value={lastname}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    size="small"                                                              
                                />
                                <div className="text-danger pl-2">{Boolean(errors.lastname && touched.lastname) ? errors.lastname : ""}</div>
                            </Col>
                            
                            <Col md={6} className = "passenger-input-field">
                                    <label id="title-label" className="text-muted">Nationality</label>
                                    <CustomSelect
                                        name="nationality"
                                        placeholder="Nationality"
                                        error={Boolean(errors.nationality && touched.nationality)}
                                        value={nationality}
                                        options = {countries}
                                        fullWidth
                                        handleSelect={handleChange}
                                    />   
                                <div className="text-danger pl-2">{Boolean(errors.nationality && touched.nationality) ? errors.nationality : ""}</div>
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
                                        error={Boolean(errors.birthdate && touched.birthdate)}
                                        fullWidth
                                        size="small"                                     
                                        value={birthdate}
                                        onChange={handleBirthDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <div className="text-danger pl-2">{Boolean(errors.birthdate && touched.birthdate) ? errors.birthdate : ""}</div>
                            </Col>
                            <Col md={6} className = "passenger-input-field">
                                <label id="title-label" className="text-muted">Passport or ID Number</label>   
                                <TextField
                                    name="docnumber"
                                    placeholder="Passport or ID number"
                                    error={Boolean(errors.docnumber && touched.docnumber)}
                                    value={docnumber}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    size="small"                                                              
                                />
                                <div className="text-danger pl-2">{Boolean(errors.docnumber && touched.docnumber) ? errors.docnumber : ""}</div>
                            </Col>
                            <Col md={6} className = "passenger-input-field">
                                <label id="title-label" className="text-muted">Passport Expiration Date</label>   
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        inputVariant="outlined"
                                        placeholder="Passport expiration date"
                                        id="date-picker-dialog"
                                        name="docexpiry"
                                        error={Boolean(errors.docexpiry && touched.docexpiry)}
                                        format="dd/MM/yyyy"
                                        fullWidth
                                        size="small"                                                              
                                        value={docexpiry}
                                        onChange={handleExpiryDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <div className="text-danger pl-2">{Boolean(errors.docexpiry  && touched.docexpiry) ? errors.docexpiry : ""}</div>
                            </Col>
                            </Row>
                            <Row className="mt-3">
                            <Col md={6} className = "passenger-input-field">
                                {
                                    currentStep !== 1 ? (
                                        <button
                                            type="button"
                                            fullWidth
                                            className = "btn btn-default btn-previous  w-100"
                                            onClick = {handlePreviousStep}
                                            >
                                            Previous Passenger
                                        </button> ) : null
                                }                                                    
                            </Col>
                            <Col md={6} className = "passenger-input-field">
                            {
                                !props.currentStep !== props.totalSteps ? (                                
                                    <button
                                        type="submit"
                                        fullWidth
                                        className =  "btn btn-primary w-100"
                                        disabled={!isValid}>
                                        Next
                                    </button>
                                ) : null
                            }
                            </Col>
                        </Row>
                        </form>

                </div>           
            </Col>
        </Row>
    );
};
