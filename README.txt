author: Juan Carlos Tellez
date: 16-01-2020
email: juanc.tellez@gmail.com

What is this?
	This App simulate a banking panel for a client. The user can consult balance, transfer money from his accounts to other accounts

how is builded it?
	i built the app using the technologies:	
		- html5
		- css3
		- javascript

	App's structure
		- The app has three html files: index, panel and transfer. Index.html shows login form, panel.html page shows home page and transfer.html
		- For visual behavior the app use two css files: 
			1 - theme.css: Contains all the rules to customized the html elements like color, size of fonts, hover behavior, etc.
			2 - uikit.min.css: It's a css framework, it help us to build a responsive web in a fast way
		- The way to share data from one page to another i used javascript, also i used javascript for funcionallity as simulate trasfering money, to get data from json file. The app has:
			1 - scripts.js: Funcionallity for access to app
			2 - calls.js: Funcionallity as logout, transfer money, transfer cancelling, get data for transactions or balance accounts
			3 - chart.js: It obtain data and shows pie chart
			4 - uikit.min.js: Funcionallity to show alerts, fonts, etc.
			4 - uikit.icons.min.js: Funcionallity to show fonts.
		- Application has two files to consume: transactions.json and balance.json. These files help us to fill charts and tables


	How to install?
		- The application must be on a web server to work.
