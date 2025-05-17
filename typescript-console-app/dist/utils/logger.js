"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    log(message) {
        console.log(`INFO: ${message}`);
    }
    error(message) {
        console.log(`ERROR: ${message}`);
    }
    echo(message) {
        console.log(message);
    }
}
exports.Logger = Logger;
