var request = require('request');
var query = require('./query');

exports.synonym = function(word, lang) {
	return new Promise(function(resolve, reject) {
		lang = (lang + "").toLowerCase();
		if (query.lang[lang]) {
			var q = query.synonyms(word, lang);
			console.log(q);
			getJSON(q, function(err, result) {
				if (err) {
					reject(err);
				} else {
					console.log("Resultad: ", JSON.stringify(result));
					resolve(result);
				}
			});
		} else {
			reject("Lang invalid. Only: es, en")
		}
	});
}

function getJSON(url, callback) {
	var scrap = require('scrapjs').Scrap;

	var manifest = {
		url: url,
		model: {
			link: {
				// A module
				$query: "#link > ul > li",
				// Another module
				$each: {
					// A pipe filter
					year: "a | text | uppercase",
					note: "this | text",
					url: 'li a | attr href',
				}
			}
		}
	}

	var s = new scrap(manifest);
	s.done(function(result) {
		console.log(result)
	});
}
