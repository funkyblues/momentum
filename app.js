const calculator = {
  add: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  div: function(a, b) {
    return a / b;
  },
  mul: function(a, b) {
    return a * b;
  },
  pow: function(a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.mul(10, minusResult);
const divideResult = calculator.div(timesResult, plusResult);
const powerResult = calculator.pow(divideResult, minusResult);