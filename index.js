const jsonFile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git"); // this is to commit commands




const FILE_PATH = "./data.json";

const DATE = moment().format();

const data = {
    date : DATE
}

jsonFile.writeFile(FILE_PATH , data);

simpleGit().add(FILE_PATH).commit(DATE ,{'--date' : DATE}).push();

