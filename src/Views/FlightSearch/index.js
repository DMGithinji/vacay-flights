import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import FilterResults from './FlightResults';
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
                <div className='content-wrapper row'>
                    <div className='col-3 mr-5'>
                        <Filter className='search-content-wrapper'/>
                    </div>
                    <div className='col-8'>
                        <FilterResults  className='filter-content-wrapper'/>
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