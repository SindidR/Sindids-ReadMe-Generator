
const fs = require('fs')
const inquirer = require('inquirer');
const generateReadme = require("../Utils/generateReadme")



const init = () => {
inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter Project Title:',
        name: 'title',
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
    ]).then((response) => {
      fs.writeFile('generatedREADME.md', generateReadme(response), (err)=> {
        if (err) {
         console.log(err)
       } else {
         console.log(" Readme has been created ");
     }});
    })
    // function writeToFile(response) {
    //   fs.writeFile('generatedREADME', generateReadme(response), (err)=> {
    //    if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(" Readme has been created ");
    // }});
    }
    // function init() {
    //   inquirer.prompt().then((response)=> {
    //     console.log(generateReadme(response));

    //     writeToFile("log.md", response);
    //   })}
    // }
  init();