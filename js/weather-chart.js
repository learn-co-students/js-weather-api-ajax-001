jQuery(document).ready(function($) {

  var API_KEY = "7c209c7348c6601f";
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var weatherData = [];

  $.ajax({
    url : URL,
    dataType : "jsonp",
    success : function(parsed_json) {
      var timeData = parsed_json.hourly_forecast;
      var max = timeData.length;
      for (i = 0; i < max; i++) {
        var fahrenheit = timeData[i].temp.english;
        var hour = timeData[i].FCTTIME.hour;
        weatherData.push([hour, fahrenheit]);
      }
      console.log(weatherData);
      
    }
  });

});