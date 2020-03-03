import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ControlPointRoundedIcon from '@material-ui/icons/ControlPointRounded';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class PaxNumber extends Component {
    
    updatePaxNo = (method, currentNo) => {
        if (method === 'ADD') {
            currentNo++;
        } else if (method === 'SUBTRACT') {
            if (currentNo > 0){
                currentNo--;
            } else {
                currentNo = 0
            }
        }
        return currentNo;
    }

    paxUpdater = (paxType, method, currentNo) =>()=> {
        const paxNo = this.updatePaxNo(method, currentNo);
        let event = {
            target: { name: paxType, value: paxNo},
        }
        this.props.handleChange(event);
    }

    getTotalPassengers = (adults, children, infants) => (adults + children + infants);

    render() {
        const passenger = this.props;
        const passengerNumber = this.getTotalPassengers(passenger.adultNumber.value, passenger.childrenNumber.value, passenger.infantNumber.value);
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="default" className="dropdownToggle label" id="dropdown-basic">
                        <span className="dropdown-styling">{passengerNumber} {passengerNumber === 1 ? (<span>Passenger</span>) : (<span>Passengers</span>)}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2">
                    <div className = "container">

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={this.paxUpdater('adultNumber', 'ADD', passenger.adultNumber.value)} fontSize="small" />
                                    <span>{passenger.adultNumber.value} {passenger.adultNumber === 1 ? (<span>Adult</span>) : (<span>Adults</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={this.paxUpdater('adultNumber', 'SUBTRACT', passenger.adultNumber.value)} fontSize="small" />
                            </div>

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={this.paxUpdater('childrenNumber', 'ADD', passenger.childrenNumber.value)} fontSize="small" />
                                    <span>{passenger.childrenNumber.value} {passenger.childrenNumber === 1 ? (<span>Child</span>) : (<span>Children</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={this.paxUpdater('childrenNumber', 'SUBTRACT', passenger.childrenNumber.value)} fontSize="small" />
                            </div>

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={this.paxUpdater('infantNumber', 'ADD', passenger.infantNumber.value)} fontSize="small" />
                                    <span>{passenger.infantNumber.value} {passenger.infantNumber.value === 1 ? (<span>Infant</span>) : (<span>Infants</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={this.paxUpdater('infantNumber', 'SUBTRACT', passenger.infantNumber.value)} fontSize="small" />
                            </div>

                    </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}


export default PaxNumber;