import React from 'react';

import logo from '../../../assets/images/header/logo.png';
import phone from '../../../assets/images/header/phone-icon.png';

const MainHeader = () => {

    return (
        <div>
            <nav className= "navbar main-header" >
            <div className="main-header-content-wrapper d-flex justify-content-between ">
                <img id="main-logo" src={logo} alt="logo" className="logo" />
                <div className= "d-flex inline  align-items-center" >
                    <img id="main-logo" src={phone} alt="phone" height="20" width="30" className= "pr-2"/> &nbsp;
                    <div className= "d-flex flex-column" >
                        <span className="semi-bold">Contact</span>
                        <span>0712345678</span>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default MainHeader;