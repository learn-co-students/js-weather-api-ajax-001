
 jQuery(document).ready(function($) {
  var URL = "http://api.wunderground.com/api/6f97229f7b7486ad/hourly/q/GA/Atlanta.json";
  var ctx = $('#ATLWeatherChart')[0].getContext('2d');

  function getFarenheits(json){
    var farenheits = [];
    for(var i=0; i<5;i++){
      farenheits.push(json.hourly_forecast[i].temp.english);
    }
    return farenheits;
  }

  function getHours(json){
    var hours = [];
    for(var i=0; i<5;i++){
      hours.push(json.hourly_forecast[i].FCTTIME.hour);
    }
    return hours;
  }

  function generateDataSet(hours, farenheits){
    return {
      labels: hours,
      datasets: [
        {
          label: "Hourly Weather for Atlanta",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: farenheits
        }
      ]
    }
  }

  function ajaxCall(json){
    var data = generateDataSet(getHours(json), getFarenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true})
  }

  function makeAjaxRequest(url, ajaxCall){
    // console.log(json);
    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(response){
        ajaxCall(response);
      }
    });
  }
  makeAjaxRequest(URL, ajaxCall);
 });



