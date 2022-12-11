// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests?',
    },
    {
        type: 'list',
        name: 'badge',
        message: 'Choose a badge:',
        choices: ['MIT', 'Creative Commons', 'GPL']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response)=>writeToFile('README.md', response))
}

// Function call to initialize app
init();
