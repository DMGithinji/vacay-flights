import React, { Component } from 'react';
import Search from './SearchField/Search';
import Filter from './Filter';
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
                <div className='content-wrapper'>
                <div className='search-content-wrapper'>
                    <Filter />
                </div>
                </div>
                
                
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     const { gameState: { guess } } = state;
//     return { guess }
// }

export default FlightSearch;