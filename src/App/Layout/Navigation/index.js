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
    const pathName = window.location.href.split('/').pop();
    const items = navigation.items[0].children;

    const navContent = (
        <div className={'navbar'}>
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
            <nav className={'navigation'}>
                {navContent}
            </nav>
        </Aux>
    );
    }
}

export default Navigation;