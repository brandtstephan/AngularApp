(function(){
    'use strict';
    const express = require('express');
    const app = express();
    const server = app.listen(4444);

    const _ = require('lodash');
    const io = require('socket.io').listen(server);

    app.use(express.static(__dirname + '/frontend'));
    
})();