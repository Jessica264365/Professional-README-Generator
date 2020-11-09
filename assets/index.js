let inquirer = require("inquirer");
let fs = require("fs");

//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

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
      message: "What is the name of your GitHub repository?",
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
        "lgpl-2.1",
        "gpl-2.0",
        "epl-2.0",
        "cc0-1.0",
        "bsd-3-clause",
        "bsd-2-clause",
      ],
    },
  ])
  .then(function (data) {
    const {
      title,
      repository,
      description,
      installation,
      usage,
      contribution,
      testInstruct,
      GitHub,
      email,
      license,
    } = data;
    console.log(title);

    const licenseInfo = require("./license");
    licenseInfo(license);

    const createREADME = require("./generateREADME");

    fs.writeFile("README.md", createREADME, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("It Worked!");
    });
  });
