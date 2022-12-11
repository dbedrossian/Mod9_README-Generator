// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } return "no license"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)]'
  };
  if (license === 'Creative Commons') {
    return '[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)]';
  };
  if (license === 'GPL') {
    return '[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)]';
  };
  if (!license) {return ""};
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return ('The license used in this product is ${license}')
  } return ("")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.badge)}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This app is covered under the **${data.badge}** license.

  ## Questions
  For questions, contact me at [github.com/${data.github}](github.com/${data.github}), or by email at [${data.email}](${data.email}).
`;
}

module.exports = generateMarkdown;
