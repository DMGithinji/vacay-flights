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
        console.log(flightResults);

        return (
            <div>
                <Typography className="mb-2">Select a Flight</Typography>            
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
    const { querry: { flightResults, adultNumber, childrenNumber, infantNumber} } = state;
    return { flightResults, adultNumber, childrenNumber, infantNumber }
}



export default connect(
    mapStateToProps,
)(SearchResults);
