const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
.prompt([
        {
            type: 'input',
            name: 'text',
            message: '',
         },
        {
            type: 'input',
            name: 'textColor',
            message: '',
        },
        {
            type: 'list', 
            name: 'shape',
            message: '',
         },
        {
            type: 'input',
            name: 'shapecolor',
            message: '',
        },
    ])
.then((answers) => {
    const
})