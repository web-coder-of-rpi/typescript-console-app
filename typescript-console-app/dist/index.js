"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const help_1 = require("./commands/help");
const logger_1 = require("./utils/logger");
const logger = new logger_1.Logger();
const commands = {
    help: help_1.showHelp,
    exit: () => {
        logger.log('Exiting the console application.');
        process.exit(0);
    },
    log: (args) => {
        if (args) {
            logger.log(args);
        }
        else {
            logger.error('No message provided to log.');
        }
    },
    echo: (args) => {
        if (args) {
            console.log(args);
        }
        else {
            logger.error('No messge provided to echo');
        }
    },
    error: (args) => {
        if (args) {
            console.log(args);
        }
        else {
            logger.error("No message provided to error");
        }
    }
};
const commandParser = (input) => {
    const [command, ...args] = input.trim().split(/\s+/); // Split by whitespace
    if (commands[command]) {
        commands[command](args.join(' ')); // Join arguments with a space
    }
    else {
        logger.error(`Unknown command: ${command}`);
        (0, help_1.showHelp)();
    }
};
const startConsole = () => {
    logger.log('Welcome to the TypeScript Console App!');
    (0, help_1.showHelp)();
    process.stdin.on('data', (data) => {
        const input = data.toString().trim(); // Trim input to remove extra spaces or newlines
        commandParser(input);
    });
};
startConsole();
