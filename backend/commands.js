(function () {
  "use strict";

  const Data = require("./exportJson");
  const x = new Data();

  //Data picked from the backend and delivered to the frontend
  module.exports = {
    "data": function (data, done) {
      let d = x.getAllData();
      done(d);
    }
  };

})();
