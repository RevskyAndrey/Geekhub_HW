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
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }

    getradius(point) {
        return Math.sqrt(Math.pow(this.y - point.x + 1, 2) + Math.pow(this.x - point.y + 2, 2));
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
        return 3.14 * (this.radius * this.radius).toFixed(3);
    }

    get perimeter() {
        return (2 * (3.14 * this.radius)).toFixed(3)
    }

}

export class Polygon extends Shape {
    constructor(center, points) {
        super(center);
    }

    get perimeter() {
        this.points = [point1, point2, point3];
        let
            x1 = point1.x,
            y1 = point1.y,
            x2 = point2.x,
            y2 = point2.y,
            x3 = point3.x,
            y3 = point3.y,
            side1 = point.getDistance(this.x, this.y, x1, y1),
            side2 = point.getDistance(x1, y1, x2, y2),
            side3 = point.getDistance(x2, y2, x3, y3),
            side4 = point.getDistance(x3, y3, this.x, this.y);
        return (side1 + side2 + side3 + side4)
    }
}

export class Rectangle extends Polygon {
    constructor(center, width, height) {
        super(center);
        this._width = width;
        this._height = height;
    }

    get perimeter() {
        return (2 * (this._width + this._height));
    }

    get area() {
        return (this._width * this._height);
    }
}

export class Square extends Rectangle {
    constructor(center, width) {
        super(center, width, width);
    }
}