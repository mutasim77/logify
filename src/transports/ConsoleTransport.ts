import { BaseTransport } from './Transport';
import { LogEntry, LogLevel } from '../types';

export class ConsoleTransport extends BaseTransport {
    log(entry: LogEntry): void {
        const formattedMessage = this.formatter.format(entry);
        switch (entry.level) {
            case LogLevel.ERROR:
                console.error(formattedMessage);
                break;
            case LogLevel.WARN:
                console.warn(formattedMessage);
                break;
            case LogLevel.INFO:
                console.info(formattedMessage);
                break;
            case LogLevel.DEBUG:
                console.debug(formattedMessage);
                break;
        }
    }
}