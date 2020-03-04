import React, { Component } from 'react';
import FlightResult from './FlightResult';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';


class SearchResults extends Component {
    render() {
        const flightResults = this.props.flightResults;
        const queryDetails = {
                                adultNumber: this.props.adultNumber, 
                                childrenNumber: this.props.childrenNumber, 
                                infantNumber: this.props.infantNumber, 
                            };

        return (
            <div>
                {
                    this.props.fetchState === 'error' ? (
                        <div className="alert alert-danger mt-4" role="alert">
                            <br></br>
                            <Typography className="mb-2">{
                                this.props.message==="Unexpected end of JSON input" ?
                                ( <span>No results for that particular flight booking currently!</span>) :
                                ( <span> {this.props.message} <br /> Please update your search</span>)
                            }</Typography>
                        </div>
                    ) : (
                        null
                    )
                }            
                {   
                    flightResults.map((flightDetails) => {
                        return (
                            <div key={flightDetails.outbound.flightid}>
                                <FlightResult 
                                    queryDetails = {queryDetails} 
                                    flightDetails={flightDetails} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { querry: { flightResults, adultNumber, childrenNumber, infantNumber, fetchState, message} } = state;
    return { flightResults, adultNumber, childrenNumber, infantNumber, fetchState, message }
}



export default connect(
    mapStateToProps,
)(SearchResults);
