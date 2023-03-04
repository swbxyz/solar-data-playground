# Solar Edge API Fetcher Test Scripts

This simple collection of node scripts allows the user to perform basic get operations for SolarEdge data using the [Solar Edge API](https://knowledge-center.solaredge.com/sites/kc/files/se_monitoring_api.pdf).

## 🚀 What it does

- Performs simple get requests using common api calls for solar edge
- Allows a user to make multiple api calls
- TODO: allows a user to aggregate data into a csv
- TODO: provides simple modules for integration with web applications

## ✅ Prerequisites

- MSB: Install git (comes with xCode if MacOS) or install HomeBrew.
- Try: git --version to see if it is already installed
- Install Node JS
- Clone this repository
- Open it in your favorite text editor
- Make sure you have a solar edge API key and site id
- Navigate to top level directory and install dependencies using npm install  

```sh
npm install
```
- MSB: results: (installed 9 packages, 1 package looking for funding - run 'npm fund' for details)

- Optional: if you plan to make changes go ahead and checkout a new branch

```sh
git checkout -b feature/your-branch-title/your-name-or-initials
```

-- MSB: What is my branch title? Is it the name of the folder created using "clone"? In this case: "solar-data-playground"
-- MSB: Do I then need to cd to that space? Answer - no - it doesn't exist  "switched to a new branch 'feature/solar-data-playground/msb'


## 🏁 Use this repository

### 1/ Make sure you have updates your config file
-- MSB: What does this mean?  Is the copy of config.template.js supposed to be named config.js ? Where does it go? Inside get-solar-api-data?  No. At top level (see below)

Copy `config.template.js` and input your own values
-- MSB: I edited the template, but also created copy as config.js at top level (solar-data-playground)

**Example**

```javascript
const solarEdgeSites = [
  {
    uuid: "your_house_name_or_uuid", //fill this in with the name of your house
    key: "your_key_here", // fill this in with the key you got from solar edge
    site: "your_site_id_here", // fill this in with the site ID you got
  },
  // here you can copy the above object (in the highlighted curly braces)
  // paste below and you can fill in more sites
];
```

### 2/ Run the test script

```sh
node ./get-solar-api-data/index.js
```
-- MSB: Getting error - sites not interable
### 3/
