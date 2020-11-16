const createREADME = (index, licenseName, licenseDescipt, licenseBadge) => {
  return `
# ${index.title} 

${licenseBadge}

- View the GitHub [repository](https://github.com/Jessica264365/${index.repository})

## Table of Contents

- [About the Project](https://github.com/Jessica264365/${index.repository}#about-the-project)
  - [Usage](https://github.com/Jessica264365/${index.repository}#usage)

* [Start Your Own](https://github.com/Jessica264365/${index.repository}#start-your-own)
  - [Prerequisites](https://github.com/Jessica264365/${index.repository}#prerequisites)
  - [Installation](https://github.com/Jessica264365/${index.repository}#installation)

- [Test Instructions](https://github.com/Jessica264365/${index.repository}#test-instructions)
- [License](https://github.com/Jessica264365/${index.repository}#license)
- [Roadmap](https://github.com/Jessica264365/${index.repository}#roadmap)
- [Contribute](https://github.com/Jessica264365/${index.repository}#contribute)
- [My Contact Information](https://github.com/Jessica264365/${index.repository}#my-contact-information)

## About the Project

${index.desciption}

### Usage

${index.usage}

## Start Your Own

To get a copy of this project on your local computer please follow these next steps.

### Prerequisites

${index.prereq}

Clone the GitHub repository: git@github.<span></span>com:Jessica264365/${index.repository}.git

### Installation

${index.installation}

### Test Instructions

${index.testInstruct}

## License

### ${licenseName}
${licenseDescipt}

## Roadmap

This project does not currently have an open issues. Please check the [issues](https://github.com/Jessica264365/${index.repository}/issues) page on GitHub for any updates.

## Contribute

${index.contribution}

## My Contact Information

Email: ${index.email}

GitHub Page: ${index.GitHub}




`;
};
module.exports = createREADME;
