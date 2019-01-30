// import {showError} from './module.mjs';

document.addEventListener('DOMContentLoaded', function () {


    class Point {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }

        get x() {
            return this._x;
        }

        get y() {
            return this._y;
        }

        // получить точку смещения
        getPointAtOffset(x1, y1) {
            return new Point(this.x + x1, this.y + y1);
        }

        //  получить растояние
        getDistance(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        }

        getradius(point) {
            return Math.sqrt(Math.pow(this.y - point.x, 2) + Math.pow(this.x - point.y, 2));
        }

    }

    class Shape {
        constructor(center) {
            this._x = center.x;
            this._y = center.y;
        }

        get x() {
            return this._x;
        }

        get y() {
            return this._y;
        }

    }

    class Circle extends Shape {
        constructor(center, _radius) {
            super(center);
            this.radius = _radius;
        }

        get area() {
            return 3.14 * (this.radius * this.radius);
        }

        get perimeter() {
            return (2 * (3.14 * this.radius))
        }

    }


    class Polygon extends Shape {
        constructor(center, points) {
            super(center);

        }

        get perimeter() {
            points = {point1, point2, point3};

            let
                x1 = point1.x,
                y1 = point1.y,
                x2 = point2.x,
                y2 = point2.y,
                x3 = point3.x,
                y3 = point3.y,
                side1 = point.getDistance(this.x, this.y, x1, y1),
                side2 = point.getDistance(x1, y1, x2, y2),
                side3 = point.getDistance(x2, y2, x3, y3),
                side4 = point.getDistance(x3, y3, this.x, this.y);
            return (side1 + side2 + side3 + side4)
        }


    }

    class Rectangle extends Polygon {
        constructor(center, width, height) {
            super(center);
            this._width = width;
            this._height = height;
        }

        get perimeter() {
                return(2 *(this._width + this._height));
        }

        get area() {
            return (this._width * this._height);
        }
    }

    class Square extends Rectangle {
        constructor(center, width) {
            super(center, width, width);
        }
    }


    let point = new Point(4, 10);
    let share = new Shape(point);
    let circle = new Circle(share, point.getradius(point));

    let point1 = point.getPointAtOffset(point.x + 2, point.y + 2);
    let point2 = point.getPointAtOffset((point1.x + 4), (point1.y + 4));
    let point3 = point.getPointAtOffset(point2.x, point2.y);
    let points = {point1, point2, point3};
    let polygon = new Polygon(share, points);

    let _width = point.getDistance(point1.x, point1.y, point3.x, point3.y);
    let _height = point.getDistance(point.x, point.y, point2.x, point2.y);
    let rectangle = new Rectangle(point, _width,_height);
    let square = new Square (share,_width,_width);


    let shapes = {
        Shape: share,
        Polygon: polygon,
        Rectangle: rectangle,
       Square: square,
        Circle: circle,
        Point: point
    };

    console.warn(shapes);

})
;
