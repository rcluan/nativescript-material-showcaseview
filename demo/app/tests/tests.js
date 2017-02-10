var MaterialShowcaseview = require("nativescript-material-showcaseview").MaterialShowcaseview;
var materialShowcaseview = new MaterialShowcaseview();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(materialShowcaseview.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(materialShowcaseview.functionname()).toEqual(jasmine.any(Promise));
  });
});