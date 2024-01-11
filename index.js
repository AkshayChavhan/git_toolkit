const jsonFile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git"); // this is to commit commands
const { Random, MersenneTwister19937 } = require("random-js");



const FILE_PATH = "./data.json";

const makeCommit = (n) => {

    if (n === 0) return simpleGit().push();

    
    const random = new Random(MersenneTwister19937.autoSeed());
    const x = random.integer(10, 54);
    const y = random.integer(0, 6);
    // const DATE = moment().format();    // todays date
    // const DATE = moment().subtract(2, 'd').format();   // 1 day before todays date
    // const DATE = moment().subtract(1 ,'y').add(2 ,'d').format();   // substract 1 year and add 2 day from current

    const DATE = moment().subtract(2, 'd').
        add(x, 'w').add(y, 'd').format();   // 1 day before todays date

    const data = {
        date: DATE
    }

    jsonFile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE },
            makeCommit.bind(this, --n));
    });

}

makeCommit(50);


