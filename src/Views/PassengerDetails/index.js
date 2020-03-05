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
import { ContactDetails } from './contactDetails';
import FormsWizard from './passengerFormWizard';


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

                                    <div className="card-body">

                                        <FormsWizard />
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