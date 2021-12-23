const calculator = {
  add: function(a, b) {
    console.log(a + b);
  },
  minus: function(a, b) {
    console.log(a - b);
  },
  div: function(a, b) {
    console.log(a / b);
  },
  mul: function(a, b) {
    console.log(a * b);
  },
  pow: function(a, b) {
    console.log(a ** b);
  },
};

calculator.add(2, 5);
calculator.minus(4, 2);
calculator.div(30, 10);
calculator.pow(3, 4);