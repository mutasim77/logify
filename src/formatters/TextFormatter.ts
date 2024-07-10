import { BaseFormatter } from './Formatter';
import { LogEntry, LogLevel } from '../types';

export class TextFormatter extends BaseFormatter {
    format(entry: LogEntry): string {
        const { timestamp, level, message, meta } = entry;
        const levelString = LogLevel[level];
        let formattedMessage = `${timestamp.toISOString()} [${levelString}] ${message}`;

        if (meta) {
            formattedMessage += ` ${JSON.stringify(meta)}`;
        }

        return formattedMessage;
    }
}