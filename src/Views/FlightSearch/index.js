import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import FilterResults from './FlightResults';
import {connect} from 'react-redux';
import { fetchQueryData } from '../../store/actions/querryState';
import Loader from '../../App/Loader';


class FlightSearch extends Component {

    componentDidMount(){
        const { sessionId } = this.props.match.params;
        this.props.fetchQueryData(sessionId);
        console.log('props', this.props);
    }


    render() {
        return (
                !this.props.loading ? (
                    <div>
                        <Search />
                        <div className='content-wrapper row'>
                            <div className='col-lg-3 mr-5'>
                                <Filter className='search-content-wrapper'/>
                            </div>
                            <div className='col-lg-8'>
                                <FilterResults  className='filter-content-wrapper'/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loader />
                )
        )
    }
}

const mapStateToProps = state => {
    const { querry: { loading } } = state;
    return { loading }
}

const mapDispatchToProps = dispatch => {
    return {
            fetchQueryData: session_id => dispatch(fetchQueryData(session_id))
        };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightSearch);