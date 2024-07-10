import { Formatter, LogEntry } from "../types";

export abstract class BaseFormatter implements Formatter {
    abstract format(entry: LogEntry): string;
}