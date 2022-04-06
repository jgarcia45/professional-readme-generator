// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const { rejects } = require('assert');

// TODO: Create an array of questions for user input
const questions = [
    {
        // Name
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        // Email
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        // Github
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },
    {
        // Repository
        type: 'input',
        name: 'repository',
        message: 'What is the name of the repository?',
        validate: repositoryInput => {
            if (repositoryInput) {
                return true;
            } else {
                console.log('Please enter your repository name!');
                return false;
            }
        }
    },
    {
        // Title
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        // Description
        type: 'input',
        name: 'description',
        message: 'Enter the description of the project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        // Installation
        type: 'input',
        name: 'installation',
        message: 'What are the steps for your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter an installation!');
                return false;
            }
        }
    },
    {
        // Usage
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions!');
                return false;
            }
        }
    },
    {
        // Tests
        type: 'input',
        name: 'tests',
        message: 'What are the steps for testing?',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter your steps!');
                return false;
            }
        }
    },
    {
        // Contributing
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter your steps!');
                return false;
            }
        }
    },
    {
        // Credits
        type: 'input',
        name: 'credits',
        message: 'List your collaborators if any.',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Please list collaborators!');
                return false;
            }
        }
    },
    {
        // License
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['MIT', 'GNU AGPLv3', 'Unlicense', 'Apache', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile("README.md", generateMarkdown(data));
    })
};

// Function call to initialize app
init();