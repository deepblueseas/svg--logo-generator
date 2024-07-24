// set up similarly to the 10 mini project
// in these constructors, this refers to the instance it resides in
// this isn't exactly a model but it does remind me of models and typedefs which we learn about later

class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

// setting up subclasses triangle, circle, square below
// subclasses inherit the properties/methods of the class it extends
// which is why we can use color below

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    } 
} 

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
