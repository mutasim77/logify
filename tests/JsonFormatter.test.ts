import { JsonFormatter, LogEntry, LogLevel } from "../src";

describe('JsonFormatter', () => {
    it('should format log entries as JSON', () => {
        const formatter = new JsonFormatter();
        const timestamp = new Date('2023-01-01T00:00:00Z');
        const entry: LogEntry = {
            timestamp,
            level: LogLevel.INFO,
            message: 'Test message',
            meta: { key: 'value' }
        };

        const result = formatter.format(entry);
        const parsed = JSON.parse(result);

        expect(parsed).toEqual({
            timestamp: timestamp.toISOString(),
            level: 'INFO',
            message: 'Test message',
            key: 'value'
        });
    });

    it('should handle entries without meta data', () => {
        const formatter = new JsonFormatter();
        const timestamp = new Date('2023-01-01T00:00:00Z');
        const entry: LogEntry = {
            timestamp,
            level: LogLevel.ERROR,
            message: 'Error message'
        };

        const result = formatter.format(entry);
        const parsed = JSON.parse(result);

        expect(parsed).toEqual({
            timestamp: timestamp.toISOString(),
            level: 'ERROR',
            message: 'Error message'
        });
    });
});