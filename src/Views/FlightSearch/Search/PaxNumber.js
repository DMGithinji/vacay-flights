import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { setAdultNumber, setChildrenNumber, setInfantNumber } from '../../../store/actions/querryState';

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
        if (paxType === 'Adults'){
            this.props.setAdultNumber(this.updatePaxNo(method, currentNo));
        }
    }

    getTotalPassengers = (adults, children, infants) => (adults + children + infants);

    render() {
        const passenger = this.props;
        const passengerNumber = this.getTotalPassengers(passenger.adultNumber, passenger.childrenNumber, passenger.infantNumber);
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="default" className="dropdownToggle label" id="dropdown-basic">
                        <span className="dropdown-styling">{passengerNumber} {passengerNumber > 1 ? (<span>Passengers</span>) : (<span>Passenger</span>)}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2">
                    <div className = "container">
                            <div className = "d-flex inline justify-content-between">
                                <button onClick={passenger.setAdultNumber(this.updatePaxNo('ADD',passenger.adultNumber))}>Plus</button>
                                    <span>{`${passenger.adultNumber} Adults`}</span>
                                <button onClick={passenger.setAdultNumber(this.updatePaxNo('SUBTRACT',passenger.adultNumber))}>Minus</button>
                            </div>
                            <div className = "d-flex inline justify-content-between">
                                <button onClick={passenger.setChildrenNumber(this.updatePaxNo('ADD',passenger.childrenNumber))}>Plus</button>
                                    <span>{`${passenger.childrenNumber} Children`}</span>
                                <button onClick={passenger.setChildrenNumber(this.updatePaxNo('SUBTRACT',passenger.childrenNumber))}>Minus</button>
                            </div>
                            <div className = "d-flex inline justify-content-between">
                                <button onClick={passenger.setInfantNumber(this.updatePaxNo('ADD',passenger.infantNumber))}>Plus</button>
                                    <span>{`${passenger.infantNumber} Infants`}</span>
                                <button onClick={passenger.setInfantNumber(this.updatePaxNo('SUBTRACT',passenger.infantNumber))}>Minus</button>
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