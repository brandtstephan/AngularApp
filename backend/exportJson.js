const assetsFolder = "../AngularApp/backend/assets/data.json";
const fs = require("fs");

module.exports = class data {
  constructor() {
    var content = fs.readFileSync(assetsFolder);
    this.jsonFile = JSON.parse(content);
  }

  //Returns the list of all tracks
  getAllData() {
    return this.jsonFile;
  }
};
