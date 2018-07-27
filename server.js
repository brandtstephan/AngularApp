(function () {
  "use strict";
  const express = require("express");
  const app = express();
  const server = app.listen(4444);

  const _ = require("lodash");
  const io = require("socket.io").listen(server);

  const commands = require("./backend/commands.js");
  console.log(commands);

  app.use(express.static(__dirname + "/frontend"));
  app.use(express.static(__dirname + "/frontend/app/unity/TemplateData"));

  io.sockets.on("connection", socket => {
    _.each(commands, (command, id) => {
      socket.on(id, (data, done) => {
        command(data, done);
      });
    });
  });
})();
