'use strict';
import {Point,Shape,Circle,Polygon,Rectangle,Square} from "./module.mjs";

document.addEventListener('DOMContentLoaded', function () {

        let point = new Point(5, 10);
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
            Rectangle: rectangle,
            Square: square,
            Circle: circle,
            Point: point
        };
        console.warn(shapes);

});

