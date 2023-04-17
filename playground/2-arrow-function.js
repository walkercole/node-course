// const square = function (x) {
//   return x * x;
// };

// arrow function
// const square = (x) => {
//   return x * x;
// };

// implicit return
// const square = (x) => x * x;

// console.log(square(6));

const event = {
  name: 'Tech Meet up',
  guestList: ['Walker', 'Jen', 'Mike'],
  // es6 definition syntax
  printGuestList() {
    console.log('Guest List for ' + this.name);
    // arrow functions inherit their `this` value, makes them poor candidates for methods
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
    });
  },
};

event.printGuestList();
