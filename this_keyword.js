// REGULAR FUNCTION CALL

Age(1985);

function Age(year) {
  console.log(2016 - year);
  console.log(this);         // this prints the window object
}


// METHOD CALL

var john = {
  name: 'john',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);           // prints the object {name:"john", yearOfBirth:1990}
    console.log(this.yearOfBirth);  // 1990
  }
}

john.calculateAge();
