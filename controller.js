
var buttonVariance = document.querySelector('.buttonVariance');
var buttonMean = document.querySelector('.buttonMean');
var buttonStdDeviation = document.querySelector('.buttonStdDeviation');

console.log(inputStdDeviation.value);

function updateData() {
  var variance = inputVariance.value;
  var mean = inputMean.value;
  data = [];
  generateData(mean, variance);
  clearSvg();
  draw();
}

function updateDataStd() {
  var stdDeviation = inputStdDeviation.value;
  stdDeviation = Number(inputStdDeviation.value)
  var variance = stdDeviation*stdDeviation
  var mean = inputMean.value;
  data = [];
  generateData(mean, variance);
  clearSvg();
  draw();
}


buttonStdDeviation.addEventListener('click', updateDataStd);
buttonVariance.addEventListener('click', updateData);
buttonMean.addEventListener('click', updateData);
