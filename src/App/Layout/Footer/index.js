import React from 'react';

const date = new Date();

const year = date.getFullYear();
const Footer = () => {

    return (
        <div className="d-flex justify-content-center footer">
            Copyright {year} &nbsp; <span className="name">Vacay Holiday Deals</span>
        </div>
    )
}

export default Footer;