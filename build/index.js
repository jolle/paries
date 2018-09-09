"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = require("./helpers/rect");
exports.rect = rect_1.rect;
var layer_1 = require("./helpers/layer");
exports.layer = layer_1.layer;
var line_1 = require("./helpers/line");
exports.line = line_1.line;
exports.paries = function (opts) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    var canvas = document.createElement('canvas');
    canvas.width = opts.width;
    canvas.height = opts.height;
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return canvas;
    var redraw = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        children.forEach(function (child) {
            child.draw(ctx);
        });
    };
    children.forEach(function (child) {
        child.draw(ctx);
        child.subscribe(function () {
            redraw();
        });
    });
    return canvas;
};
