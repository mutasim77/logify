import * as fs from 'fs';
import path from 'path';
import { BaseTransport } from './Transport';
import { Formatter, LogEntry } from '../types';
import { TextFormatter } from '../formatters/TextFormatter';

export class FileTransport extends BaseTransport {
    private filePath: string;

    constructor(filePath: string, formatter: Formatter = new TextFormatter()) {
        super(formatter);
        this.filePath = filePath;
        this.ensureDirectoryExists();
    }

    private ensureDirectoryExists(): void {
        const dir = path.dirname(this.filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    log(entry: LogEntry): void {
        const formattedMessage = this.formatter.format(entry);
        fs.appendFileSync(this.filePath, formattedMessage + '\n');
    }
}