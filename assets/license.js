// A call is made to retrieve the license name and a short description
const axios = require("axios");

const LicenseInfo = (license) => {
  return axios.get("https://api.github.com/licenses/" + license);
};

module.exports = LicenseInfo;
