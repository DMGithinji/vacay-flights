import React from 'react';
// import Breadcrumb from './../../App/layout/AdminLayout/Breadcrumb'
import CONSTANTS from "../../store/constants";
import { connect } from 'react-redux';
import countries from '../../Shared/utils/countries';
import {
    Row,
    Col,
} from 'react-bootstrap';

import Aux from "./../../hoc/_Aux";
import Breadcrumbs from '../../App/Breadcrumbs';
import FlightSummary from '../FlightSummary';
import Loader from '../../App/Loader';
import { Link } from 'react-router-dom';


class PassengerDetails extends React.Component {

    render() {

        return (
            !this.props.loading ? (
                <Aux>
                    <Breadcrumbs />
                    <Row className='content-wrapper'>
                        <Col lg={8}>
                                <div className="card shadow-none">
                                            <div className="card-header">
                                                <h5 className="mb-2">Billing information</h5>
                                                <p className="text-muted card-header-detail">Fill the form below in order to send you the order's invoice.</p>
                                            </div>
                                            <div className="card-body">
                                                <Row>
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
                                                    <Col md={4} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="text"><span className="text-danger">*</span> Gender</label>
                                                            <select className="form-control">
                                                                <option value="M">Male</option>
                                                                <option value="F">Female</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col md={4} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="Date of Birth"><span className="text-danger">*</span> Date of Birth</label>
                                                            <input className="form-control" type="text" placeholder="dd/mm/yyyy" id="date-of-birth" />
                                                        </div>
                                                    </Col>
                                                    <Col md={4} className = "pt-4">
                                                    <div className="form-group fill">
                                                            <label>Country</label>
                                                            <select className="form-control">
                                                                {
                                                                    countries.map(country => (
                                                                        <option value={country.value}> {country.name} </option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="passport-no">Passport or ID Number</label>
                                                            <input className="form-control" type="text" placeholder="Passport or ID Number" id="passport-no"/>
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className = "pt-4">
                                                        <div className="form-group fill">
                                                            <label htmlFor="expiry-date">Date of Expiry</label>
                                                            <input className="form-control" type="text" placeholder="dd/mm/yyyy" id="expiry-date" />
                                                        </div>
                                                        <div className="form-group fill">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                                                <label className="custom-control-label" htmlFor="customCheck2">No Expiry</label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

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
                                                        <a href={CONSTANTS.BLANK_LINK} className="btn btn-outline-secondary">
                                                            Back to Search
                                                        </a>
                                                    </Col>
                                                    <Col md={6} className = "pt-4">
                                                        <div className="text-sm-right">
                                                            <Link to={`/booking-payment`} className="btn btn-primary text-sm-right mt-md-0 mt-2">
                                                                    <i className="mdi mdi-truck-fast mr-1"/> SUBMIT
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>           
                        </Col>
                        <Col lg={4}>
                            <FlightSummary />
                        </Col>
                    </Row>
                </Aux>                 
                ) : (
                    <Loader />
                )
        )
    }
}

const mapStateToProps = state => {
    const { selectedFlight: { loading } } = state;
    return { loading }
}


// const mapDispatchToProps = dispatch => {
//     return {
//             fetchQueryData: session_id => dispatch(fetchQueryData(session_id))
//         };
// }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(PassengerDetails);