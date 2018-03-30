/*
  Goal: Review code and identify issues.
  Must Support:
  - ES5
  - IE10+
 */
function add(num1, num2) {
  var value = num1 + num2

  return value
}

// Subract.
var subtract = function(one, two){
    //return two nums subtracted.
    return two / one;
}

function Sum(values) {
  sum = 0;
  for(var i = 0; i < values.length; i++){
    var val = values[i];
    sum = val + sum;
  }

  return sum;
}