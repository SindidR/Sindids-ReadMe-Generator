function generateReadme(response) {
    return `#
<h1>${response.title}</h1>

## Description
${response.description}

## Table of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Github](#github)
- [Email](#email)

## Title
${response.title}

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contribute
${response.contribution}

## Tests
${response.tests}

## License
${response.license}

## Github
${response.github}

## Email
${response.email}



`;   
}

module.exports = generateReadme;
