export class Point {
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

    getPointAtOffset(x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point) {
        return +(Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2))).toFixed(3);
    }

    getradius(point) {
        return +(Math.sqrt(Math.pow(this.y - point.x + 1, 2) + Math.pow(this.x - point.y + 2, 2))).toFixed(3);
    }

}

export class Shape {
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

export class Circle extends Shape {
    constructor(center, _radius) {
        super(center);
        this.radius = _radius;
    }

    get area() {
        return +(3.14 * (this.radius * this.radius)).toFixed(3);
    }

    get perimeter() {
        return +(2 * (3.14 * this.radius)).toFixed(3);
    }
}

export class Polygon extends Shape {
    constructor(center, points) {
        super(center);
        this._points = points;
    }

    get perimeter() {
        let arrSide = [];
        let j = this._points.length;
        this._perimeter = 0;
        for (let i = 0; i < j; i++) {
            if (i === j - 1) {
                arrSide[i] = +(points(i).getDistance(points[0]));
            }
// что то тут не так  ... (Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2))).toFixed(3) ..
            // переписать функцию под себя снова ?)
            arrSide[i] = +(points(i).getDistance(points[i + 1]));
            this._perimeter = this._perimeter + arrSide[i];
        }
        return this._perimeter;
    }
}

export class Rectangle
    extends Polygon {
    constructor(center, width, height) {
        super(center);
        this._width = width;
        this._height = height;
    }

    get perimeter() {
        return +(2 * (this._width + this._height)).toFixed(3);
    }

    get area() {
        return +(this._width * this._height).toFixed(3);
    }
}

export class Square extends Rectangle {
    constructor(center, width) {
        super(center, width, width);
    }
}