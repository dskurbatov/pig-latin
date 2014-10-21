var pigLatin = function (string) {
    var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var words = cleanString.split(" ");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        word = word.toLowerCase();
        var vowels = /\b[aeiou]/;        
        if (word.match(vowels)) {
            result += word + "ay";
        } else {

            if ((word.charAt(0) === "q") && (word.charAt(1) === "u")){
                result += word.slice(2) + word.slice(0, 2) + "ay";
            } else {

                if (!word.slice(1).match(vowels)) {

                    if ((word.slice(1).charAt(0) === "q") && (word.slice(2).charAt(0) === "u")) {
                        result += word.slice(3) + word.charAt(0) + word.slice(1, 3) + "ay";
                    } else {


                        if (!word.slice(2).match(vowels)) {
                            result += word.slice(3) + word.charAt(0) + word.slice(1).charAt(0) + word.slice(2).charAt(0) + "ay ";
                        } else {
                            result += word.slice(2) + word.charAt(0) + word.slice(1).charAt(0) + "ay";
                        };
                    }

                } else {
                    result += word.slice(1) + word.charAt(0) + "ay";
                }
            }
        };
    };
    return result;
};


