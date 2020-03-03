
import React, { Component } from "react";
import { Formik } from "formik";
import { SearchForm } from "./searchForm";
import * as Yup from "yup"


const validationSchema = Yup.object({
    name: Yup.string("Enter a name")
        .required("Name is required"),
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
    confirmPassword: Yup.string("Enter your password")
        .required("Confirm your password")
        .oneOf([Yup.ref("password")], "Password does not match")
})



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submit = data => {
        console.log(data);
    };

    render() {
        const values = { orgin: "BCN", destination: "MAD", departDate: new Date(), returnDate: new Date() };
        return (
            <div className="card shadow-none">

                    <Formik
                        render={props => <SearchForm {...props} />}
                        initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={this.submit}
                />
            </div>
        );
    }
}

export default Search;