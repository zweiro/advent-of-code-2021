import {getArrayFromInputFile} from '../input.mjs';

export let getPuzz1BAnswer = (input_file_path) => {
    getArrayFromInputFile(input_file_path).then(depthMesures => {
        let increaseDepthNb = 0;
        for (let i = 0; i < depthMesures.length-2; i++) {
            if(i && parseInt(depthMesures[i-1]) < parseInt(depthMesures[i+2]))
                increaseDepthNb++;
        }
        console.log("Puzzle 1b answer: " + increaseDepthNb);
    });
}