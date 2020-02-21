import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom';
import navigation from '../../../menu-items';
import Aux from './../../../hoc/_Aux'
import NavItem from './NavItem';

let navClass = ['theme-horizontal', 'navigation'];
let navBarClass = [ 'navbar'];


class Navigation extends Component {
    state = {
        scrollWidth: 0,
        prevDisable: true,
        nextDisable: false
    };

    
    render() {
    const pathName = window.location.href.split('/').pop()
    console.log('pathName', pathName);

    const items = navigation.items[0].children;
    const navContent = (
        <div className={navBarClass.join(' ')}>
            {   
                items.map((child) => {
                    return (
                        <NavItem key = {child.id} item={child} isActive = { pathName === child.url ? true : false} />
                    )
                })
            }
        </div>
    );

    return (
        <Aux>
            <nav className={navClass.join(' ')}>
                {navContent}
            </nav>
        </Aux>
    );
    }
}

export default Navigation;