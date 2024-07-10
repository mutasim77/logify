import { Transport, LogEntry, Formatter } from '../types';
import { TextFormatter } from '../formatters/TextFormatter';

export abstract class BaseTransport implements Transport {
    protected formatter: Formatter;

    constructor(formatter: Formatter = new TextFormatter()) {
        this.formatter = formatter;
    }

    abstract log(entry: LogEntry): void;
}