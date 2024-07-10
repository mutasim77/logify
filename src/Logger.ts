import { LogLevel, LogEntry, LoggerOptions, Transport } from './types';
import { ConsoleTransport } from './transports/ConsoleTransport';

export class Logger {
    private level: LogLevel;
    private transports: Transport[];

    constructor(options: LoggerOptions = {}) {
        this.level = options.level ?? LogLevel.INFO;
        this.transports = options.transports ?? [new ConsoleTransport()];
    }

    private log(level: LogLevel, message: string, meta?: Record<string, any>): void {
        if (level <= this.level) {
            const entry: LogEntry = {
                timestamp: new Date(),
                level,
                message,
                meta
            };

            this.transports.forEach(transport => transport.log(entry));
        }
    }

    error(message: string, meta?: Record<string, any>): void {
        this.log(LogLevel.ERROR, message, meta);
    }

    warn(message: string, meta?: Record<string, any>): void {
        this.log(LogLevel.WARN, message, meta);
    }

    info(message: string, meta?: Record<string, any>): void {
        this.log(LogLevel.INFO, message, meta);
    }

    debug(message: string, meta?: Record<string, any>): void {
        this.log(LogLevel.DEBUG, message, meta);
    }

    setLevel(level: LogLevel): void {
        this.level = level;
    }

    addTransport(transport: Transport): void {
        this.transports.push(transport);
    }
}