(function () {
  "use strict";

  const Data = require("./exportJson");
  const x = new Data();

  module.exports = {
    test: function (data, done) {
      console.log("done");
      done("success");
    },
    "data": function (data, done) {
      let d = x.getAllData();
      done(d);
    }
  };

})();
