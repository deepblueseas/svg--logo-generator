const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');


// set this up very similarly to mini project 09, 
//but changed the promises for async so that the function doesn't tie up the entire document while it runs

const prompt = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or hexadecimal number for the logo text',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or hexadecimal number for the shape color',
        },
    ])


const { text, textColor, shape, shapeColor } = answers;
let shapeSVG;

switch (shape) {
    case 'circle':
        shapeSVG = new Circle();
        break;
    case 'triangle':
        shapeSVG = new Triangle();
        break;
    case 'square':
        shapeSVG = new Square();
        break;
}

shapeSVG.setColor(shapeColor);

const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG.render()}
  <text x="150" y="125" font-size="48" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;

fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
};

prompt();