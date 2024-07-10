export enum LogLevel {
    ERROR = 0,
    WARN = 1,
    INFO = 2,
    DEBUG = 3
}

export interface LogEntry {
    timestamp: Date;
    level: LogLevel;
    message: string;
    meta?: Record<string, any>;
}

export interface LoggerOptions {
    level?: LogLevel;
    transports?: Transport[];
}

export interface Transport {
    log(entry: LogEntry): void;
}

export interface Formatter {
    format(entry: LogEntry): string;
}