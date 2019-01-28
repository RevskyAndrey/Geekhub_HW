'use strict';

import {showError} from './module.mjs';


document.addEventListener('DOMContentLoaded', function () {

    // let myX, myY,
    //     yourX = document.querySelector('.js_x'),
    //     yourY = document.querySelector('.js_y'),
    //     btn = document.querySelector('.js_bnt'),
    //     btn_close = document.querySelector('.close');
    //
    // btn_close.addEventListener("click", function () {
    //     document.querySelector(".popup").classList.add("hide");
    //     document.querySelector(".task").classList.remove("hide");
    // });
    //
    // btn.addEventListener("click", function () {
    //     let tempX = yourX.value;
    //     let tempY = yourY.value;
    //     let str_error = "Вы не ввели значение";
    //     let error = false;
    //     if (tempX === "") {
    //         showError(".error", str_error, "X");
    //         error = true;
    //     } else if (tempY === "") {
    //         showError(".error", str_error, "Y");
    //         error = true;
    //     }
    //     myX = tempX;
    //     myY = tempY;
    //     console.log("myX", myX);
    //     console.log("myY", myY);
    //     yourX.value = "";
    //     yourY.value = "";
    //     if (error == false) {
    //         start();
    //     }
    // });
    //
    // function showPopup() {
    //     document.querySelector(".popup").classList.remove("hide");
    //     document.querySelector(".task").classList.add("hide");
    // }
    class Point {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }

        //  получение данных
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
        getDistance(point) {
            return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y,2));
        }
    }

    //     фігура:  ( координати:   х, у  )
    class Shape {
        constructor(center) {
            this._x = center.x;
            this._y = center.y;
        }
    }

    // class Polygon {
    //     constructor(center, points) { }
    // }
    //
    // class Rectangle {
    //     constructor(center, width, height) { }
    // }
    //
    // class Square extends Rectangle {
    //     constructor(center, width) {
    //         super(center, width, width);
    //     }
    // }

    class Circle {
        constructor(center, radius) {
            this._x = center.x;
            this._y = center.y;
            this._r = radius;
        }

    }


    let Shapes = {
        Shape: Shape,
        // Polygon: Polygon,
        // Rectangle: Rectangle,
        // Square: Square,
        Circle: Circle,
        Point: Point
    };
    console.warn(Shapes);

    let point = new Point(4, 10);
    let share = new Shape(point);
    let center = point.getDistance(point);
    let circle = new Circle(point,center );

    console.log(point.getDistance(point));

    let shapes = {
        Shape: share,
        // Polygon: Polygon,
        // Rectangle: Rectangle,
        // Square: Square,
        Circle: circle,
        Point: point
    };

    console.warn(shapes);

});
