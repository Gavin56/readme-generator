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

    const myREADME = `# ${title}`

    fs.writeFile("README.md", myREADME, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}

writeREADME();