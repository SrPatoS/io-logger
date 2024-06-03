type LoggerLevelsTypes = "info" | "alert" | "error" | "job";

/**
 * Class representing a logger for application messages.
 */
export class AppLogger {
    private readonly stdout: NodeJS.WriteStream;

    /**
     * Creates an instance of AppLogger.
     */
    public constructor() {
        this.stdout = process.stdout;
    }

    /**
     * Logs an info message.
     * @param message - The info message to log.
     */
    public info(message: string): void {
        this.write(message, "info");
    }

    /**
     * Logs an alert message.
     * @param message - The alert message to log.
     */
    public alert(message: string): void {
        this.write(message, "alert");
    }

    /**
     * Logs an error message.
     * @param args - The error message or Error object to log.
     */
    public error(args: string | Error): void {
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
    public job(message: string): void {
        this.write(message, "job");
    }

    /**
     * Writes a message to the stdout stream with a specified log level.
     * @param message - The message to log.
     * @param level - The log level of the message.
     */
    private write(message: string, level: LoggerLevelsTypes): void {
        let logMessage = `[${new Date().toISOString()}] [${this.getColor(level)(level.toUpperCase())}] ${message}`;
        this.stdout.write(logMessage + "\n");
    }

    /**
     * Gets the color function for a specified log level.
     * @param level - The log level for which to get the color function.
     * @returns A function that applies the color for the specified log level to a given text.
     */
    private getColor(level: LoggerLevelsTypes): (text: string) => string {
        const colors: Record<LoggerLevelsTypes, string> = {
            info: "\x1b[32m",   // Green
            alert: "\x1b[33m",  // Yellow
            error: "\x1b[31m",  // Red
            job: "\x1b[34m"     // Blue
        };

        const resetColor = "\x1b[0m";

        return (text: string) => `${colors[level]}${text}${resetColor}`;
    }
}

/**
 * Instance of AppLogger to be used for logging messages.
 */
export const logger = new AppLogger();
