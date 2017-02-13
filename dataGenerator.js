var data = [];
var yAxisHeight = 1;

function pdf(x, variance, mean) {
  var m = Math.sqrt(variance) * Math.sqrt(2 * Math.PI);
  var e = Math.exp(-Math.pow(x - mean, 2) / (2 * variance));
  return e / m;
};

function generateData(mean, variance) {
  if (mean === ""){
    mean = 0;
  }
  if (variance === ""){
    variance = 1;
  }
  variance = Number(variance);
  mean = parseInt(mean);
  var start =  mean - variance - 2;
  var end = mean + variance + 2;
  var step =  0.1;
  var x = start;
  var y;
  var day;

  for (x; x <= end; x = x + step) {
    y = pdf(x, variance, mean);
    day = getDates(x)

    el = {
      "day": day,
      "q": x,
      "p": y
    }
    data.push(el);
    getyAxisHeight(data)
  }
}

function getDates(x) {
  var oneDay = 86400000;
  var ms = new Date().getTime() + oneDay * x;
  return new Date(ms);
}


function maxY(data) {
  var max = 0;
  for(var line in data) {
    if (data[line].p > max) {
      max = data[line].p
      }
  }
  return max;
}

function getyAxisHeight(data){
  var max = maxY(data)
  if (max >= 0.75) {
    yAxisHeight = 1;
  }
  else if (max < 0.75 && max >= 0.5) {
    yAxisHeight = 0.8;
  }
  else if (max < 0.5 && max >= 0.25) {
    yAxisHeight = 0.5;
  }
  else{
    yAxisHeight = 0.3;
  }
}
