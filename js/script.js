var pigLatin = function (word) {
	word = word.toLowerCase();
    var vowels = /\b[aeiou]/;
    var firstLetter = word.charAt(0);
    var restOfWord = word.slice(1);
    if (word.match(vowels)) {
        return firstLetter + restOfWord + "ay";
    } else {

    	if((word.charAt(0) === "q") && (word.charAt(1) === "u")){
        		return word.slice(2) + word.slice(0, 2) + "ay";
        	};

        if (!restOfWord.match(vowels)) { 

        	if((restOfWord.charAt(0) === "q") && (restOfWord.charAt(1) === "u")){
        		return restOfWord.slice(2) + firstLetter + restOfWord.slice(0, 2) + "ay";
        	};	

            if (!restOfWord.slice(1).match(vowels)) {
                return restOfWord.slice(2) + firstLetter + restOfWord.charAt(0) + restOfWord.slice(1).charAt(0) + "ay";
            } else {
                return restOfWord.slice(1) + firstLetter + restOfWord.charAt(0) + "ay";
            };
        } else {
            return restOfWord + firstLetter + "ay";
        }

    };
};
