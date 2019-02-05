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
// не захотил компилиться, перенес в основной файл //
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getPointAtOffset = function (x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    };
    Point.prototype.getDistance = function (point) {
        return +(Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2))).toFixed(3);
    };
    Point.prototype.getradius = function (point) {
        return +(Math.sqrt(Math.pow(this.y - point.x + 1, 2) + Math.pow(this.x - point.y + 2, 2))).toFixed(3);
    };
    return Point;
}());
exports.Point = Point;
var Shape = /** @class */ (function () {
    function Shape(center) {
        this.center = center;
    }
    return Shape;
}());
exports.Shape = Shape;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(center, radius) {
        var _this = _super.call(this, center) || this;
        _this.radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return +(3.14 * (this.radius * this.radius)).toFixed(3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "perimeter", {
        get: function () {
            return +(2 * (3.14 * this.radius)).toFixed(3);
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}(Shape));
exports.Circle = Circle;
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(center, points) {
        var _this = _super.call(this, center) || this;
        _this.points = points;
        return _this;
    }
    Object.defineProperty(Polygon.prototype, "perimeter", {
        get: function () {
            var arrSide = [];
            var arr = this.points;
            var sideCount = arr.length;
            var sum = 0;
            for (var i = 0; i < sideCount - 1; i++) {
                if (i === sideCount - 1) {
                    arrSide[i] = +(arr[i].getDistance(arr[0])).toFixed(3);
                }
                arrSide[i] = +(arr[i].getDistance(arr[i + 1])).toFixed(3);
                sum = sum + arrSide[i];
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    return Polygon;
}(Shape));
exports.Polygon = Polygon;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(center, width, height) {
        var _this = _super.call(this, center, null) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "perimeter", {
        get: function () {
            return +(2 * (this.width + this.height)).toFixed(3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return +(this.width * this.height).toFixed(3);
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}(Polygon));
exports.Rectangle = Rectangle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(center, width) {
        return _super.call(this, center, width, width) || this;
    }
    return Square;
}(Rectangle));
exports.Square = Square;
