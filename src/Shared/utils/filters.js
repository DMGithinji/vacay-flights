const filterOptions =  [
        {
            title: "Number of stops",
            type: "radio",
            value: "All",
            options: [
                "All",
                "Direct",
                "1 Stop",
                "2 Stops"
            ]
        },
        {
            title: "Duration",
            type: "slider",
            value: "10",
        },
        {
            title: "Airfares",
            type: "slider",
            value: "100",
        },
        {
            title: "Travel Time",
            type: "slider",
            value: "10",
        },
        {
            title: "Departure Time",
            type: "slider",
            value: "20",
        },
        {
            title: "Arrival Time",
            type: "slider",
            value: "40",
        },
    ]

export default filterOptions;
