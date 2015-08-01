beforeEach(function () {
  jasmine.addMatchers({
    toBeSaying: function () {
        return {
          compare: function (actual, expected) {
            var world = actual;

            return {
              pass: world.currentlySaying === expected && world.isSaying
            };
          }
        };
      }
  });
});