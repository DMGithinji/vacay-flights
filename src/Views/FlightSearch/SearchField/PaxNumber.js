import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const PaxNumber = () => {

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="default" className="dropdownToggle label" id="dropdown-basic">
                Passenger No.
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Number of Adults</Form.Label>
                        <Form.Control className="form-control form-control-sm" type="number" placeholder="No. of adults" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Number of Children</Form.Label>
                        <Form.Control className="form-control form-control-sm" type="number" placeholder="No. of children" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Number of Infants</Form.Label>
                        <Form.Control className="form-control form-control-sm" type="number" placeholder="No. of infants" />
                    </Form.Group>

                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default PaxNumber;