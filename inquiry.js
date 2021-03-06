const inquirer = require("inquirer");
const fs = require("fs");

async function getUserInput() {
    try {
        const data = await inquirer.prompt([
            {
                type: "input",
                message: "What's the title of your project?",
                name: "title"
            },
            {
                type: "input",
                message: "Describe your project:",
                name: "description"
            },
            {
                type: "input",
                message: "Write some installation instructions:",
                name: "installation"
            },
            {
                type: "input",
                message: "Write some usage information:",
                name: "usage"
            },
            {
                type: "input",
                message: "Write some contribution guidelines:",
                name: "contribution"
            },
            {
                type: "input",
                message: "Write some test instructions:",
                name: "tests"
            },
            {
                type: "list",
                message: "Which license would you like to use?",
                choices: ["Apache", "IBM", "MIT", "Mozilla", "None"],
                name: "license"
            },
            {
                type: "input",
                message: "What is your Github username?",
                name: "github"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            }
        ]);
        return data;
    } catch (error) {
        console.log(error);
    }
};

async function writeREADME() {
    let { title, description, installation, usage, contribution, tests, license, github, email } = await getUserInput();

    switch (license) {
        case "Apache":
            license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "IBM":
            license = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
            break;
        case "MIT":
            license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Mozilla":
            license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case "None":
            break;
    }

    const myREADME = `# ${title}

${license}

## Project Description\n ${description}

## Table of Contents
* [Installation Procedure](#installation)
* [Usage Information](#usage)
* [Contribution Guidelines](#contribution)
* [Testing Instructions](#tests)
* [Questions](#Questions)

## Installation Procedure\n ${installation}

## Usage Information\n ${usage}

## Contribution Guidelines\n ${contribution}

## Testing Instructions\n ${tests}

## Questions\n https://github.com/${github}\n
${email} `;

    fs.writeFile("README-sample.md", myREADME, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}

writeREADME();