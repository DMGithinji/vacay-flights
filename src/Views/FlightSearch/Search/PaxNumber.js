import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ControlPointRoundedIcon from '@material-ui/icons/ControlPointRounded';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class PaxNumber extends Component {
    
    updatePaxNo = (paxType, method, currentNo) => {
        if (method === 'ADD') {
            currentNo++;
        } else if (method === 'SUBTRACT') {
            if (currentNo > 0){
                if (paxType === "adultNumber"){
                    currentNo = 1;
                } else {
                    currentNo--;
                }
            } else {
                currentNo = 0
            }
        }
        return currentNo;
    }

    paxUpdater = (paxType, method, currentNo) =>()=> {
        const paxNo = this.updatePaxNo(paxType, method, currentNo);
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

                    <Dropdown.Menu className="p-2 dropdown-content">
                    <div className = "container">

                            <div className = "d-flex inline justify-content-between mb-2">
                                <span>Adults<br />(Above 12yrs)</span>
                                <div>
                                    <ControlPointRoundedIcon onClick={this.paxUpdater('adultNumber', 'ADD', passenger.adultNumber)} fontSize="small" />
                                    <span> {passenger.adultNumber} </span>
                                    <RemoveCircleOutlineIcon onClick={this.paxUpdater('adultNumber', 'SUBTRACT', passenger.adultNumber)} fontSize="small" />
                                </div>
                            </div>

                            <div className = "d-flex inline justify-content-between mb-2">
                                <span>Children<br /> (2-11yrs)</span>
                                <div>
                                    <ControlPointRoundedIcon onClick={this.paxUpdater('childrenNumber', 'ADD', passenger.childrenNumber)} fontSize="small" />
                                    <span> {passenger.childrenNumber} </span>
                                    <RemoveCircleOutlineIcon onClick={this.paxUpdater('childrenNumber', 'SUBTRACT', passenger.childrenNumber)} fontSize="small" />
                                </div>
                            </div>
                            <div className = "d-flex inline justify-content-between mb-2">
                                <span>Infants<br />Below 2yrs)</span>
                                <div>
                                    <ControlPointRoundedIcon onClick={this.paxUpdater('infantNumber', 'ADD', passenger.infantNumber)} fontSize="small" />
                                    <span> {passenger.infantNumber} </span>
                                    <RemoveCircleOutlineIcon onClick={this.paxUpdater('infantNumber', 'SUBTRACT', passenger.infantNumber)} fontSize="small" />
                                </div>
                            </div>

                    </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}


export default PaxNumber;