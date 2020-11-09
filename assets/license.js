const axios = require("axios");


const LicenseInfo = function (license) {
  axios
    .get("https://api.github.com/licenses/" + license)
    .then((response) => {
      let licenseDescript = response.data.description;
      let licenseName = response.data.name;
      console.log(licenseDescript);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = LicenseInfo;

