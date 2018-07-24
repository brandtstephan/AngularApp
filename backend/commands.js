(function () {
  "use strict";

  const Data = require("./exportJson");
  const x = new Data();

  module.exports = {
    "data": function (data, done) {
      let d = x.getAllData();
      done(d);
    }
  };

})();
