import { showHelp } from './commands/help';
import { Logger } from './utils/logger';

const logger = new Logger();

const commands: { [key: string]: (args?: string) => void } = {
    help: showHelp,
    exit: () => {
        logger.log('Exiting the console application.');
        process.exit(0);
    },
    log: (args?: string) => {
        if (args) {
            logger.log(args);
        } else {
            logger.error('No message provided to log.');
        }
    },
    echo: (args?: string) => {
        if (args) {
            console.log(args);
        } else {
            logger.error('No messge provided to echo');
        }
    },
    error: (args?: string) => {
        if (args) {
            console.log(args);
        } else {
            logger.error("No message provided to error")
        }
    }
};

const commandParser = (input: string) => {
    const [command, ...args] = input.trim().split(/\s+/); // Split by whitespace
    if (commands[command]) {
        commands[command](args.join(' ')); // Join arguments with a space
    } else {
        logger.error(`Unknown command: ${command}`);
        showHelp();
    }
};

const startConsole = () => {
    logger.log('Welcome to the TypeScript Console App!');
    showHelp();

    process.stdin.on('data', (data) => {
        const input = data.toString().trim(); // Trim input to remove extra spaces or newlines
        commandParser(input);
    });
};

startConsole();