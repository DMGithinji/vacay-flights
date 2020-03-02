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
                    title: 'Search',
                    type: 'item',
                    icon: 'feather icon-search',
                    url: '/search'
                },
                {
                    id: 'select',
                    title: 'Select Flight',
                    type: 'item',
                    icon: 'feather icon-search',
                    url: '/select'
                },
                {
                    id: 'passenger-details',
                    title: 'Passenger Data',
                    type: 'item',
                    icon: 'feather icon-clipboard',
                    url: '/passenger-details'
                },
                {
                    id: 'booking-payment',
                    title: 'Flight Payment',
                    type: 'item',
                    icon: 'feather icon-menu',
                    url: '/booking-payment'
                },
                {
                    id: 'booking-confirmation',
                    title: 'Confirmation',
                    type: 'item',
                    icon: 'feather icon-shopping-cart',
                    url: '/booking-confirmation',
                },
            ]
        },
    ]
}