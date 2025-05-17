export class Logger {
    log(message: string): void {
        console.log(`INFO: ${message}`);
    }

    error(message: string): void {
        console.log(`ERROR: ${message}`);
    }
    echo(message: string): void {
        console.log(message)
    }
}