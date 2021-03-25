// Populating user input to the README.md
function populateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} </h1>
  
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Contact](#Contact)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
This application is covered by the ${answers.license} license. 
## Contributors
${answers.contributors}
## Contact
GitHub: [${answers.github}](https://github.com/${answers.github})
<br />
Email: ${answers.email}
<br />
${answers.contact}`
};
  
  module.exports = populateReadme;