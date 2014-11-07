function makeAjaxRequest(api_endpoint, success) {
  // May not know how to use jsonp - make that clear/explain in readme?
  $.ajax({url: api_endpoint, dataType: "jsonp", success: success})
}

function generateDataSet(chart_labels, weather_data){
  return {
    labels: chart_labels,
    datasets: [
      {
        label: "Hourly Weather for NYC",
        fillColor: "rgba(100, 100, 100, 0.4",
        pointColor: "rgba(100, 100, 100, 0.4",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(100, 100, 100, 0.4",
        data: weather_data
      }
    ]
  }
}

function getHours(result){
  // This requirement is made clear in spec
  return result.hourly_forecast.map(function(ele){
    return ele.FCTTIME.hour
  })
}

function getFarenheits(result){
  // This requirement is made clear in spec
  return result.hourly_forecast.map(function(ele){
    return ele.temp.english
  })
}
