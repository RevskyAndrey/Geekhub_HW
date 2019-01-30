'use strict';
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
        getDistance(point_1,point_2) {
            return Math.sqrt(Math.pow(point_1.x - point_2.x, 2) + Math.pow(point_1.y - point_2.y, 2));
        }
        getradius(point){
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
        constructor(center, [point1 ,point2,point3]) {
            super(center);
            this.x1 = point1.x;
            this.y1 = point1.y;
            this.x2 = point2.x;
            this.y2 = point2.y;
            this.x3 = point3.x;
            this.y3 = point3.y;
            this.side1 = point.getDistance(center,point1);
            this.side2 = point.getDistance(point1,point2);
            this.side3 = point.getDistance(point2,point3);
            this.side4 = point.getDistance(point3,center);
        }
        get perimeter() {
            return (this.side1+this.side2+this.side3+this.side4)
        }


    }

    class Rectangle extends Polygon{
        constructor(center, width, height) {
            super(center);
    }


    let Shapes = {
        Shape: Shape,
        Polygon: Polygon,
        Rectangle: Rectangle,
        // Square: Square,  //квадрад
        Circle: Circle,
        Point: Point
    };


    let point = new Point(4, 10);
    let share = new Shape(point);
    let circle = new Circle(share, point.getradius(point));

    let point1 =point.getPointAtOffset((point.x+2), (point.y)+2);
    let point2 =point.getPointAtOffset((point1.x+4), (point1.y+4));
    let point3 =point.getPointAtOffset(point2.x, point2.y);

    let polygon = new Polygon(share, [point1,point2,point3]);
    let rectangle = new Rectangle ()


    let shapes = {
        Shape: share,
        Polygon: polygon,
        Rectangle: rectangle,
        // Square: Square,
        Circle: circle,
        Point: point
    };

    console.warn(shapes);

})
;
