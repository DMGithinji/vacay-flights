import React from 'react';
// import Breadcrumb from './../../App/layout/AdminLayout/Breadcrumb'
import { connect } from 'react-redux';
import {
    Row,
    Col,
} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Breadcrumbs from '../../App/Breadcrumbs';
import FlightSummary from '../FlightSummary';
import Loader from '../../App/Loader';
import { Link } from 'react-router-dom';
import PassengerForm from './PassengerForm';



const ContactDetails = (props) => (
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


class PassengerDetails extends React.Component {

    render() {

        return (
            !this.props.loading ? (
                <Aux>
                    <Breadcrumbs />
                    <Row className='content-wrapper'>
                        <Col lg={8} className="p-0 m-0">
                                <div className="card shadow-none">
                                    <div className="card-header">
                                        <h5 className="mb-2">Billing information</h5>
                                        <p className="text-muted card-header-detail">Fill the form below in order to send you the order's invoice.</p>
                                    </div>
                                    
                                    <div className="card-header">
                                        <h5 className="mb-2">Indicator for form wizard</h5>
                                    </div> 
                                    <div className="card-body">
                                        
                                        <PassengerForm />
                                        <hr />
                                        <ContactDetails sessionId={this.props.sessionId}></ContactDetails>
                                        
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
    const { 
        selectedFlight: { loading },
        querry: { sessionId }
     } = state;
    return { loading, sessionId }
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