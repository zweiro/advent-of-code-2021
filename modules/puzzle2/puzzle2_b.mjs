import {getArrayFromInputFile} from '../input.mjs';

const FORWARD_COMMAND = "forward";
const UP_COMMAND = "up";
const DOWN_COMMAND = "down";

export let getPuzz2BAnswer = (input_file_path) => {
    getArrayFromInputFile(input_file_path).then(commands => {
        let hPos = 0;
        let depth = 0;
        let aim = 0;
        commands.forEach(command => {
            let commandParams = command.split(" ");
            switch (commandParams[0]) {
                case FORWARD_COMMAND:
                    hPos += parseInt(commandParams[1]);
                    depth += aim * parseInt(commandParams[1]);
                    break;
                case UP_COMMAND:
                    aim -= parseInt(commandParams[1]);
                    break;
                case DOWN_COMMAND:
                    aim += parseInt(commandParams[1]);
                    break;
                default:
                    break;
            }
        });
        console.log("Puzzle 2a answer: " + hPos * depth);
    });
}