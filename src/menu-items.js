export default {
    items: [
        {
            id: 'admin-panel',
            title: 'Vacay Flights',
            type: 'group',
            icon: 'icon-monitor',
            children: [
                {
                    id: 'search',
                    title: 'Search Flight',
                    type: 'item',
                    icon: 'search',
                    url: '/search'
                },               
                {
                    id: 'select',
                    title: 'Select Flight',
                    type: 'item',
                    icon: 'flight_takeoff',
                    url: '/select'
                },
                {
                    id: 'passenger-details',
                    title: 'Passenger Details',
                    type: 'item',
                    icon: 'assignment',
                    url: '/passenger-details'
                },
                {
                    id: 'booking-payment',
                    title: 'Flight Payment',
                    type: 'item',
                    icon: 'account_balance_wallet',
                    url: '/booking-payment'
                },
                {
                    id: 'booking-confirmation',
                    title: 'Confirmation',
                    type: 'item',
                    icon: 'check',
                    url: '/#',
                },
            ]
        },
    ]
}