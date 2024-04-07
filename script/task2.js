// დავალება 1: შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

class Shape  {
    constructor(name) {
        this.name = name;
    }
    area () {
        return "Area calculation not implemented for generic shape"
    }
};

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    area () {
        return Math.PI * this.radius ** 2;
    };
};


class Rectangle extends Shape {
    constructor(name, width, height){
        super(name);
        this.width = width;
        this.height = height;
    }
    area () {
        return this.width * this.height;
    }
};

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }
    area () {
        return (this.base * this.height) / 2;
    }
};

let circle = new Circle("წრე", 5);
let circleSum = circle.area();
console.log("Area of Circle: " + circleSum);

let rectangle = new Rectangle("მართკუთხედი", 10,5);
let rectangleSum = rectangle.area();
console.log("Area of Rectangle: " + rectangleSum);

let triangle = new Triangle("სამკუთხედი", 10,5);
let triangleSum = triangle.area();
console.log("Area of Triangle: " + triangleSum);
