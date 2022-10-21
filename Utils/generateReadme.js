function generateReadme(response) {
    return `# $(title)
<h1>${response.projectTitle}</h1>

## Description
$(response.description)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)

## Installation
${response.installation}

## Usage
${response.usage}

## License

## Contribute
${response.contribution}

## Tests
${response.tests}

`;   
}

module.exports = generateReadme;
