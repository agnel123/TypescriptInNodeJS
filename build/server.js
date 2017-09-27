"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("./controllers");
var app = express();
var port = 3000;
app.use('/wecome', controllers_1.WelcomeController);
app.listen(port, function () {
    console.log('listening at http://localhost:${port}/');
});
