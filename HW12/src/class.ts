// не захотил компилиться, перенес в основной файл //
export class Point {
    constructor( private x: number, private y: number) {}

    getPointAtOffset(x1: number, y1: number) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point:Point): number {
        return +(Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2))).toFixed(3);
    }

    getradius(point: Point): number {
        return +(Math.sqrt(Math.pow(this.y - point.x + 1, 2) + Math.pow(this.x - point.y + 2, 2))).toFixed(3);
    }
}

export class Shape {
    constructor(private center: Point) {}
}

export class Circle extends Shape {
    constructor(center: Point,  private radius: number) {
        super(center);
    }

    get area(): number {
        return +(3.14 * (this.radius * this.radius)).toFixed(3);
    }

    get perimeter(): number {
        return +(2 * (3.14 * this.radius)).toFixed(3);
    }
}

export class Polygon extends Shape {
    constructor(center: Point,  private points:Array<Point> ) {
        super(center);
    }

    get perimeter(): number {
        const arrSide = [];
        const arr = this.points;
        const sideCount = arr.length;
        let sum:number = 0;
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

export class Rectangle extends Polygon {
    constructor(center: Point, private width: number, private height: number) {
        super(center,null);
    }

    get perimeter(): number {
        return +(2 * (this.width + this.height)).toFixed(3);
    }

    get area(): number {
        return +(this.width * this.height).toFixed(3);
    }
}

export class Square extends Rectangle {
    constructor(center: Point, width: number) {
        super(center, width, width);
    }
}
