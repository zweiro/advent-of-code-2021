import {getArrayFromInputFile} from '../input.mjs';

const FORWARD_COMMAND = "forward";
const UP_COMMAND = "up";
const DOWN_COMMAND = "down";

export let getPuzz2AAnswer = (input_file_path) => {
    getArrayFromInputFile(input_file_path).then(commands => {
        let hPos = 0;
        let depth = 0;
        commands.forEach(command => {
            let commandParams = command.split(" ");
            switch (commandParams[0]) {
                case FORWARD_COMMAND:
                    hPos += parseInt(commandParams[1]);
                    break;
                case UP_COMMAND:
                    depth -= parseInt(commandParams[1]);
                    break;
                case DOWN_COMMAND:
                    depth += parseInt(commandParams[1]);
                    break;
                default:
                    break;
            }
        });
        console.log("Puzzle 1a answer: " + hPos * depth);
    });
}