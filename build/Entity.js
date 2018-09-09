"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity() {
        this.subscribers = [];
    }
    Entity.prototype.subscribe = function (callback) {
        this.subscribers.push(callback);
    };
    Entity.prototype.update = function (props) {
        this.props = __assign({}, this.props, props);
        this.updated();
    };
    Entity.prototype.updated = function () {
        this.subscribers.forEach(function (subscriber) { return subscriber(); });
    };
    return Entity;
}());
exports.Entity = Entity;
