import React from 'react';
import CONSTANTS from "../../store/constants";

import {
    Table,
    Card,
} from 'react-bootstrap';


const FlightSummary = () => {
    
    return (
        <div>
<Card>
                            <Card.Header>
                                <h5>Booking Summary</h5>
                            </Card.Header>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item py-0">
                                    <div className="table-responsive">
                                        <table className="table table-borderless mb-0">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <p className="m-0 d-inline-block align-middle">
                                                        <a href={CONSTANTS.BLANK_LINK} className="text-body font-weight-semibold">Origin to Destination</a>
                                                        <br/>
                                                        <small>Flight Number</small>
                                                    </p>
                                                </td>
                                                <td className="text-right">
                                                    KES Price
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="m-0 d-inline-block align-middle">
                                                        <a href={CONSTANTS.BLANK_LINK} className="text-body font-weight-semibold">Destination to Origin</a>
                                                        <br/>
                                                        <small>Flight Number</small>
                                                    </p>
                                                </td>
                                                <td className="text-right">
                                                    KES Price
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                                <li className="list-group-item py-0">
                                    <div className="table-responsive">
                                        <table className="table table-borderless mb-0">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <p className="m-0 d-inline-block align-middle">
                                                    <a href={CONSTANTS.BLANK_LINK} className="text-body font-weight-semibold">Flight Details</a>
                                                    </p>
                                                        <br/>
                                                    <ul>
                                                        <li>Flight Detail</li>
                                                        <li>Flight Detail</li>
                                                        <li>Flight Detail</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                            <Card.Body className="py-2">
                                <Table responsive className="table-borderless mb-0 w-auto table-sm float-right text-right">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <h6 className="m-0">Summary:</h6>
                                        </td>
                                        <td>
                                            Return ticket for 1 Adult
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 className="m-0">Taxes:</h6>
                                        </td>
                                        <td>
                                            FREE
                                        </td>
                                    </tr>
                                    <tr className="border-top">
                                        <td>
                                            <h5 className="m-0">Total:</h5>
                                        </td>
                                        <td className="font-weight-semibold">
                                            $1070
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
        </div>
    )
}

export default FlightSummary;