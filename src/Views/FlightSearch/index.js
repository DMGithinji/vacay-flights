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
        if (!!sessionId) this.props.fetchQueryData(sessionId);
    }

    render() {
        return (
                <div>
                    {
                        this.props.searchType === "REDIRECT" ? (
                            <div>
                                {
                                    !this.props.loading ? (
                                        <div>
                                            <Search />
                                            <div className='content-wrapper row'>
                                                <div className='col-lg-3 mr-5'>
                                                    <Filter className='search-content-wrapper'/>
                                                </div>
                                                <div className='col-lg-8  p-0'>
                                                    <FilterResults  className='filter-content-wrapper'/>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Loader />
                                    )
                                }
                            </div>
                        ) : (
                            <div>
                                <Search />
                                {
                                    !this.props.loading ? (
                                        <div>
                                            <div className='content-wrapper row'>
                                                <div className='col-lg-3 mr-5'>
                                                    <Filter className='search-content-wrapper'/>
                                                </div>
                                                <div className='col-lg-8 p-0'>
                                                    <FilterResults  className='filter-content-wrapper'/>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Loader />
                                    )
                                }
                            </div>
                        )
                    }
                </div>
        )
    }
}

const mapStateToProps = state => {
    const { querry: { loading, searchType } } = state;
    return { loading, searchType }
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