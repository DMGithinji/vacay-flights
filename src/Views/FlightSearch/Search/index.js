
import React, { Component } from "react";
import { SearchForm } from "./searchForm";
import { connect } from 'react-redux';
import { getDestinationOptions } from '../../../store/actions/destinations';
import { setQuery } from '../../../store/actions/querryState';
import { withRouter } from "react-router-dom";

// const minimumPassengers = (adultNumber, childrenNumber, infantNumber ) => {
//     return (adultNumber + childrenNumber + infantNumber > 0)
// }
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    return valid;
}

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
                origin: this.props.origin ? this.props.origin : "", 
                destination: this.props.destination ?  this.props.destination : "", 
                departDate: this.props.departDate ? this.props.departDate : new Date(), 
                returnDate: this.props.returnDate,
                flightType: this.props.flightType ? this.props.flightType : "Return", 
                flightClass: "Economy", 
                adultNumber: this.props.adultNumber ? this.props.adultNumber : 1, 
                childrenNumber: this.props.childrenNumber ? this.props.childrenNumber : 0, 
                infantNumber: this.props.infantNumber ? this.props.infantNumber : 0,
                formErrors: {
                    origin: "", 
                    destination: "", 
                    departDate: "", 
                    returnDate: "",
                    flightType: "", 
                    flightClass: "", 
                    adultNumber: "", 
                    childrenNumber: "", 
                    infantNumber: "", 
                }
            };
        };


    UNSAFE_componentWillReceiveProps(nextProps) {

        //On NewSearch Page, if new search is successfully completed, redirect to select flight page

        if (this.props.flightResults !== nextProps.flightResults) {
            const pathName = window.location.href.split('/');
            const currentPath = pathName[pathName.length-1];
            console.log("currentPath ", currentPath);
            console.log("fetchState ", this.props.fetchState);
            if (this.props.fetchState === 'fetching' && currentPath === "search")
                this.props.history.push('/select'); 
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        const querry = this.state;
        if (formValid(this.state)) {
            console.log(`
                --SUBMITTING--
                Origin: ${this.state.origin}
                Destination: ${this.state.destination}
                DepartDate: ${this.state.departDate}
                ReturnDate: ${this.state.returnDate}
                FlightType: ${this.state.flightType}
                FlightClass: ${this.state.flightClass}
                AdultNumber: ${this.state.adultNumber}
                ChildrenNumber: ${this.state.childrenNumber}
                InfantNumber: ${this.state.infantNumber}
            `)
            this.props.setQuery(querry);
        } else {
            console.log("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log('Updated state', this.state));
    };

    render() {
        // const { formErrors } = this.state;
        return (
            <div className="card shadow-none search-content">
                <SearchForm values = { this.state } handleChange = {this.handleChange} handleSubmit = { this.handleSubmit } />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { 
        querry: { origin, destination, departDate, returnDate, flightType, flightClass, adultNumber, childrenNumber, infantNumber, flightResults, fetchState  }
     } = state;
    return { origin, destination, departDate, returnDate, flightType, flightClass, adultNumber, childrenNumber, infantNumber, flightResults, fetchState   }
};

const mapDispatchToProps = dispatch => {
    return {
        getDestinationOptions: () => dispatch(getDestinationOptions()), //To get origin/destination options
        setQuery: querry => dispatch(setQuery(querry)), //To initiate search for flights
        };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Search));