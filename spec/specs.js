describe("pigLatin", function() {
   it("should add 'ay' to the end of the word if word starts with 'a'", function(){
   	pigLatin("atin").should.equal("atinay");
   });

   it("should add 'ay' to the end of the word if word starts with 'e'", function(){
   	pigLatin("equal").should.equal("equalay");   	
   });

   it("should add 'ay' to the end of the word if word starts with 'i'", function(){
   	pigLatin("image").should.equal("imageay");
   });

   it("should add 'ay' to the end of the word if word starts with 'o'", function(){
   	pigLatin("opportunity").should.equal("opportunityay");
   });

   it("should add 'ay' to the end of the word if word starts with 'u'", function(){
   	pigLatin("unix").should.equal("unixay");
   });

   it("should cut first letter and add to the end along with 'ay' if word starts with consonant", function(){
   	pigLatin("latin").should.equal("atinlay");
   });

   it("should cut first and second letter and add them to the end along with 'ay' if first and second  letters are consonants", function(){
   	pigLatin("phone").should.equal("onephay");
   });

   it("should cut first, second and third letters and add them to the end along with 'ay' if first, second and third letters are consonants", function(){
   	pigLatin("school").should.equal("oolschay");
   });

   it("should cut 'u' along with 'q' if 'u' comes after 'q'", function(){
   	pigLatin("question").should.equal("estionquay");
   });

   it("should cut 'u' along with 'q' if 'u' comes after 'q'. 'q' is a second letter.", function(){
   	pigLatin("squeal").should.equal("ealsquay");
   });   
  });

  
