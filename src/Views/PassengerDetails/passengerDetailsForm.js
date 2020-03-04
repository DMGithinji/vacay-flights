import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import countries from '../../Shared/data/countries';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';

import {
    Row,
    Col,
} from 'react-bootstrap';
import CustomSelect from "../../Shared/components/SelectInputField";


export const Form = props => {
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
                                            <div>
                                            <form onSubmit={handleSubmit}>

                                                <Row>
                                                    <Col md={2} className = "pt-4">
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
                                                    <Col md={5} className = "pt-4">
                                                        <label id="title-label" className="text-muted">First Name</label>
                                                        <TextField
                                                            id="firstName-label"
                                                            placeholder="Enter First Name"
                                                            error={Boolean(errors.firstName)}
                                                            value={firstName}
                                                            onChange={handleChange}
                                                            variant="outlined"
                                                            fullWidth
                                                            size="small"                                                              
                                                        />
                                                        <div className="text-danger pl-2">{Boolean(errors.firstName) ? errors.firstName : ""}</div>
                                                    </Col>
                                                    <Col md={5} className = "pt-4">
                                                        <label id="title-label" className="text-muted">Last Name</label>
                                                        <TextField
                                                            name="lastName"
                                                            error={Boolean(errors.lastName)}
                                                            placeholder="Enter Last Name"
                                                            value={lastName}
                                                            onChange={handleChange}
                                                            variant="outlined"
                                                            fullWidth
                                                            size="small"                                                              
                                                        />
                                                        <div className="text-danger pl-2">{Boolean(errors.lastName) ? errors.lastName : ""}</div>
                                                    </Col>
                                                    
                                                    <Col md={6} className = "pt-4">
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
                                                    <Col md={6} className = "pt-4">
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
                                                    <Col md={6} className = "pt-4">
                                                        <label id="title-label" className="text-muted">Passport or ID Number</label>   
                                                        <TextField
                                                            name="docNumber"
                                                            placeholder="Enter passport or ID number"
                                                            error={Boolean(errors.docNumber)}
                                                            value={docNumber}
                                                            onChange={handleChange}
                                                            variant="outlined"
                                                            fullWidth
                                                            size="small"                                                              
                                                        />
                                                        <div className="text-danger pl-2">{Boolean(errors.docNumber) ? errors.docNumber : ""}</div>
                                                    </Col>
                                                    <Col md={6} className = "pt-4">
                                                        <label id="title-label" className="text-muted">Passport Expiration Date</label>   
                                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                            <KeyboardDatePicker
                                                                inputVariant="outlined"
                                                                placeholder="Enter passport expiration date"
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
                                                    <Col md={6} className = "pt-4">
                                                        <Button
                                                            type="button"
                                                            fullWidth
                                                            className = "btn btn-default"
                                                            >
                                                            Previous Passenger
                                                        </Button>                                                    
                                                    </Col>
                                                    <Col md={6} className = "pt-4">
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

                                                <div className="card-header col-12"></div>

                                                <Row className="">
                                                <Col md={12}>
                                                    <div className="card-body pt-3">
                                                        <h5 className="mb-2">Contact details</h5>
                                                        <p className="text-muted mb-0">Fill the form below in order to send you the order's invoice.</p>
                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <Row>
                                                        <Col md={10} className = "pt-4">
                                                            <div className="form-group fill">
                                                                <label htmlFor="text"><span className="text-danger">*</span> Title</label>
                                                                <select className="form-control">
                                                                    <option value="Mr.">Mr.</option>
                                                                    <option value="Mrs.">Mrs.</option>
                                                                    <option value="Dr.">Dr.</option>
                                                                </select>
                                                            </div>
                                                        </Col>
                                                        <Col>

                                                        </Col>
                                                    </Row>
                                                    </Col>
                                                    <Col md={3} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="first-name">First Name</label>
                                                            <input className="form-control" type="text" placeholder="First name" id="first-name" />
                                                        </div>
                                                    </Col>
                                                    <Col md={3} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="last-name">Middle Name</label>
                                                            <input className="form-control" type="text" placeholder="Middle name" id="last-name" />
                                                        </div>
                                                    </Col>
                                                    <Col md={3} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="last-name">Last Name</label>
                                                            <input className="form-control" type="text" placeholder="Last name" id="last-name" />
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="Phone"><span className="text-danger">*</span> Phone </label>
                                                            <input className="form-control" type="text" placeholder="07xxxxxxxx" id="phone" />
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="Email Address"><span className="text-danger">*</span> Email </label>
                                                            <input className="form-control" type="text" placeholder="Email Address" id="Email" />
                                                        </div>
                                                    </Col>



                                                    <Col md={6} className = "pt-4">
                                                            Back to Search
                                                    </Col>
                                                    <Col md={6} className = "pt-4">
                                                        <div className="text-sm-right">
                                                                    <i className="mdi mdi-truck-fast mr-1"/> SUBMIT
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>           
                        </Col>
                    </Row>
    );
};
