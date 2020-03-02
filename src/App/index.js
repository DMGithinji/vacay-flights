import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './ScrollToTop';
import routes from "../route";

const Layout = Loadable({
    loader: () => import('./Layout'),
    loading: Loader
});

class App extends Component {
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
                <ScrollToTop>
                    {/* <Suspense fallback={<Loader/>}> */}
                        <Switch>
                            {menu}
                            <Route path="/" component={Layout} />
                        </Switch>
                    {/* </Suspense> */}
                </ScrollToTop>
            </Aux>
        );
    }
}

export default App;