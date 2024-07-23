const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
.prompt([
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
            name: 'shapecolor',
            message: 'Enter a color keyword or hexadecimal number for the shape color',
        },
    ])
.then((answers) => {
    const
})

should make this async instead of a promise