import * as readline from 'node:readline';
import * as fs from 'fs';

export let getArrayFromInputFile = async (input_file_path) => {
    var file = input_file_path;
    var rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });
    return new Promise((resolve, reject) => {
        let arrayFromInputFile = [];
        rl.on('line', function (line) {
            arrayFromInputFile.push(line);
        });
        rl.on('close', function (line) {
            return resolve(arrayFromInputFile);
        });
    });
}