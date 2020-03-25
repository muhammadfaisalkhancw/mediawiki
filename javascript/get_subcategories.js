//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_subcategories.js

    MediaWiki API Demos
    Demo of `Categorymembers` module : Get ten subcategories of a category

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "categorymembers",
    cmtitle: "Category:Wikipedia",
    cmtype: "subcat",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var category = response.query.categorymembers;
        for (var cat in category) {
            console.log(category[cat].title);
        }
    })
    .catch(function(error){console.log(error);});
