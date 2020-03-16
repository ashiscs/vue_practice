var a = 'Hello! ';
first();                                    // global scope

function first() {
  var b = 'Hi! ';
  second();                                 // same scope
  
  function second() {
    var c = 'Hey! ';
    third();                                // same scope
  }
}

function third() {
  var d = 'John';
  console.log(a + d);                     // different scope
}


// OUTPUT
// Hello! John


// (a + b + c + d) will not produce any result because (a and d) are in same scope but (b and c) are in different scope.

// EXECUTION STACK NOT EQUAL TO SCOPE CHAIN
