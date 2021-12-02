import {getArrayFromInputFile} from '../input.mjs';

export let getPuzz1AAnswer = (input_file_path) => {
    getArrayFromInputFile(input_file_path).then(depthMesures => {
        let increaseDepthNb = 0;
        for (let i = 0; i < depthMesures.length; i++) {
            if(i && parseInt(depthMesures[i-1]) < parseInt(depthMesures[i]))
                increaseDepthNb++;
        }
        console.log("Puzzle 1a answer: " + increaseDepthNb);
    });
}