const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [

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

}

// function call to initialize program
init();
writeToFile();
