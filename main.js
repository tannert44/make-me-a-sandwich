var sandwich = {
   pickle: false,
   lettuce: false,
   tomato: false,
   ketchup: false,
   mustard: false,
   mayo: false
};

var changePickle = function() {
 sandwich.pickle = true;
};

var changeLettuce = function() {
  sandwich.lettuce = true;
};

var changeTomato = function() {
  sandwich.tomato = true;
}
var changeKetchup = function() {
  sandwich.ketchup = true;
};

var changeMustard = function() {
  sandwich.mustard = true;
};

var changeMayo = function() {
  sandwich.mayo = true;
};

var userInputPickle = prompt("Type yes or no: Do you want pickle on your sandwich?");
var userInputLettuce = prompt("Type yes or no: Do you want lettuce on your sandwich?");
var userInputTomato = prompt("Type yes or no: Do you want tomato on your sandwich?");
var userInputKetchup = prompt("Type yes or no: Do you want ketchup on your sandwich?");
var userInputMustard = prompt("Type yes or no: Do you want mustard on your sandwich?");
var userInputMayo = prompt("Type yes or no: Do you want mayo on your sandwich?");

var makeMeASandwich = function(pickle, lettuce, tomato, ketchup, mustard, mayo) {
  var outputSentence = "My sandwich has: <br>";
  
  if(pickle.toLowerCase() === "yes") {
    changePickle();
  }
  
  if(sandwich.pickle === true){
    outputSentence += "-pickle<br>";
  }
  
  if(lettuce.toLowerCase() === "yes") {
    changeLettuce();
  }
  
  if(sandwich.lettuce === true){
    outputSentence += "-lettuce<br>";
  }
  
  if(tomato.toLowerCase() === "yes") {
    changeTomato();
  }
  
  if(sandwich.tomato === true){
    outputSentence += "-tomato<br>";
  }
  
  if(ketchup.toLowerCase() === "yes") {
    changeKetchup();
  }
  
  if(sandwich.ketchup === true){
    outputSentence += "-ketchup<br>";
  }
  
  if(mustard.toLowerCase() === "yes") {
    changeMustard();
  }
  
  if(sandwich.mustard === true){
    outputSentence += "-mustard<br>";
  }
  
  if(mayo.toLowerCase() === "yes") {
    changeMayo();
  }
  
  if(sandwich.mayo === true){
    outputSentence += "-mayo<br>";
  }
  
  document.write(outputSentence);
}
  
makeMeASandwich(userInputPickle, userInputLettuce, userInputTomato, userInputKetchup, userInputMustard, userInputMayo);