// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	prefixsearch.js

	MediaWiki API Demos
	Demo of `Prefixsearch` module: Perform a prefix search for page titles

	MIT License
*/

var params = {
		action: 'query',
		list: 'prefixsearch',
		pssearch: 'Star Wars',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var pages = data.query.prefixsearch,
		page;
	for ( page in pages ) {
		console.log( pages[ page ].title );
	}
} );
