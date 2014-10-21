var pigLatin = function (string) {
    var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var words = cleanString.split(" ");
    var result = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        word = word.toLowerCase();
        var vowels = /\b[aeiou]/;        
        if (word.match(vowels)) {
            result.push( word + "ay");
        } else {

            if ((word.charAt(0) === "q") && (word.charAt(1) === "u")){
                result.push(word.slice(2) + word.slice(0, 2) + "ay");
            } else {

                if (!word.slice(1).match(vowels)) {

                    if ((word.slice(1).charAt(0) === "q") && (word.slice(2).charAt(0) === "u")) {
                        result.push(word.slice(3) + word.charAt(0) + word.slice(1, 3) + "ay");
                    } else {


                        if (!word.slice(2).match(vowels)) {
                            result.push(word.slice(3) + word.charAt(0) + word.slice(1).charAt(0) + word.slice(2).charAt(0) + "ay");
                        } else {
                            result.push(word.slice(2) + word.charAt(0) + word.slice(1).charAt(0) + "ay");
                        };
                    }

                } else {
                    result.push(word.slice(1) + word.charAt(0) + "ay");
                }
            }
        };
    };
    return result.join(" ");
};

$(document).ready(function(){
    $("button").click(function(event){

        event.preventDefault();
        var answer = $("input.form-control").val();

        if(isNaN(answer)){

            $("div.output").append("<div class='well'>" + pigLatin(answer) + "</div>");

            $("input.form-control").val(" ");
            $("input.form-control").focus();

        } else {

            alert("This is not a number. Please enter a number");
            $("input.form-control").val(" ");
            $("input.form-control").focus();
        };

        $("div.output").find("div").click(function(){
        $(this).remove();
        $("input.form-control").val(" ");
        $("input.form-control").focus();
    });
        
    });
});
