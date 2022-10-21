
const fs = require('fs')
const inquirer = require('inquirer');

const generateReadme = (
{
projectTitle,
description,
installation,
usage,
contribution,
tests,
license,
github,
email
}
) 


const init = () => {
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter Project Title:',
        name: 'projectTitle',
      },
    {
      type: 'input',
      message: 'Write a breif description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter Installation instructions:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Project Usage:',
        name: 'usage',
      },
    {
        type: 'input',
        message: 'Enter Contribution Guidelines:',
        name: 'contribution',
      },
    {
        type: 'input',
        message: 'Enter Test Instructions:',
        name: 'tests',
      },
    {
      type: 'list',
      message: 'Choose a License',
      name: 'license',
      choices:[
        "Apache",
        "GNU",
        "MIT",
        "BSD",
        "Boost",
        "Eclipse",
        "Mozilla",
        "Unilicense"
      ]
    },
    {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter your Email:',
        name: 'email',
      },
    ])
    .then((response) => {
      const outputReadme = generateReadme(response);
      console.log(outputReadme)
      fs.writeFile('../../README.md'), outputHTML, (err) => {
        err ? console.error(err) : console.log('Success!');
    }});
}
  
  init();