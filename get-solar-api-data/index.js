// import axios library to make http requests
const axios = require("axios");
const config = require("../config");

// create a variable with the url as string
const BASE_URL = "https://monitoringapi.solaredge.com";

// create function that accepts site key, id and outputs some data
async function getSolarEdgeDataOverview(sites) {
  console.log(sites);
  // declare an empty array to add your data to
  let dataOutput = [];

  // create a loop that loops through the sites array
  for (s of sites) {
    console.log(`Getting overview data for site: ${s.uuid} with ID ${s.site}`);
    try {
      const response = await axios.get(
        `${BASE_URL}/site/${s.site}/overview?api_key=${s.key}`
      );
      const solarData = response.data;

      console.log(`GET: Here's the solar overview data`, solarData);

      dataOutput.push(solarData);
    } catch (errors) {
      console.error(errors);
    }
  }
  console.log("I'm done getting solar overview data 🌄");
  console.log("##############################");
  // log the full array of data to the console
  //console.log(JSON.stringify(dataOutput, null, 3));
  return dataOutput;
}

// call the function you created up there 👆
getSolarEdgeDataOverview(config.solarEdgeSites);


// create function that accepts site key, id and outputs some data
async function getSolarEdgeDataDetail(sites) {
  console.log(sites);
  // declare an empty array to add your data to
  let dataOutput = [];

  // create a loop that loops through the sites array
  for (s of sites) {
    console.log(`Getting details for site: ${s.uuid} with ID ${s.site}`);
    try {
      const response = await axios.get(
        `${BASE_URL}/site/${s.site}/details?api_key=${s.key}`
      );

      const solarData = response.data;

      console.log(`GET: Here's the site info`, solarData);

      dataOutput.push(solarData);
    } catch (errors) {
      console.error(errors);
    }
  }
  console.log("I'm done getting solar site data 🌄");
  console.log("##############################");
  // log the full array of data to the console
  //console.log(JSON.stringify(dataOutput, null, 3));
  return dataOutput;
}

// call the function you created up there 👆
getSolarEdgeDataDetail(config.solarEdgeSites);


//call this using: node ./get-solar-api-data/index.js  