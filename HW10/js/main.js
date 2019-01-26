'use strict';
import {ShowError} from 'error.mjs';

document.addEventListener('DOMContentLoaded', function () {


        //  Завдання створити класи:  фігура:  ( координати:   х, у  )
    // -----------------
    //        фігура ->  круг   ( координати:   х, у  )  -> радіус,  площа(),    периметр-длина окружности()
    //  -----------------
    //      фігура: -> багатокутник,  -> вершини[координати],   периметр()
    //  --------------
    //      багатокутник:-> прямокутник ->  довжина,  висота,  площа(),   периметр()
    // ----------------------
    //     прямокутник: ->  квадрат -> довжинаСторони ,  площа(),  периметр()


    let
        yourX = document.querySelector('.js_x'),
        btnX = document.querySelector('.js_bnt_x'),

        yourY = document.querySelector('.js_y'),
        btnY = document.querySelector('.js_bnt_y');

    btnX.addEventListener("click", function () {
        let temp = yourX.value;
            ShowError (error, "Error");
        console.warn("x", temp);
    });

    btnY.addEventListener("click", function () {
        let temp = yourY.value;
        console.error("y", temp);
    });
    //Фигура
//     class Shape {
//         constructor(center) { }
//     }
//
//     class Circle {
//         constructor(center, radius) { }
//     }
// //многоугольник
//     class Polygon {
//         constructor(center, points) { }
//     }
//     //прямоугольник
//     class Rectangle {
//         constructor(center, width, height) { }
//     }
//     //площадь
//     class Square extends Rectangle {
//         constructor(center, width) {
//             super(center, width, width);
//         }
//     }
//     //точка (центер)
//     class Point {
//         get x() {
//             return this._x;
//         }
//
//         get y() {
//             return this._y;
//         }
//
//         constructor(x, y) {
//             this._x = x;
//             this._y = y;
//         }
//
//         getPointAtOffset(x1, y1) {
//             return new Point(this.x + x1, this.y + y1);
//         }
//
//         getDistance(point) {
//             return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
//         }
//     }

    // Shapes = {
    //     Shape: Shape,
    //     Polygon: Polygon,
    //     Rectangle: Rectangle,
    //     Square: Square,
    //     Circle: Circle,
    //     Point: Point
    // };

});
