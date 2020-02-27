import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { setAdultNumber, setChildrenNumber, setInfantNumber } from '../../../store/actions/querryState';
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

    getTotalPassengers = (adults, children, infants) => (adults + children + infants);

    render() {
        const passenger = this.props;
        const passengerNumber = this.getTotalPassengers(passenger.adultNumber, passenger.childrenNumber, passenger.infantNumber);
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="default" className="dropdownToggle label" id="dropdown-basic">
                        <span className="dropdown-styling">{passengerNumber} {passengerNumber === 1 ? (<span>Passenger</span>) : (<span>Passengers</span>)}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2">
                    <div className = "container">

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={passenger.setAdultNumber(this.updatePaxNo('ADD',passenger.adultNumber))} fontSize="small" />
                                    <span>{passenger.adultNumber} {passenger.adultNumber === 1 ? (<span>Adult</span>) : (<span>Adults</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={passenger.setAdultNumber(this.updatePaxNo('SUBTRACT',passenger.adultNumber))} fontSize="small" />
                            </div>

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={passenger.setChildrenNumber(this.updatePaxNo('ADD',passenger.childrenNumber))} fontSize="small" />
                                    <span>{passenger.childrenNumber} {passenger.childrenNumber === 1 ? (<span>Child</span>) : (<span>Children</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={passenger.setChildrenNumber(this.updatePaxNo('SUBTRACT',passenger.childrenNumber))} fontSize="small" />
                            </div>

                            <div className = "d-flex inline justify-content-between mb-2">
                                <ControlPointRoundedIcon onClick={passenger.setInfantNumber(this.updatePaxNo('ADD',passenger.infantNumber))} fontSize="small" />
                                    <span>{passenger.infantNumber} {passenger.infantNumber === 1 ? (<span>Infant</span>) : (<span>Infants</span>)}</span>
                                <RemoveCircleOutlineIcon onClick={passenger.setInfantNumber(this.updatePaxNo('SUBTRACT',passenger.infantNumber))} fontSize="small" />
                            </div>

                    </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { querry: { adultNumber, childrenNumber, infantNumber } } = state;
    return { adultNumber, childrenNumber, infantNumber }
}

const mapDispatchToProps = dispatch => {
    return {
        setAdultNumber: adultNumber => () => dispatch(setAdultNumber(adultNumber)),
        setChildrenNumber: childrenNumber => () => dispatch(setChildrenNumber(childrenNumber)),
        setInfantNumber: infantNumber => () => dispatch(setInfantNumber(infantNumber))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaxNumber);