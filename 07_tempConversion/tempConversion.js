const convertToCelsius = function(temp) {

  let newTemp = (temp - 32) * 5/9;

  if (newTemp === 0) {
    return 0;
  }

  return parseFloat(newTemp.toFixed(1));
};

const convertToFahrenheit = function(temp) {

  let newTemp = (temp * 9/5) + 32;

  if (newTemp === 0) {
    return 0;
  }

  return parseFloat(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
