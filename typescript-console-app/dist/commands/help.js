"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHelp = showHelp;
function showHelp() {
    console.log("Available Commands:");
    console.log("1. help - Displays this help message.");
    console.log("2. exit - Exits the console application.");
    console.log("3. log <message> - Logs a message to the console.");
    console.log("4. error <message> - Logs an error message to the console.");
    console.log("5. echo <message> - Logs a message to the consolewithout the INFO: message");
}
