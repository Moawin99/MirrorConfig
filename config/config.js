/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: 'localhost', // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: '/', // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: [ '127.0.0.1', '::ffff:127.0.0.1', '::1' ], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, // Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: '', // HTTPS private key path, only require when useHttps is true
	httpsCertificate: '', // HTTPS Certificate path, only require when useHttps is true

	language: 'en',
	logLevel: [ 'INFO', 'LOG', 'WARN', 'ERROR' ], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: 'imperial',
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: 'alert'
		},
		{
			module: 'updatenotification',
			position: 'top_bar'
		},
		{
			module: 'clock',
			position: 'top_left',
			config: {}
		},
		{
			module: 'calendar',
			header: 'My Calendar',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check',
						url:
							'https://calendar.google.com/calendar/ical/msmoawad99%40gmail.com/private-07f0e0f555660c57dfa4c85d55c34fa6/basic.ics'
					},
					{
						symbol: 'calendar-check',
						url: 'webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'middle_center',
			config: {
				compliments: {
					anytime: [ 'just vibe', 'Hello' ],
					morning: [ 'Good morning Mark!', 'Enjoy your day!', 'Sleep well?' ],
					afternoon: [ 'Sheeeesh', 'Sick Fit' ],
					evening: [ "relax", "We just vibin'" ],
					'....-01-01': [ 'Happy new year!' ],
					'....-10-28': [ 'Happy Birthday!' ],
					'....-12-25': [ 'Merry Christmas' ],
					'....-01-07': [ 'Merry Christmas' ]
				}
			}
		},
		// {
		// 	module: "currentweather",
		// 	position: "top_right",
		// 	config: {
		// 		location: "New York",
		// 		locationID: "5128433", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		appid: "cc6561fd802436184c78f2bbfbbc205f",
		// 		showWindDirection: false,
		// 		appendLocationNameToHeader: false
		// 	}
		// },
		// {
		// 	module: "weatherforecast",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		location: "New York",
		// 		locationID: "5128433", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		appid: "cc6561fd802436184c78f2bbfbbc205f",
		// 		colored: true
		// 	}
		// },
		{
			disabled: false,
			module: 'MMM-WeatherOrNot',
			position: 'top_right',
			config: {
				location: 'nesconset', // See instructions
				locationCode: '40d85n73d15', // See instructions
				languages: 'en', // See Languages list
				tempUnits: 'F', // F or C
				font: 'Tahoma', // See Font list
				textColor: '#ffffff', // Hex color codes.
				htColor: '#ffffff', // high temp color. Hex color codes.
				ltColor: '#00dfff', // low temp color. Hex color codes.
				sunColor: '#febc2f', // Hex color codes.
				moonColor: '#dfdede', // Hex color codes.
				cloudColor: '#dfdede', // Hex color codes.
				cloudFill: '#1f567c', // Hex color codes.
				rainColor: '#93bffe', // Hex color codes.
				snowColor: '#dfdede', // Hex color codes.
				height: '550px', // module is responsive to changes
				width: '315px', // module is responsive to changes
				label: 'Nesconset', // Location seems logical . .
				label2: '', // . . . or anything you like
				days: '7', // 3, 5 or 7
				theme: 'dark', // See Themes list *** theme overrides bgColor. ***
				bgColor: '#000000', // theme overrides bgColor.
				icons: 'Climacons Animated', // Iconvault, Climacons or Climacons Animated
				animationSpeed: 3000,
				updateInterval: 10 * 60 * 1000
			}
		},

		// {
		// 	module: 'random_quotes',
		// 	position: 'bottom_bar',
		// 	config: {
		// 		// The config property is optional
		// 		// Without a config, a random quote is shown,
		// 		// selected from all of the categories available.
		// 	}
		// },
		{
			module: 'MMM-DailyBibleVerse',
			position: 'bottom_center',	// This can be any of the regions. Best result is in the bottom_bar as verses can take multiple lines in a day.
			config: {
				version: 'NKJV', // This can be changed to any version you want that is offered by Bible Gateway. For a list, go here: https://www.biblegateway.com/versions/,
				size: 'medium' // default value is medium, but can be changed. 
			}
		},
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	config: {
		// 		type: 'current',
		// 		locationID: "5128433",
		// 		location: "New York",
		// 		apiKey: "cc6561fd802436184c78f2bbfbbc205f"

		// 	}
		// },
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },
		{
			module: 'MMM-NowPlayingOnSpotify',
			position: 'bottom_right',

			config: {
				showCoverArt: true,
				clientID: '1c979294deb543a79218f8ef932e1695',
				clientSecret: '9e003ebcffbb4877a67b1cf59135f9f8',
				accessToken:
					'BQCyl2cA99jStUkvlwxvEpC9aNrwnr4OqrR67LlZBTrddQMGkFp8-MNvbTKlmEom0QvjtIrvhTg5e4iZBQ9F0vhGQaRUiL62zIpymb-TUGSj2G2tijXNYgCU2j4SIsEq7Qk6Uan_EuZolsiLOo1AnrxMmnQ',
				refreshToken:
					'AQDjS8nkepkS_aoHZWk4bWUusyR-Ps-3mZQFE-6tlsHqpuqISzLta4ALK7LyXA4L8lqxUwune3kWi1IWy4vCDHqxxoo3o8Cyttu9QR7xqS3BfWP0h8B8YpJT-P7QF3RNvNM'
			}
		},
		// {
		// 	module: 'MMM-GooglePhotos',
		// 	position: 'bottom_left',
		// 	config: {
		// 		albums: [ 'Mirror' ], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
		// 		updateInterval: 1000 * 60, // minimum 10 seconds.
		// 		sort: 'random', // "old", "new"
		// 		uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
		// 		// condition: {
		// 		// 	fromDate: null, // Or "2018-03", RFC ... format available
		// 		// 	toDate: null, // Or "2019-12-25",
		// 		// 	minWidth: null, // Or 400
		// 		// 	maxWidth: null, // Or 8000
		// 		// 	minHeight: null, // Or 400
		// 		// 	maxHeight: null, // Or 8000
		// 		// 	minWHRatio: null,
		// 		// 	maxWHRatio: null,
		// 		// 	// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
		// 		// 	},
		// 		showWidth: 400, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
		// 		showHeight: 425
		// 		// timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
		// 	}
		// },
		// {
		// 	module: "MMM-EasyPix",
		// 	position: "bottom_left",
		// 	config: {
		// 		picName: "audi.png", // Enter the picture file name.
		// 		maxWidth: "20%",        // Size picture precisely. Retains aspect ratio.
		// 		sounds: ["1.mp3", "me2.mp3"],  // mp3 sound file names in quotes seperated by commas for Hello-Lucy
		// 		updateInterval: 30 * 60 * 1000,     // updates display
		// 			animationSpeed: 3000,
		// 	}
		// },
		// {
		// 	disabled: false,
		// 	module: 'MMM-NBA',
		// 	position: 'middle_center',
		// 	config: {
		// 		maxWidth: "500px",
		// 		header: true,
		// 		logo: true,
		// 		focus_on: ["Trail Blazers","Bulls", "Knicks"]
		// 	}
		// },
		{
			module: "MMM-MyScoreboard",
			position: "bottom_left",
			classes: "default everyone",
			header: "My Teams",
			config: {
				showLeagueSeparators: false,
				colored: true,
				viewStyle: "mediumLogos",
				sports: [
				{
					league: "NBA",
					// groups: ["Pacific"]
				},
				{
					league: "MLB",
					// groups: ["Atlantic", "Metropolitain", "Central", "Pacific"]
				}
				]

			}
		},
		// {
		// 	module: 'MMM-voice',
		// 	position: 'bottom_bar',
		// 	config: {
		// 		microphone: 1,
		// 		keyword: 'MAGIC MIRROR',
		// 		timeout: 15
		// 	}
		// }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
	module.exports = config;
}
