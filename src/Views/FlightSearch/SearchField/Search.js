import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDestinationOptions } from '../../../store/actions/destinations';

import DatePicker from "react-datepicker";
import FlightType from './FlightType';
import PaxNumber from './PaxNumber';


class Search extends Component {

    state = {
        startDate: new Date()
        };

    componentDidMount(){
        this.props.getDestinationOptions();
    }
        
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render(){
        return (
            <div>
                <div className="searchCard">
                    <div className = "searchContent">
                        <div className = "dropdownSearchContent">
                            <FlightType />
                            <PaxNumber />
                        </div>
                        <form>
                            <div className="row"> 
                                <div className="col-md-5 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <label htmlFor="Origin">Origin</label>
                                            <input type="text" className="form-control" placeholder="Place of origin" />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <label htmlFor="Destination">Destination</label>      
                                            <input type="text" className="form-control" placeholder="Destination" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 d-flex flex-column">
                                            <label htmlFor="Destination">Departue Date</label>      
                                            <DatePicker
                                                className="form-control"
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-12  d-flex flex-column">
                                            <label htmlFor="Destination">Return Date</label>      
                                            <DatePicker
                                                className="form-control w-100"
                                                placeholderText="dd/mm/yyyy"
                                                onChange={this.handleChange}
                                            />                                    
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-12 search-btn">
                                    <button className = "btn btn-md">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        getDestinationOptions: () => dispatch(getDestinationOptions())
        };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);