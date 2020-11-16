// Required modules and npm packages
let inquirer = require("inquirer");
let fs = require("fs");
const licenseInfo = require("./license");
const createREADME = require("./generateREADME");
const getBadge = require("./licensebages");

// Inquirer questions for the user about their README

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "repository",
      message:
        "What is the name of your GitHub repository? Please use a '-' to seperate multiple words.",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project.",
    },
    {
      type: "input",
      name: "prereq",
      message: "Does your project have any prerequisites?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions for you project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Give some usage information about your project.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Do you have any contribution guidelines?",
    },
    {
      type: "input",
      name: "testInstruct",
      message: "Please enter some test instructions for you project",
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "list",
      name: "license",
      message: "Does your project have a license?",
      choices: [
        "mit",
        "lgpl-3.0",
        "mpl-2.0",
        "agpl-3.0",
        "unlicense",
        "apache-2.0",
        "gpl-3.0",
        "gpl-2.0",
        "epl-1.0",
        "cc0-1.0",
        "bsd-3-clause",
        "bsd-2-clause",
        "wtfpl",
        "artistic-2.0",
        "zlib",
      ],
    },
  ])
  // The license information is passed to the licenseInfo module
  .then(function (data) {
    licenseInfo(data.license)
      .then((response) => {
        // The license name and descriptoin are retrieved from the licenseInfo module
        let licenseDescript = response.data.description;
        let licenseName = response.data.name;
        // The license badge is retrieved from the getBadge module
        let licenseBadge = getBadge(data.license);
        // The inquirer data, licenseDescript, licenseName, and licenseBadge strings are
        //all passed into the createREADME module and a string of the markdown for the README is returned.
        let readme = createREADME(
          data,
          licenseName,
          licenseDescript,
          licenseBadge
        );
        // fs is used to create the README.md with the users information
        fs.writeFile("README.md", readme, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("It Worked!");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
