"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.AppLogger = void 0;
/**
 * Class representing a logger for application messages.
 */
class AppLogger {
    /**
     * Creates an instance of AppLogger.
     */
    constructor() {
        this.stdout = process.stdout;
    }
    /**
     * Logs an info message.
     * @param message - The info message to log.
     */
    info(message) {
        this.write(message, "info");
    }
    /**
     * Logs an alert message.
     * @param message - The alert message to log.
     */
    alert(message) {
        this.write(message, "alert");
    }
    /**
     * Logs an error message.
     * @param args - The error message or Error object to log.
     */
    error(args) {
        if (args instanceof Error) {
            this.write(args.message, "error");
            return;
        }
        this.write(args, "error");
    }
    /**
     * Logs a job-related message.
     * @param message - The job-related message to log.
     */
    job(message) {
        this.write(message, "job");
    }
    /**
     * Logs a debug message.
     * @param message - The debug message to log.
     */
    debug(message) {
        this.write(message, "debug");
    }
    /**
     * Writes a message to the stdout stream with a specified log level.
     * @param message - The message to log.
     * @param level - The log level of the message.
     */
    write(message, level) {
        let logMessage = `[${new Date().toISOString()}] [${this.getColor(level)(level.toUpperCase())}] ${message}`;
        this.stdout.write(logMessage + "\n");
    }
    /**
     * Gets the color function for a specified log level.
     * @param level - The log level for which to get the color function.
     * @returns A function that applies the color for the specified log level to a given text.
     */
    getColor(level) {
        const colors = {
            info: "\x1b[32m", // Green
            alert: "\x1b[33m", // Yellow
            error: "\x1b[31m", // Red
            job: "\x1b[34m", // Blue
            debug: "\x1b[35m", // Magenta
        };
        const resetColor = "\x1b[0m";
        return (text) => `${colors[level]}${text}${resetColor}`;
    }
}
exports.AppLogger = AppLogger;
/**
 * Instance of AppLogger to be used for logging messages.
 */
exports.logger = new AppLogger();
