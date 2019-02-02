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
    /**
     * @param {Point} center
     */
    constructor(center) {
        this._center = center;
    }
}

export class Circle extends Shape {
    /**
     * @param {Point} center
     * @param {number} radius
     */
    constructor(center, radius) {
        super(center);
        this._radius = radius;
    }

    /**
     *
     * @returns {number}
     */

    get area() {
        return +(3.14 * (this.radius * this.radius)).toFixed(3);
    }

    /**
     *
     * @returns {number}
     */
    get perimeter() {
        return +(2 * (3.14 * this.radius)).toFixed(3);
    }
}

export class Polygon extends Shape {
    /**
     * @param {Point} center
     * @param {points[]} points
     */
    constructor(center, points) {
        super(center);
        this._points = points;
    }

    /**
     *
     * @returns {number}
     */
    get perimeter() {
        const arrSide = [];
        const arr = this._points;
        const sideCount = arr.length;
        this._perimeter = 0;
        for (let i = 0; i < sideCount - 1; i++) {
            if (i === sideCount - 1) {
                arrSide[i] = +(arr[i].getDistance(arr[0])).toFixed(3);
            }
            arrSide[i] = +(arr[i].getDistance(arr[i + 1])).toFixed(3);
            this._perimeter = this._perimeter + arrSide[i];
        }
        return this._perimeter;
    }
}

export class Rectangle extends Polygon {
    /**
     *
     * @param {Point} center
     * @param {width} width
     * @param {height} height
     */
    constructor(center, width, height) {
        super(center);
        this._width = width;
        this._height = height;
    }

    /**
     *
     * @returns {number}
     */

    get perimeter() {
        return +(2 * (this._width + this._height)).toFixed(3);
    }

    /**
     *
     * @returns {number}
     */
    get area() {
        return +(this._width * this._height).toFixed(3);
    }
}

export class Square extends Rectangle {
    /**
     *
     * @param {Point} center
     * @param {number} width
     */
    constructor(center, width) {
        super(center, width, width);
    }
}
