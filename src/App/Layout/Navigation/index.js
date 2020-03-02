import React, {Component} from 'react';
import navigation from '../../../menu-items';
import Aux from '../../../hoc/_Aux'
import NavItem from './NavItem';

class Navigation extends Component {
    state = {
        scrollWidth: 0,
        prevDisable: true,
        nextDisable: false
    };
    
    render() {
    const pathName = window.location.href.split('/');
    const isActive = (pathName, url ) => {
        console.log ('isActive', pathName.includes(url.slice(1)));
        return pathName.includes(url.slice(1));
    }
    const items = navigation.items[0].children;

    const navContent = (
        <div className={'navbar'}>
            {   
                items.map((child) => {
                    return (
                        <NavItem key = {child.id} item={child} isActive = {isActive(pathName, child.url)} />
                    )
                })
            }
        </div>
    );

    return (
        <Aux>
            <nav className={'navigation'}>
                {navContent}
            </nav>
        </Aux>
    );
    }
}

export default Navigation;