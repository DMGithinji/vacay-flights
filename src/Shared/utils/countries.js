const countries = [
    {value:"AF", name: "Afghanistan"},
    {value:"AL", name: "Albania"},
    {value:"DZ", name: "Algeria"},
    {value:"AS", name: "American Samoa"},
    {value:"AD", name: "Andorra"},
    {value:"AO", name: "Angola"},
    {value:"AI", name: "Anguilla"},
    {value:"AQ", name: "Antarctica"},
    {value:"AR", name: "Argentina"},
    {value:"AM", name: "Armenia"},
    {value:"AW", name: "Aruba"},
    {value:"AU", name: "Australia"},
    {value:"AT", name: "Austria"},
    {value:"AZ", name: "Azerbaijan"},
    {value:"BS", name: "Bahamas"},
    {value:"BH", name: "Bahrain"},
    {value:"BD", name: "Bangladesh"},
    {value:"BB", name: "Barbados"},
    {value:"BY", name: "Belarus"},
    {value:"BE", name: "Belgium"},
    {value:"BZ", name: "Belize"},
    {value:"BJ", name: "Benin"},
    {value:"BM", name: "Bermuda"},
    {value:"BT", name: "Bhutan"},
    {value:"BO", name: "Bolivia"},
    {value:"BW", name: "Botswana"},
    {value:"BV", name: "Bouvet Island"},
    {value:"BR", name: "Brazil"},
    {value:"BN", name: "Brunei Darussalam"},
    {value:"BG", name: "Bulgaria"},
    {value:"BF", name: "Burkina Faso"},
    {value:"BI", name: "Burundi"},
    {value:"KH", name: "Cambodia"},
    {value:"CM", name: "Cameroon"},
    {value:"CA", name: "Canada"},
    {value:"CV", name: "Cape Verde"},
    {value:"KY", name: "Cayman Islands"},
    {value:"CF", name: "Central African Republic"},
    {value:"TD", name: "Chad"},
    {value:"CL", name: "Chile"},
    {value:"CN", name: "China"},
    {value:"CX", name: "Christmas Island"},
    {value:"CC", name: "Cocos (Keeling) Islands"},
    {value:"CO", name: "Colombia"},
    {value:"KM", name: "Comoros"},
    {value:"CG", name: "Congo"},
    {value:"CK", name: "Cook Islands"},
    {value:"CR", name: "Costa Rica"},
    {value:"CI", name: "Cote d'Ivoire"},
    {value:"HR", name: "Croatia (Hrvatska)"},
    {value:"CU", name: "Cuba"},
    {value:"CY", name: "Cyprus"},
    {value:"CZ", name: "Czech Republic"},
    {value:"DK", name: "Denmark"},
    {value:"DJ", name: "Djibouti"},
    {value:"DM", name: "Dominica"},
    {value:"DO", name: "Dominican Republic"},
    {value:"EC", name: "Ecuador"},
    {value:"EG", name: "Egypt"},
    {value:"SV", name: "El Salvador"},
    {value:"GQ", name: "Equatorial Guinea"},
    {value:"ER", name: "Eritrea"},
    {value:"EE", name: "Estonia"},
    {value:"ET", name: "Ethiopia"},
    {value:"FK", name: "Falkland Islands (Malvinas)"},
    {value:"FO", name: "Faroe Islands"},
    {value:"FJ", name: "Fiji"},
    {value:"FI", name: "Finland"},
    {value:"FR", name: "France"},
    {value:"GF", name: "French Guiana"},
    {value:"PF", name: "French Polynesia"},
    {value:"GA", name: "Gabon"},
    {value:"GM", name: "Gambia"},
    {value:"GE", name: "Georgia"},
    {value:"DE", name: "Germany"},
    {value:"GH", name: "Ghana"},
    {value:"GI", name: "Gibraltar"},
    {value:"GR", name: "Greece"},
    {value:"GL", name: "Greenland"},
    {value:"GD", name: "Grenada"},
    {value:"GP", name: "Guadeloupe"},
    {value:"GU", name: "Guam"},
    {value:"GT", name: "Guatemala"},
    {value:"GN", name: "Guinea"},
    {value:"GW", name: "Guinea-Bissau"},
    {value:"GY", name: "Guyana"},
    {value:"HT", name: "Haiti"},
    {value:"HN", name: "Honduras"},
    {value:"HK", name: "Hong Kong"},
    {value:"HU", name: "Hungary"},
    {value:"IS", name: "Iceland"},
    {value:"IN", name: "India"},
    {value:"ID", name: "Indonesia"},
    {value:"IQ", name: "Iraq"},
    {value:"IE", name: "Ireland"},
    {value:"IL", name: "Israel"},
    {value:"IT", name: "Italy"},
    {value:"JM", name: "Jamaica"},
    {value:"JP", name: "Japan"},
    {value:"JO", name: "Jordan"},
    {value:"KZ", name: "Kazakhstan"},
    {value:"KE", name: "Kenya"},
    {value:"KI", name: "Kiribati"},
    {value:"KR", name: "Korea, Republic of"},
    {value:"KW", name: "Kuwait"},
    {value:"KG", name: "Kyrgyzstan"},
    {value:"LV", name: "Latvia"},
    {value:"LB", name: "Lebanon"},
    {value:"LS", name: "Lesotho"},
    {value:"LR", name: "Liberia"},
    {value:"LY", name: "Libyan Arab Jamahiriya"},
    {value:"LI", name: "Liechtenstein"},
    {value:"LT", name: "Lithuania"},
    {value:"LU", name: "Luxembourg"},
    {value:"MO", name: "Macau"},
    {value:"MG", name: "Madagascar"},
    {value:"MW", name: "Malawi"},
    {value:"MY", name: "Malaysia"},
    {value:"MV", name: "Maldives"},
    {value:"ML", name: "Mali"},
    {value:"MT", name: "Malta"},
    {value:"MH", name: "Marshall Islands"},
    {value:"MQ", name: "Martinique"},
    {value:"MR", name: "Mauritania"},
    {value:"MU", name: "Mauritius"},
    {value:"YT", name: "Mayotte"},
    {value:"MX", name: "Mexico"},
    {value:"MD", name: "Moldova, Republic of"},
    {value:"MC", name: "Monaco"},
    {value:"MN", name: "Mongolia"},
    {value:"MS", name: "Montserrat"},
    {value:"MA", name: "Morocco"},
    {value:"MZ", name: "Mozambique"},
    {value:"MM", name: "Myanmar"},
    {value:"NA", name: "Namibia"},
    {value:"NR", name: "Nauru"},
    {value:"NP", name: "Nepal"},
    {value:"NL", name: "Netherlands"},
    {value:"AN", name: "Netherlands Antilles"},
    {value:"NC", name: "New Caledonia"},
    {value:"NZ", name: "New Zealand"},
    {value:"NI", name: "Nicaragua"},
    {value:"NE", name: "Niger"},
    {value:"NG", name: "Nigeria"},
    {value:"NU", name: "Niue"},
    {value:"NF", name: "Norfolk Island"},
    {value:"MP", name: "Northern Mariana Islands"},
    {value:"NO", name: "Norway"},
    {value:"OM", name: "Oman"},
    {value:"PW", name: "Palau"},
    {value:"PA", name: "Panama"},
    {value:"PG", name: "Papua New Guinea"},
    {value:"PY", name: "Paraguay"},
    {value:"PE", name: "Peru"},
    {value:"PH", name: "Philippines"},
    {value:"PN", name: "Pitcairn"},
    {value:"PL", name: "Poland"},
    {value:"PT", name: "Portugal"},
    {value:"PR", name: "Puerto Rico"},
    {value:"QA", name: "Qatar"},
    {value:"RE", name: "Reunion"},
    {value:"RO", name: "Romania"},
    {value:"RU", name: "Russian Federation"},
    {value:"RW", name: "Rwanda"},
    {value:"KN", name: "Saint Kitts and Nevis"},
    {value:"LC", name: "Saint LUCIA"},
    {value:"WS", name: "Samoa"},
    {value:"SM", name: "San Marino"},
    {value:"ST", name: "Sao Tome and Principe"},
    {value:"SA", name: "Saudi Arabia"},
    {value:"SN", name: "Senegal"},
    {value:"SC", name: "Seychelles"},
    {value:"SL", name: "Sierra Leone"},
    {value:"SG", name: "Singapore"},
    {value:"SK", name: "Slovakia (Slovak Republic)"},
    {value:"SI", name: "Slovenia"},
    {value:"SB", name: "Solomon Islands"},
    {value:"SO", name: "Somalia"},
    {value:"ZA", name: "South Africa"},
    {value:"ES", name: "Spain"},
    {value:"LK", name: "Sri Lanka"},
    {value:"SH", name: "St. Helena"},
    {value:"PM", name: "St. Pierre and Miquelon"},
    {value:"SD", name: "Sudan"},
    {value:"SR", name: "Suriname"},
    {value:"SZ", name: "Swaziland"},
    {value:"SE", name: "Sweden"},
    {value:"CH", name: "Switzerland"},
    {value:"SY", name: "Syrian Arab Republic"},
    {value:"TW", name: "Taiwan, Province of China"},
    {value:"TJ", name: "Tajikistan"},
    {value:"TZ", name: "Tanzania, United Republic of"},
    {value:"TH", name: "Thailand"},
    {value:"TG", name: "Togo"},
    {value:"TK", name: "Tokelau"},
    {value:"TO", name: "Tonga"},
    {value:"TT", name: "Trinidad and Tobago"},
    {value:"TN", name: "Tunisia"},
    {value:"TR", name: "Turkey"},
    {value:"TM", name: "Turkmenistan"},
    {value:"TC", name: "Turks and Caicos Islands"},
    {value:"TV", name: "Tuvalu"},
    {value:"UG", name: "Uganda"},
    {value:"UA", name: "Ukraine"},
    {value:"AE", name: "United Arab Emirates"},
    {value:"GB", name: "United Kingdom"},
    {value:"US", name: "United States"},
    {value:"UY", name: "Uruguay"},
    {value:"UZ", name: "Uzbekistan"},
    {value:"VU", name: "Vanuatu"},
    {value:"VE", name: "Venezuela"},
    {value:"VN", name: "Viet Nam"},
    {value:"VG", name: "Virgin Islands (British)"},
    {value:"VI", name: "Virgin Islands (U.S.)"},
    {value:"WF", name: "Wallis and Futuna Islands"},
    {value:"EH", name: "Western Sahara"},
    {value:"YE", name: "Yemen"},
    {value:"ZM", name: "Zambia"},
    {value:"ZW", name: "Zimbabwe"}
]

export default countries;