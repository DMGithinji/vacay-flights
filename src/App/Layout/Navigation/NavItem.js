import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../../hoc/_Aux';
import { connect } from 'react-redux';

const NavItem = (props) => {

    const { title, icon, url } = props.item;
    const pathName = window.location.href.split('/');
    const isActive = (pathName, url ) => {
        return pathName.includes(url.slice(1));
    }  
    
    let navLinkClass = ['navlink', 'd-flex', 'flex-fill','align-items-center', 'mr-4'];
    if (isActive(pathName, url)) {
        navLinkClass = [...navLinkClass, 'active'];
    }

    /**Modify url to limit users from accessing pages they havent reached through booking process */
    const modedUrl = (url) => {
        if(url === "/search" ){
            return url;
        } else if ( url === "/passenger-details" && !!props.sessionId ){
            return `${url}/${props.sessionId}`;
        } else if(url==="/booking-payment" && !!props.sessionId && !!props.contactDetails.phone){
            return `${url}/${props.sessionId}`;
        } else if (url === "/select" && !!props.sessionId ){
            return '/select';
        } else {
            return '/#';
        }
    }

    return  (
        <Aux>
            <NavLink to={modedUrl(url)} exact={true} className={navLinkClass.join(' ')}  >
                <span className="icon-styling mr-2"><i className="material-icons"> {icon} </i></span>
                <span className="text">{title}</span> 
            </NavLink>
        </Aux>
    )
}


const mapStateToProps = state => {
    const { 
        querry: { sessionId, flightResults },
        passengers: { contactDetails }
    } = state;
    return { sessionId, flightResults, contactDetails }
};


export default connect(
    mapStateToProps,
)(NavItem);