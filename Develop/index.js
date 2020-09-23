const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the instructions for usage of your project?",
    name: "usage",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "License",
    choices: ["op1", "op2", "op3", "op4"],
  },
  {
    type: "input",
    message: "What name would you like to use in your license?",
    name: "name",
  },
  {
    type: "input",
    message: "What are your contribution guidelines?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are your test instructions?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "checkbox",
    message: "Which badges would you like to use?",
    name: "badges",
    choices: ["badge1", "badge2", "badge3", "badge4", "badge5"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("sampleREADME.md", generateMarkdown(), (err) => {
    if (err) throw err;
    console.log("Successfully wrote file");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
  });
}

// function call to initialize program
init();
