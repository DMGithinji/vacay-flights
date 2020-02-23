import React, { Component } from 'react';
import Search from './SearchField/Search';
// import connect from 'react-redux';


class FlightSearch extends Component {

    componentDidMount(){
        this.getDestinations();
    }

    getDestinations = () => {
        
    }

    render() {
        return (
            <div>
                <Search />
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     const { gameState: { guess } } = state;
//     return { guess }
// }

export default FlightSearch;