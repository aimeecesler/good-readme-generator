// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
Badges will go here.
## Description
### ${data.description}

-----

## Table of Contents

-----

## Installation
${data.installation}

-----

## Usage
${data.usage}

-----

## License
License option ${data.license} will go here with name ${data.name}

-----

## Contributing
${data.contributing}

-----

## Tests
${data.tests}

-----

## Questions
Have questions? Find me on [GitHub](https://github.com/${data.username}) or [email me](${data.email}).
`;
}

module.exports = generateMarkdown;
