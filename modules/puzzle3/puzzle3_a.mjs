import {getArrayFromInputFile} from '../input.mjs';

export let getPuzz3AAnswer = (input_file_path) => {
    getArrayFromInputFile(input_file_path).then(reports => {
        let gamma = [];
        let epsilonRate = [];
        for (let i = 0; i < reports[0].length; i++) {
            let nbOnes = 0;
            for (let j = 0; j < reports.length; j++) {
                nbOnes += parseInt(reports[j][i]);
            }
            let currentGamma = !!(nbOnes > (reports.length / 2));
            gamma.push(+currentGamma);
            epsilonRate.push(+!currentGamma);
        }
        console.log("Puzzle 3a answer:\n Power consumption: " + parseInt(gamma.join(''),2)*parseInt(epsilonRate.join(''),2));
    });
}