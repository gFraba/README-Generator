const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const populateReadme = require("./util/populateReadme")
const writeFile = util.promisify(fs.writeFile);

//Prompt user to input project info
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Enter the project title:",
        },
        {
            type: "input",
            name: "description",
            message: "Enter project description:"
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation process:",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter the inteded use of your project:"
        },
        {
            type: "list",
            name: "license",
            message: "Choose which license you would like to use:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Enter project contributors:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email:"
        },
        {
            type: "input",
            name: "contact",
            message: "Enter any additional contact information (Hit enter if there is none):"
        }
    ])};
 
// Promp user with questions and wait to write file and log console
async function init() {
    try {
        // Ask user questions to populate readme
        const answers = await promptUser();
        const generateContent = populateReadme(answers);
        // Write README.md
        await writeFile('./readme/README.md', generateContent);
        console.log('Successfully wrote file to readme/README.md');}
        catch(err) {
        console.log(err);
    }};
  
  init();  