import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import navigation from '../../menu-items';
import CONSTANTS from "../../store/constants";
import Aux from "../../hoc/_Aux";

class Breadcrumbs extends Component {
    state = {
        main: [],
        item: []
    };

    componentDidMount() {
        (navigation.items).map((item, index) => {
            if (item.type && item.type === 'group') {
                this.getCollapse(item, index);
            }
            return false;
        });
    };

    UNSAFE_componentWillReceiveProps = () => {
        (navigation.items).map((item, index) => {
            if (item.type && item.type === 'group') {
                this.getCollapse(item);
            }
            return false;
        });
    };

    /**Sets page details to breadcrumb */
    getCollapse = (item) => {
        if (item.children) {
            (item.children).filter( pageDetail => {
                const pathName = window.location.href.split('/');
                const isActive = (pathName, url ) => {
                    return pathName.includes(url.slice(1));
                } 
                if (pageDetail.type && pageDetail.type === 'item') {
                    if (isActive(pathName, pageDetail.url)) {
                        this.setState({item: pageDetail, main: item});
                    }
                }
                return false;
            });
        }
    };

    render() {
        let main, item;
        let breadcrumb = '';
        let pageTitle = '';


        if (this.state.item && this.state.item.type === 'item') {
            pageTitle = this.state.item.title;
            item = (
                <li className="breadcrumb-item">
                    <a href={CONSTANTS.BLANK_LINK}>{pageTitle}</a>
                </li>
            );

            if(this.state.item.breadcrumbs !== false) {
                breadcrumb = (
                            <div className="row align-items-center content-wrapper breadcrumbs">
                                <div className="col-md-12 pb-0 pt-2">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">{pageTitle}</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/"><i className="feather icon-home"/></Link>
                                        </li>
                                        {main}
                                        {item}
                                    </ul>
                                </div>
                            </div>
                );
            }

        }

        document.title = pageTitle + ' | Flights';

        return (
            <Aux>
                {breadcrumb}
            </Aux>
        );
    }
}

export default Breadcrumbs;