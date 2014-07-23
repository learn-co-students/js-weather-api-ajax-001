describe("WeatherChart", function() {

  it("defines API_KEY as a string", function () {
    expect(API_KEY).toEqual(jasmine.any(String));
  });

  it("defines URL as a string", function () {
    expect(URL).toEqual(jasmine.any(String));
  });

  it("defines a variable 'ctx' that represents the context of the line chart", function () {
    expect(ctx).toEqual(jasmine.any(Function));
  });

  it("defines an empty array called 'hours' for containing all the time values", function () {
    expect(hours).toEqual(jasmine.any(Array));
  });

  it("defines an empty array called 'fahrenheits' for containing all the temperature values", function () {
    expect(fahrenheits).toEqual(jasmine.any(Array));
  });

}