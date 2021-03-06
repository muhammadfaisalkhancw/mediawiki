// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_recent_category_items.js

	MediaWiki API Demos
	Demo of `Categorymembers` module : Get the ten articles most recently added to a category

	MIT License
*/

var params = {
		action: 'query',
		list: 'categorymembers',
		cmtitle: 'Category:Physics',
		cmsort: 'timestamp',
		cmdir: 'desc',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var pages = data.query.categorymembers,
		page;
	for ( page in pages ) {
		console.log( pages[ page ].title );
	}
} );
