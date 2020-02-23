import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Navigation from './Navigation';
import MainHeader from './MainHeader';
import Loader from "../Loader";
import routes from "../../routes";
import Aux from "../../hoc/_Aux";

class Layout extends Component {

    render() {

        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                    <route.component {...props} />
                    )} />
            ) : (null);
        });



        return (
            <Aux>
                <div className="fixed-top">
                    <MainHeader />
                    <Navigation />
                </div>
                <div className="main-wrapper">
                    <div className="">
                        <Suspense fallback={<Loader/>}>
                            <Switch>
                                {menu}
                                <Redirect from="/" to={this.props.defaultPath} />
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </Aux>
        )
    }
}


const mapStateToProps = state => {
    const { config: { defaultPath } } = state;
    return { defaultPath  }
};

export default connect(mapStateToProps) (Layout);