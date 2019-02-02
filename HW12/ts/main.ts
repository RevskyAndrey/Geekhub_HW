import {
    Point, Shape, Circle, Polygon, Rectangle, Square} from './class';
import {testError, showError} from './module';

document.addEventListener('DOMContentLoaded', () => {
    const yourX:any = Number(document.querySelector('.js_x'));

    const yourY:any = document.querySelector('.js_y');

    const yourPoints:any = document.querySelector('.js_points');

    const btn:any = document.querySelector('.js_bnt');

    const btnClose:any = document.querySelector('.close');

    btnClose.addEventListener('click', () => {
        document.querySelector('.popup').classList.add('hide');
        document.querySelector('.task').classList.remove('hide');
    });

    btn.addEventListener('click', () => {
        const myX:number = Number(yourX.value);
        const myY:number = Number(yourY.value);
        const myPoints: number = +yourPoints.value;
        const error: boolean = testError(myX, myY, myPoints);
        console.log (yourX);
        yourX.value = '';
        yourY.value = '';
        yourPoints.value = '';
        if (error === false) {
            const point:Point = new Point(myX, myY);
            const share:Shape = new Shape(point);
            const circle:Circle = new Circle(point, point.getradius(point));

            // for poligon
            const points = [];
            for (let i = 0; i < myPoints; i++) {
                const rand = +(Math.random() * 100 + 2).toFixed(3);
                points[i] = new Point(+rand + 3, +rand - 1);
            }
            const polygon = new Polygon(point, points);

            // for rectangle and square
            const width:number = +point.getDistance(points[1]).toFixed(3);
            const height:number = +point.getDistance(points[2]).toFixed(3);
            const rectangle:Rectangle = new Rectangle(point, width, height);
            const square:Square = new Square(point, width );

            const shapes:object = {
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
