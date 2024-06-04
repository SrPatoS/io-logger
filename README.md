# IoLogger

## Overview

The `AppLogger` class is a simple logger utility designed to log messages with different levels of severity (info, alert, error, and job) to the console with color-coded output.

## Installation

To use the `AppLogger`, simply include the `AppLogger` class in your project. You can copy the class definition into your project or import it as a module if provided.

```sh
npm install io-logger
```

## Usage

Here is how you can use the `AppLogger` in your project:

```typescript
import { logger } from "io-logger";

// Log an info message
logger.info('This is an info message');

// Log an alert message
logger.alert('This is an alert message');

// Log an error message
logger.error('This is an error message');

// Log an Error object
const error = new Error('This is an error object');
logger.error(error);

// Log a job-related message
logger.job('This is a job message');
```

## API

### LoggerLevelsTypes

```typescript
type LoggerLevelsTypes = "info" | "alert" | "error" | "job";
```

Enumeration of possible log levels.

### AppLogger Class

#### Constructor

```typescript
new AppLogger()
```

Creates a new instance of `AppLogger`.

#### Methods

- `info(message: string): void`

  Logs an info message.

    - `message`: The info message to log.

- `alert(message: string): void`

  Logs an alert message.

    - `message`: The alert message to log.

- `error(args: string | Error): void`

  Logs an error message or an Error object.

    - `args`: The error message or Error object to log.

- `job(message: string): void`

  Logs a job-related message.

    - `message`: The job-related message to log.

#### Private Methods

- `write(message: string, level: LoggerLevelsTypes): void`

  Writes a message to the stdout stream with a specified log level.

    - `message`: The message to log.
    - `level`: The log level of the message.

- `getColor(level: LoggerLevelsTypes): (text: string) => string`

  Gets the color function for a specified log level.

    - `level`: The log level for which to get the color function.

  Returns a function that applies the color for the specified log level to a given text.

## Example

```typescript
import { logger } from "io-logger";

// Example usage
logger.info('Informational message');
logger.alert('Alert message');
logger.error('Error message');
logger.error(new Error('Error object message'));
logger.job('Job related message');
```

This will produce color-coded output in the console for each log level.
