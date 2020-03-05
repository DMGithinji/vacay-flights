import React from 'react';
import { Row,  Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const  ContactDetails = (props) => (
    <Row className="">
        <Col md={12}>
            <div className="card-body pt-3">
                <h5 className="mb-2">Contact details</h5>
                <p className="text-muted mb-0">Fill the form below in order to send you the order's invoice.</p>
            </div>
        </Col>
        <Col md={2} className="pt-4">
            <div className="form-group fill">
                <label htmlFor="text"><span className="text-danger">*</span> Title</label>
                <select className="form-control">
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                </select>
            </div>
        </Col>
        <Col md={5} className="pt-4">
            <div className="form-group fill">
                <label htmlFor="first-name">First Name</label>
                <input className="form-control" type="text" placeholder="First name" id="first-name" />
            </div>
        </Col>
        <Col md={5} className="pt-4">
            <div className="form-group fill">
                <label htmlFor="last-name">Last Name</label>
                <input className="form-control" type="text" placeholder="Last name" id="last-name" />
            </div>
        </Col>
        <Col md={6} className="pt-4">
            <div className="form-group fill">
                <label htmlFor="Phone"><span className="text-danger">*</span> Phone </label>
                <input className="form-control" type="text" placeholder="07xxxxxxxx" id="phone" />
            </div>
        </Col>
        <Col md={6} className="pt-4">
            <div className="form-group fill">
                <label htmlFor="Email Address"><span className="text-danger">*</span> Email </label>
                <input className="form-control" type="text" placeholder="Email Address" id="Email" />
            </div>
        </Col>

        <Col md={6} className="pt-4">
            <Link to={`/select/${props.sessionId}`} className="btn btn-primary text-sm-right mt-md-0 mt-2">
                Back to Search
            </Link>
        </Col>
        <Col md={6} className="pt-4">
            <div className="text-sm-right">
                <Link to={`/booking-payment`} className="btn btn-primary text-sm-right mt-md-0 mt-2">
                        <i className="mdi mdi-truck-fast mr-1" /> SUBMIT
                </Link>
            </div>
        </Col>
    </Row>
);
