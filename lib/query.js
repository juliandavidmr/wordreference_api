var url = "http://www.wordreference.com";

module.exports = {
	url: url,
	synonyms: ((word, lang) => {
		if (lang == "en") {
			return url.concat("/synonyms/").concat(word);
		} else if (lang == "es") {
			return url.concat("/sinonimos/").concat(word);
		} else {
			return url.concat("/sinonimos/").concat(word);
		}
	}),
	lang: { //tag: hr -- &hr=es
		es: 'es',
		en: 'en',
		fr: 'fr'
	}
};
