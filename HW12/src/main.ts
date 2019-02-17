// import {Point, Shape, Circle, Polygon, Rectangle, Square} from './class';
// import {testError, showError} from './module';

document.addEventListener('DOMContentLoaded', () => {
    class Point {
        constructor(private x: number, private y: number) {
        }

        getPointAtOffset(x1: number, y1: number) {
            return new Point(this.x + x1, this.y + y1);
        }

        getDistance(point: Point): number {
            return +(Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2))).toFixed(3);
        }

        getradius(point: Point): number {
            return +(Math.sqrt(Math.pow(this.y - point.x + 1, 2) + Math.pow(this.x - point.y + 2, 2))).toFixed(3);
        }
    }

    class Shape {
        constructor(private center: Point) {
        }
    }

    class Circle extends Shape {
        constructor(center: Point,  private radius: number) {
            super(center);
        }

        get area(): number {
            return +(Math.PI * (this.radius * this.radius)).toFixed(3);
        }

        get perimeter(): number {
            return +(2 * (Math.PI  * this.radius)).toFixed(3);
        }
    }

    class Polygon extends Shape {
        constructor(center: Point, private points: Array<Point>) {
            super(center);
        }

        get perimeter(): number {
            const arrSide = [];
            const arr = this.points;
            const sideCount = arr.length;
            let sum = 0;
            for (let i = 0; i < sideCount - 1; i++) {
                if (i === sideCount - 1) {
                    arrSide[i] = +(arr[i].getDistance(arr[0])).toFixed(3);
                }
                arrSide[i] = +(arr[i].getDistance(arr[i + 1])).toFixed(3);
                sum = sum + arrSide[i];
            }
            return sum;
        }
    }

    class Rectangle extends Polygon {
        constructor(center: Point, private width: number, private height: number) {
            super(center, null);
        }

        get perimeter(): number {
            return +(2 * (this.width + this.height)).toFixed(3);
        }

        get area(): number {
            return +(this.width * this.height).toFixed(3);
        }
    }

    class Square extends Rectangle {
        constructor(center: Point, width: number) {
            super(center, width, width);
        }
    }

    const yourX: any = document.querySelector('.js_x');

    const yourY: any = document.querySelector('.js_y');

    const yourPoints: any = document.querySelector('.js_points');

    const btn: any = document.querySelector('.js_bnt');

    const btnClose: any = document.querySelector('.close');

    btnClose.addEventListener('click', () => {
        document.querySelector('.popup').classList.add('hide');
        document.querySelector('.task').classList.remove('hide');
    });

    btn.addEventListener('click', () => {
        const myX: number = Number(yourX.value);
        const myY: number = Number(yourY.value);
        const myPoints: number = Number(yourPoints.value);

            const point: Point = new Point(myX, myY);
            const share: Shape = new Shape(point);
            const circle: Circle = new Circle(point, point.getradius(point));

            // for poligon
            const points = [];
            for (let i = 0; i < myPoints; i++) {
                const rand = +(Math.random() * 100 + 2).toFixed(3);
                points[i] = new Point(+rand + 3, +rand - 1);
            }
            const polygon = new Polygon(point, points);

            // for rectangle and square
            const width: number = +point.getDistance(points[1]).toFixed(3);
            const height: number = +point.getDistance(points[2]).toFixed(3);
            const rectangle: Rectangle = new Rectangle(point, width, height);
            const square: Square = new Square(point, width);

            const shapes: object = {
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

    function printLog(item: object) {
        console.warn(item);
    }

    function showPopup() {
        document.querySelector('.popup').classList.remove('hide');
        document.querySelector('.task').classList.add('hide');
    }
});