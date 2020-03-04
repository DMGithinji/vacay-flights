
import React, { Component } from "react";
import { SearchForm } from "./searchForm";

const minimumPassengers = (adultNumber, childrenNumber, infantNumber ) => {
    return (adultNumber + childrenNumber + infantNumber > 0)
}
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //validate form errors being empty
    Object.values(formErrors).forEach(val=> {
        val.length > 0 && (valid = false);
    });

    //validate form was filled out
    Object.values(rest).forEach(val=> {
        val === null && (valid = false);
    });

    return valid;
}

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
                origin: null, 
                destination: null, 
                departDate: new Date(), 
                returnDate: null,
                flightType: "RT", 
                flightClass: "Economy", 
                adultNumber: 1, 
                childrenNumber: 0, 
                infantNumber: 0,
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

    handleSubmit = e => {
        e.preventDefault();

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
        } else {
            console.log("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "origin":
                formErrors.origin = 
                    value.length < 0 ? "Place of origin is required" : "";
                    break;
            case "destination":
                formErrors.destination = 
                    value.length < 0 ? "Place of destination is required" : "";
                    break;
            case "departDate":
                formErrors.departDate = 
                    value.length < 0 ? "Date of departure is required" : "";
                    break;
            case "returnDate":
                formErrors.returnDate = "";
                    break;        
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        // const { formErrors } = this.state;
        return (
            <div className="card shadow-none">
                <SearchForm values = { this.state } handleChange = {this.handleChange} handleSubmit = { this.handleSubmit } />
            </div>
        );
    }
}

export default Search;