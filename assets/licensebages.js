const LicenseInfo = require("./license");

// Function that retrieves the code to display the license badge at the top of the README
let getBadge = (license) => {
  if (license === "mit") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "lgpl-3.0") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  }
  if (license === "mpl-2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (license === "agpl-3.0") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  }
  if (license === "unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
  if (license === "apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "gpl-3.0" ) {
    return
  } 
  if (license === "lgpl-2.1") {
    return
  }
  if (license === "gpl-2.0") {
    return
  }
  if (license === "epl-2.0") {
    return
  }

 
  

  //     "gpl-2.0",
  //     "epl-2.0",
  //     "cc0-1.0",
  //     "bsd-3-clause",
  //     "bsd-2-clause",
};
module.exports = getBadge;
