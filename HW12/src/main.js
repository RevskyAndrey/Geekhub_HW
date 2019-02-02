// import {Point, Shape, Circle, Polygon, Rectangle, Square} from './class';
// import {testError, showError} from './module';
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
document.addEventListener('DOMContentLoaded', () => {
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
    const Shape = /** @class */ (function () {
        function Shape(center) {
            this.center = center;
        }
        return Shape;
    }());
    const Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(center, radius) {
            const _this = _super.call(this, center) || this;
            _this.radius = radius;
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
    const Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square(center, width) {
            return _super.call(this, center, width, width) || this;
        }
        return Square;
    }(Rectangle));
    const yourX = document.querySelector('.js_x');
    const yourY = document.querySelector('.js_y');
    const yourPoints = document.querySelector('.js_points');
    const btn = document.querySelector('.js_bnt');
    const btnClose = document.querySelector('.close');
    btnClose.addEventListener('click', () => {
        document.querySelector('.popup').classList.add('hide');
        document.querySelector('.task').classList.remove('hide');
    });
    btn.addEventListener('click', () => {
        const myX = Number(yourX.value);
        const myY = Number(yourY.value);
        const myPoints = Number(yourPoints.value);
        const point = new Point(myX, myY);
        const share = new Shape(point);
        const circle = new Circle(point, point.getradius(point));
        // for poligon
        const points = [];
        for (let i = 0; i < myPoints; i++) {
            const rand = +(Math.random() * 100 + 2).toFixed(3);
            points[i] = new Point(+rand + 3, +rand - 1);
        }
        const polygon = new Polygon(point, points);
        // for rectangle and square
        const width = +point.getDistance(points[1]).toFixed(3);
        const height = +point.getDistance(points[2]).toFixed(3);
        const rectangle = new Rectangle(point, width, height);
        const square = new Square(point, width);
        const shapes = {
            Shape: share,
            Polygon: polygon,
            Rectangle: rectangle,
            Square: square,
            Circle: circle,
            Point: point,
        };
        showPopup();
        printLog(shapes);
    });
    function printLog(item) {
        console.warn(item);
    }
    function showPopup() {
        document.querySelector('.popup').classList.remove('hide');
        document.querySelector('.task').classList.add('hide');
    }
});
