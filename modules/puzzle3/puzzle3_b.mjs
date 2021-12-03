import {getArrayFromInputFile} from '../input.mjs';

export let getPuzz3BAnswer = (input_file_path) => {
    getArrayFromInputFile(input_file_path).then(reports => {
        
        let oxyRating = parseInt(filterByBitIterations(reports).join(''),2);
        let co2Rating = parseInt(filterByBitIterations(reports, true).join(''),2);
        console.log("Puzzle 3b answer: " + oxyRating * co2Rating);
    });
}

const filterByBitIterations = (array, inverse = false) => {
    for (let i = 0; i < array[0].length; i++) {
        if(array.length > 1) {
            let nbOnes = 0;
            for (let j = 0; j < array.length; j++)
                nbOnes += parseInt(array[j][i]);
            let mostValue = inverse ? !(nbOnes >= (array.length / 2)) : !!(nbOnes >= (array.length / 2));
            array = array.filter(value => value[i] == mostValue);
        } else
            break;
    }
    return array;
}