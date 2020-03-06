import React from 'react';
// import Breadcrumb from './../../App/layout/AdminLayout/Breadcrumb'
import { connect } from 'react-redux';
import {
    Row,
    Col,
} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
// import Breadcrumbs from '../../App/Breadcrumbs';
import FlightsSummary from '../FlightsSummary';
import FormsWizard from './PassengerFormWizard';


class PassengerDetails extends React.Component {

    render() {

        return (
                <Aux>
                    {/* <Breadcrumbs /> */}
                    <Row className='content-wrapper'>
                        <Col lg={8} className="form-column">
                                <div className="card shadow-none">
                                    <div className="card-header">
                                        <h5 className="mb-2">Passenger information</h5>
                                        <p className="text-muted card-header-detail">Fill in the form below to enable us get your booking details.</p>
                                    </div>
                                    <div className="card-body">
                                        <FormsWizard />
                                    </div>
                                </div>           
                        </Col>
                        <Col lg={4}  className="form-column">
                            <FlightsSummary />
                        </Col>
                    </Row>
                </Aux>                 
        )
    }
}

const mapStateToProps = state => {
    const { 
        selectedFlight: { loading },
        querry: { sessionId },
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