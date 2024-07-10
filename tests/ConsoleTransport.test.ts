import { ConsoleTransport, LogEntry, LogLevel } from "../src";

describe('ConsoleTransport', () => {
    let consoleInfoSpy: jest.SpyInstance;
    let consoleWarnSpy: jest.SpyInstance;
    let consoleErrorSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation();
        consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should log to the correct console method based on log level', () => {
        const transport = new ConsoleTransport();

        const debugEntry: LogEntry = { timestamp: new Date(), level: LogLevel.DEBUG, message: 'Debug message' };
        const infoEntry: LogEntry = { timestamp: new Date(), level: LogLevel.INFO, message: 'Info message' };
        const warnEntry: LogEntry = { timestamp: new Date(), level: LogLevel.WARN, message: 'Warn message' };
        const errorEntry: LogEntry = { timestamp: new Date(), level: LogLevel.ERROR, message: 'Error message' };

        transport.log(debugEntry);
        transport.log(infoEntry);
        transport.log(infoEntry);
        transport.log(warnEntry);
        transport.log(errorEntry);

        expect(consoleInfoSpy).toHaveBeenCalledTimes(2);
        expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
});