import React, { Component } from 'react';
import { results } from '../../../Shared/utils/flights'
import FlightResult from './FlightResult';
import Typography from '@material-ui/core/Typography';


class SearchResults extends Component {
    render() {
        const flightResults = results.aerocrs.flights.flight;
        console.log(flightResults);
        return (
            <div>
                <Typography className="mb-2">Select a Flight</Typography>            
                {   
                    flightResults.map((flight) => {
                        return (
                        <div key={flight.fltnum}>
                            <FlightResult flight={flight} />
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default SearchResults;

