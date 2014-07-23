---
language: javascript
tags: AJAX, data visualization, JavaScript library, Chartkick, API
resources: 3
---

# Visualizing Temperature w/AJAX

## Objectives
* Build a page that uses data from the [Weather Underground](http://www.wunderground.com/weather/api/) to render a line chart using [Chart.js](http://chartkick.com/). It should look something like the picture below.

![example pic](/images/example.png "Pic of Example")

* Learn how to use AJAX to keep data current.
* Use a JavaScript visualization library.

## Instructions
* Sign up for an account to generate a Weather Underground API key [here](http://www.wunderground.com/weather/api/d/login.html). You'll use this key for API calls.
* Require jQuery at the to of `index.html`. Double check that it was correctly required by typing `jQuery` in the browser console or just `$`. This should return a function, not "undefined".
* You'll be using [Chart.js](http://chartkick.com/) to visualize the JSON from Weather Underground so check it out. Require the `Chart.js` library in the head of your HTML file. Double check that you required the library correctly by typing `Chart` into the browser's console. A function should be returned, not "undefined".
* Require `weather-chart.js` below the lines where you required jQuery and Chart.js.
* In `weather-chart.js`, make a variable, `API_KEY`, and define it as the string of your Weather Underground key.
* Make a variable `URL` that will be the URL that your code will fetch hourly JSON data on New York city's weather. Read the [docs](http://www.wunderground.com/weather/api/d/docs?d=data/hourly) to figure out what it'll be.
* Use jQuery to fetch the JSON using an AJAX request(http://api.jquery.com/jquery.ajax/).
* Filter the JSON so that each hour, in military time, is associated with a temperature, in fahrenheit.
* Use the data you found in the line above to make a line chart with Chart.js. Refer to its [line chart docs](http://www.chartjs.org/docs/#line-chart-example-usage) for help. Render the chart in the canvas with the id `NYCWeatherChart`.

## Resources
* [Weather Underground](http://www.wunderground.com) - [Hourly](http://www.wunderground.com/weather/api/d/docs?d=data/hourly)
* [jQuery](http://api.jquery.com/) - [AJAX](http://api.jquery.com/jquery.ajax/)
* [Chart.js documentation](http://www.chartjs.org/docs/#getting-started)
