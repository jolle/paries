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
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        return _this;
    }
    Line.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.props.sX, this.props.sY);
        ctx.lineTo(this.props.dX, this.props.dY);
        ctx.closePath();
        ctx.lineWidth = this.props.stroke.strokeWidth;
        ctx.strokeStyle = this.props.stroke.strokeColor;
        ctx.stroke();
    };
    return Line;
}(Entity_1.Entity));
exports.line = function (props) { return new Line(props); };
