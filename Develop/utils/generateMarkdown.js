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
  if(license === 'MIT'){
    return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
  return ('The license used in this product is ${license}')
} return ("")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents

  - [Background](#background)
  - [Install](#install)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Maintainers](#maintainers)
  - [Contributing](#contributing)
  - [Contributors](#contributors)
  - [License](#license)

  ## Background
${data.description}

  ## Install
${data.install}

##Usage
${data.usage}

##License
${data.license}
`;
}

module.exports = generateMarkdown;
