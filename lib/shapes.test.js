const Triangle = require('../lib/shapes').Triangle;
// because i put all the shapes in one file instead of their own
// to be cleaner i suppose i should have separated them


// create a testing suit for Triangle
describe('Triangle', () => {
    // the test we want it to pass if we wrote our code correctly
    it('should render a triangle with the correct color', () => {
        // when we create a new triangle and set the color to blue it should look like the triangl described below
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });



const Circle = require('../lib/shapes').Circle;

describe('Circle', () => {
    it('should render a circle with the correct color', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
    });
});



