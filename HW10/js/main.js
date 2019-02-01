
import {
    Point, Shape, Circle, Polygon, Rectangle, Square,
} from './class.mjs';
import { testError, showError } from './module.mjs';

document.addEventListener('DOMContentLoaded', () => {
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
        const myX = +yourX.value;
        const myY = +yourY.value;
        const myPoints = +yourPoints.value;
        const error = testError(myX, myY, myPoints);
        yourX.value = '';
        yourY.value = '';
        yourPoints.value = '';
        if (error === false) {
            const point = new Point(myX, myY);
            const share = new Shape(point);
            const circle = new Circle(share, point.getradius(point));

            // for poligon
            const points = [];
            for (let i = 0; i < myPoints; i++) {
                const rand = +(Math.random() * 100 + 2).toFixed(3);
                points[i] = new Point(+rand + 3, +rand - 1);
            }
            const polygon = new Polygon(share, points);

            // for rectangle and square
            const width = +point.getDistance(points[1]).toFixed(3);
            const height = +point.getDistance(points[2]).toFixed(3);
            const rectangle = new Rectangle(point, width, height);
            const square = new Square(share, width, width);

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
        }
    });

    function printLog(item) {
        console.warn(item);
    }


    function showPopup() {
        document.querySelector('.popup').classList.remove('hide');
        document.querySelector('.task').classList.add('hide');
    }
});
