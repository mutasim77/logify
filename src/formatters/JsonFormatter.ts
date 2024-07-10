import { BaseFormatter } from './Formatter';
import { LogEntry, LogLevel } from '../types';

export class JsonFormatter extends BaseFormatter {
    format(entry: LogEntry): string {
        const { timestamp, level, message, meta } = entry;
        return JSON.stringify({
            timestamp: timestamp.toISOString(),
            level: LogLevel[level],
            message,
            ...meta
        });
    }
}