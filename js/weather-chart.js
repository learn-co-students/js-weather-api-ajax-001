jQuery(document).ready(function($) {

  var API_KEY = "7c209c7348c6601f";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var weatherData = [];
  var hours = [];
  var fahrenheits = [];
  var ctx = $("#NYCWeatherChart").get(0).getContext("2d");

  $.ajax({
    url : URL,
    dataType : "jsonp",
    success : function(parsed_json) {
      var timeData = parsed_json.hourly_forecast;
      var max = timeData.length;
      for (i = 0; i < max; i++) {
        var fahrenheit = timeData[i].temp.english;
        fahrenheits.push(fahrenheit);
        var hour = timeData[i].FCTTIME.hour;
        hours.push(hour);
        weatherData.push([hour, fahrenheit]);
      }

      var data = {
        labels: hours,
        datasets: [
          {
              label: "Hourly Weather for New York",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: fahrenheits
          }
        ] 
      };


      var tempChart = new Chart(ctx).Line(data, {
        bezierCurve: true
      });    

    }
  });
});

