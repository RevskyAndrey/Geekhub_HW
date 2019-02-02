

const __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf
            || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; })
            || function (d, b) { for (const p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}());
Object.defineProperty(exports, '__esModule', { value: true });
// не захотил компилиться, перенес в основной файл //
const Point = /** @class */ (function () {
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
const Shape = /** @class */ (function () {
    function Shape(center) {
        this.center = center;
    }
    return Shape;
}());
exports.Shape = Shape;
const Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(center, radius) {
        const _this = _super.call(this, center) || this;
        _this.radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, 'area', {
        get() {
            return +(3.14 * (this.radius * this.radius)).toFixed(3);
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(Circle.prototype, 'perimeter', {
        get() {
            return +(2 * (3.14 * this.radius)).toFixed(3);
        },
        enumerable: true,
        configurable: true,
    });
    return Circle;
}(Shape));
exports.Circle = Circle;
const Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(center, points) {
        const _this = _super.call(this, center) || this;
        _this.points = points;
        return _this;
    }
    Object.defineProperty(Polygon.prototype, 'perimeter', {
        get() {
            const arrSide = [];
            const arr = this.points;
            const sideCount = arr.length;
            let sum = 0;
            for (let i = 0; i < sideCount - 1; i++) {
                if (i === sideCount - 1) {
                    arrSide[i] = +(arr[i].getDistance(arr[0])).toFixed(3);
                }
                arrSide[i] = +(arr[i].getDistance(arr[i + 1])).toFixed(3);
                sum += arrSide[i];
            }
            return sum;
        },
        enumerable: true,
        configurable: true,
    });
    return Polygon;
}(Shape));
exports.Polygon = Polygon;
const Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(center, width, height) {
        const _this = _super.call(this, center, null) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, 'perimeter', {
        get() {
            return +(2 * (this.width + this.height)).toFixed(3);
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(Rectangle.prototype, 'area', {
        get() {
            return +(this.width * this.height).toFixed(3);
        },
        enumerable: true,
        configurable: true,
    });
    return Rectangle;
}(Polygon));
exports.Rectangle = Rectangle;
const Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(center, width) {
        return _super.call(this, center, width, width) || this;
    }
    return Square;
}(Rectangle));
exports.Square = Square;
