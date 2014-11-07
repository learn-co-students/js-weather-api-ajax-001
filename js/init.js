jQuery(document).ready(function($) {
  var API_KEY = "a6bd0fb80c0570ab";
  // URL was already created here for us by default - do we want the students to build this instead?
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  // Definitely needs to be left in as default - students arent as familiar with Chart.js
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true})
  });
});
