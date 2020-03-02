/**Flight Booking Views Routes */

import React from 'react';

const FlightSearch = React.lazy(() => import('./Views/FlightSearch'));
const PassengerDetails = React.lazy(() => import('./Views/PassengerDetails'));
const BookingPayments = React.lazy(() => import('./Views/BookingPayment'));
const BookingConfirmation = React.lazy(() => import('./Views/BookingConfirmation'));

const routes = [
    { path: '#', exact: true, name: 'Flight Search', component: FlightSearch },
    { path: '/select/:sessionId', exact: false, name: 'Flight Select', component: FlightSearch },
    { path: '/passenger-details/:sessionId', exact: false, name: 'Passenger Details', component: PassengerDetails },
    { path: '/booking-payment', exact: true, name: 'Booking Payments', component: BookingPayments },
    { path: '/booking-confirmation', exact: true, name: 'Booking Confirmation', component: BookingConfirmation },
];

export default routes;