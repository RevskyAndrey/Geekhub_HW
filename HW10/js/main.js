'use strict';
document.addEventListener('DOMContentLoaded', function () {

    /** Завдання створити класи:
     *    фігура:
     *      координати:
     *      х, у
     *
     *      *    круг -> фігура:
     *      радіус,
     *      площа(),
     *      периметр()
     *
     *    багатокутник -> фігура:
     *      вершини[координати],
     *      периметр()
     *
     *    прямокутник -> багатокутник:
     *      довжина,
     *      висота,
     *      площа(),
     *      периметр()
     *
     *    квадрат -> прямокутник:
     *      довжинаСторони,
     *      площа(),
     *      периметр()
     *

     */


    class Shape {
        constructor(center) { }
    }

    class Polygon {
        constructor(center, points) { }
    }

    class Rectangle {
        constructor(center, width, height) { }
    }

    class Square extends Rectangle {
        constructor(center, width) {
            super(center, width, width);
        }
    }

    class Circle {
        constructor(center, radius) { }
    }

    class Point {
        get x() {
            return this._x;
        }

        get y() {
            return this._y;
        }

        constructor(x, y) {
            this._x = x;
            this._y = y;
        }

        getPointAtOffset(x1, y1) {
            return new Point(this.x + x1, this.y + y1);
        }

        getDistance(point) {
            return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
        }
    }

    Shapes = {
        Shape: Shape,
        Polygon: Polygon,
        Rectangle: Rectangle,
        Square: Square,
        Circle: Circle,
        Point: Point
    };

});
