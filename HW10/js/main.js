'use strict';
import {Point, Shape, Circle, Polygon, Rectangle, Square} from "./class.mjs";
import {testError, showError} from "./module.mjs";

document.addEventListener('DOMContentLoaded', function () {

    let
        yourX = document.querySelector('.js_x'),
        yourY = document.querySelector('.js_y'),
        yourPoints = document.querySelector('.js_points'),
        btn = document.querySelector('.js_bnt'),
        btn_close = document.querySelector('.close');

    btn.addEventListener("click", function () {
        let myX = yourX.value;
        let myY = yourY.value;
        let myPoints = yourPoints.value;
        let tempX = yourX.value;
        let error = testError(myX, myY, myPoints);
        yourX.value = "";
        yourY.value = "";
        if (error == false) {

            let point = new Point(myX, myY);
            let share = new Shape(point);
            let circle = new Circle(share, point.getradius(point));

            // for poligon //
            let point1 = point.getPointAtOffset(point.x + 2, point.y + 2);
            let point2 = point.getPointAtOffset((point1.x + 4), (point1.y + 4));
            let point3 = point.getPointAtOffset(point2.x, point2.y);

            let points = [point1, point2, point3];

            let polygon = new Polygon(share, points);
            console.warn(points);
            // // for rectangle and square
            // let _width = point.getDistance(points[1]);
            // let _height = point.getDistance(points[2]);
            // let rectangle = new Rectangle(point, _width, _height);
            // let square = new Square(share, _width, _width);

            let shapes = {
                Shape: share,
                Polygon: polygon,
                // Rectangle: rectangle,
                // Square: square,
                Circle: circle,
                Point: point
            };
            printLog(shapes);
        }
    });

    function printLog(item) {
        console.warn(item);
    }

});

