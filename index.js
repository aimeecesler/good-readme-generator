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
    message: "What is the name of your repository?",
    name: "repoName",
  },
  {
    type: "checkbox",
    message: "Which badges would you like to use?",
    name: "badges",
    choices: [
      "Last Commit",
      "Open Issues",
      "Top Language",
    ],
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are your instructions for installation?",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the instructions for usage of your project?",
    name: "usage",
  },
  {
    type: "list",
    message:
      "Which license would you like to use? (badge will be automatically applied)",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
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
];

// function to write README file
function writeToFile(data) {
  fs.writeFile("sampleREADME.md", generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log("Successfully wrote file");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile(data))
    .catch((err) => console.log(err));
}

// function call to initialize program
init();
