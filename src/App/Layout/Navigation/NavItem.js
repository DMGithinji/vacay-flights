import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../../hoc/_Aux';

const NavItem = (props) => {
    const { title, icon, url, isActive } = props.item;
    let navLinkClass = ['navlink'];
    if (isActive) {
        navLinkClass = [...navLinkClass, 'active'];
    }
    return  (
        <Aux>
            <NavLink to={url} exact={true} className={navLinkClass.join(' ')}  >
                <span className="icon mr-2"><i className={icon} /></span>
                <span className="text">{title}</span> 
            </NavLink>
        </Aux>
    )
}

export default NavItem;