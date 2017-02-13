
var inputMean = document.querySelector('.inputMean');
var inputVariance = document.querySelector('.inputVariance');
var inputStdDeviation = document.querySelector('.inputStdDeviation');
var body = document.querySelector('body');

// console.log(inputStdDeviation);

function clearSvg(){
  var svg = document.querySelector('svg');
  svg.remove()
}

function draw(){
  var margin = {
          top: 20,
          right: 20,
          bottom: 30,
          left: 50
      },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  // var x = d3.scale.linear()
  //     .range([0, width]);

  var x = d3.time.scale()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var line = d3.svg.line()
      .x(function(d) {
          return x(d.day);
      })
      .y(function(d) {
          return y(d.p);
      });

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(d3.extent(data, function(d) {
      return d.day;
  }));
  y.domain([0, yAxisHeight]);

  // y.domain(d3.extent(data, function(d) {
  //     return d.p;
  // }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
}

generateData(0, 1);
draw();
