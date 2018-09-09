"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("../Entity");
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer(props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        _this.canvas = document.createElement('canvas');
        var ctx = _this.canvas.getContext('2d');
        if (ctx !== null) {
            _this.props.forEach(function (child) {
                if (child instanceof Entity_1.Entity) {
                    child.subscribe(function () {
                        _this.drawAll(ctx);
                        _this.updated();
                    });
                }
            });
            _this.drawAll(ctx);
        }
        return _this;
    }
    Layer.prototype.draw = function (ctx) {
        ctx.drawImage(this.canvas, 0, 0);
    };
    Layer.prototype.drawAll = function (ctx) {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.props.forEach(function (child) {
            child.draw(ctx);
        });
    };
    return Layer;
}(Entity_1.Entity));
exports.Layer = Layer;
exports.layer = function () {
    var children = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        children[_i] = arguments[_i];
    }
    return new Layer(children);
};
