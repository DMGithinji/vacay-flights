import React from 'react';

import logo from '../../../assets/images/header/logo.png';
import call from '../../../assets/images/call2.png';
import email from '../../../assets/images/email2.png';

const MainHeader = () => {

    return (
        <div>
            <nav className= "main-header" >
                    <div className="header-wrapper">
                        <div className="navbar d-flex justify-content-between">
                            <img id="main-logo" src={logo} alt="logo" className="logo" />
                                <div className="d-flex inline">
                                    <div className= "d-flex  align-items-center mr-auto pr-2" >
                                        <img id="main-logo" src={email} alt="email" height="30" width="40" className= "pr-2"/> &nbsp;
                                        <div className= "d-flex flex-column" >
                                            <span className="email">Email us at</span>
                                            <small>booking@vacay.co.ke</small>
                                        </div>
                                    </div>
                                    <div className= "d-flex  align-items-center mr-auto" >
                                            <img id="main-logo" src={call} alt="phone" height="30" width="40" className= "pr-2"/> &nbsp;
                                            <div className= "d-flex flex-column" >
                                                {/* <span className="semi-bold">Contact</span> */}
                                                <small>+254 716 875656</small>
                                                <small>+254 753 003769</small>
                                            </div>
                                    </div>                        
                                </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default MainHeader;