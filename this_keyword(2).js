// CONCEPT OF BORROWING FUNCTION

var john = {
  name: 'john',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);                   // prints the current object [Object: {name:"john",yearOfBirth:1990}]
    console.log(2016 - this.yearOfBirth);   // 26
  }
}

john.calculateAge();


var mike = {
  name: 'mike',
  yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;    // borrowing function
mike.calculateAge();                    // prints [Object: {name:"mike",yearOfBirth:1984}]
                                        // 32
