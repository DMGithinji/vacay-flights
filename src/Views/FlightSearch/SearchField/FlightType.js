import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const FlightType = () => {

    const options = ['Return', 'One-Way']
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="default" className="dropdownToggle" id="dropdown-basic">
                    {'Flight Type'}
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-2">
                <Form>
                    {options.map(type => (
                        <div key={`flightType`} className="mb-3">
                        <Form.Check 
                            type='radio'
                            id={`flightType`}
                            label={type}
                        />
                        </div>
                    ))}
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default FlightType;