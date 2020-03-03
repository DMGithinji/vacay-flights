/**Flight Booking Views Routes */

import React from 'react';

const FlightSearch = React.lazy(() => import('./Views/FlightSearch'));
const PassengerDetails = React.lazy(() => import('./Views/PassengerDetails'));
const BookingPayments = React.lazy(() => import('./Views/BookingPayment'));
const BookingConfirmation = React.lazy(() => import('./Views/BookingConfirmation'));
const Form = React.lazy(() => import('./Views/PassengerDetails/Passenger'));

const routes = [
    { path: '#', exact: true, name: 'Flight Search', component: FlightSearch },
    { path: '/select/:sessionId', exact: false, name: 'Flight Select', component: FlightSearch },
    { path: '/new-search', exact: false, name: 'Flight Select', component: FlightSearch },
    { path: '/passenger-details/:sessionId', exact: false, name: 'Passenger Details', component: PassengerDetails },
    { path: '/passenger-details', exact: false, name: 'Passenger Details', component: Form },
    { path: '/booking-payment', exact: true, name: 'Booking Payments', component: BookingPayments },
    { path: '/booking-confirmation', exact: true, name: 'Booking Confirmation', component: BookingConfirmation },
];

export default routes;