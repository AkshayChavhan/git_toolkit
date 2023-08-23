const jsonFile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git"); // this is to commit commands




const FILE_PATH = "./data.json";

const makeCommit = (x, y) => {
    // const DATE = moment().format();    // todays date
    // const DATE = moment().subtract(1 ,'y').add(2 ,'d').format();   // substract 1 year and add 2 day from current

    // const DATE = moment().subtract(2, 'd').format();   // 1 day before todays date

    const DATE = moment().subtract(1, 'y').add(2, 'd')
        .add(x, 'w').add(y, 'd').format();
    const data = {
        date: DATE
    }

    jsonFile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push();
    });
}

makeCommit(2, 3);

