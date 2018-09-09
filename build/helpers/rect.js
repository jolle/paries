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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        return _this;
    }
    Rectangle.prototype.draw = function (ctx) {
        var width = this.props.size.width;
        var height = this.props.size.height;
        if (Object.keys(this.props.size).includes('dX')) {
            width = this.props.size.dX - this.props.x;
            height = this.props.size.dY - this.props.y;
        }
        ctx.beginPath();
        ctx.rect(this.props.x, this.props.y, width, height);
        ctx.closePath();
        if (this.props.opts.fill) {
            ctx.fillStyle = this.props.opts.fill.fillColor;
            ctx.fill();
        }
        if (this.props.opts.stroke) {
            ctx.lineWidth = this.props.opts.stroke.strokeWidth;
            ctx.strokeStyle = this.props.opts.stroke.strokeColor;
            ctx.stroke();
        }
    };
    return Rectangle;
}(Entity_1.Entity));
exports.Rectangle = Rectangle;
exports.rect = function (props) { return new Rectangle(props); };
