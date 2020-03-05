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

    getTotalPassengers = (adults, children, infants) => (parseInt(adults) + parseInt(children) + parseInt(infants));

    render() {
        const passenger = this.props;
        const passengerNumber = this.getTotalPassengers(passenger.adultNumber, passenger.childrenNumber, passenger.infantNumber);
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="default" className="dropdownToggle label" id="dropdown-basic">
                        <span className="dropdown-styling">{passengerNumber} {passengerNumber === 1 ? ("Passenger") : ("Passengers")}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2">
                    <div className = "container">

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={this.paxUpdater('adultNumber', 'ADD', passenger.adultNumber)} fontSize="small" />
                                    <span>{passenger.adultNumber} {parseInt(passenger.adultNumber) === 1 ? (<span>Adult</span>) : (<span>Adults</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={this.paxUpdater('adultNumber', 'SUBTRACT', passenger.adultNumber)} fontSize="small" />
                            </div>

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={this.paxUpdater('childrenNumber', 'ADD', passenger.childrenNumber)} fontSize="small" />
                                    <span>{passenger.childrenNumber} {parseInt(passenger.childrenNumber) === 1 ? (<span>Child</span>) : (<span>Children</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={this.paxUpdater('childrenNumber', 'SUBTRACT', passenger.childrenNumber)} fontSize="small" />
                            </div>

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={this.paxUpdater('infantNumber', 'ADD', passenger.infantNumber)} fontSize="small" />
                                    <span>{passenger.infantNumber} {parseInt(passenger.infantNumber) === 1 ? (<span>Infant</span>) : (<span>Infants</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={this.paxUpdater('infantNumber', 'SUBTRACT', passenger.infantNumber)} fontSize="small" />
                            </div>

                    </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}


export default PaxNumber;