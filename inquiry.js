const inquirer = require("inquirer");
const fs = require("fs");

async function getUserInput() {
    try {
        const data = await inquirer.prompt([
            {
                type: "input",
                message: "What's your name",
                name: "name"
            }
        ]);
        return data;
    } catch (error) {
        console.log(error);
    }
};

getUserInput();