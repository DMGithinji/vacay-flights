import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../../hoc/_Aux';

const NavItem = (props) => {

    const { title, icon, url } = props.item;
    const pathName = window.location.href.split('/');
    const isActive = (pathName, url ) => {
        return pathName.includes(url.slice(1));
    }  
    
    let navLinkClass = ['navlink', 'd-flex', 'flex-fill', 'inline', 'align-items-center', 'mr-4', 'ml-4'];
    if (isActive(pathName, url)) {
        navLinkClass = [...navLinkClass, 'active'];
    }
    return  (
        <Aux>
            <NavLink to={url} exact={true} className={navLinkClass.join(' ')}  >
                <span className="icon-styling mr-2"><i className="material-icons"> {icon} </i></span>
                <span className="text">{title}</span> 
            </NavLink>
        </Aux>
    )
}

export default NavItem;