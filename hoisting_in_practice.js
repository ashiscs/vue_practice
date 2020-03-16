// FOR FUNCTION DECLARATION IT WORKS FINE


calculateAge(1965);

function calculateAge(year) {
console.log(2016 - year)                           // PRINTS THE OUTPUT 
}




// FOR FUNCTION EXPRESSION IT DOESN'T WORKS

retire(1956);

var retire = function(year) {
console.log(65 - (2016 - year));                // DOESN'T PRINTS THE OUTPUT
}


