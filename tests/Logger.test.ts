import { Logger, LogLevel, ConsoleTransport } from '../src';

describe('Logger', () => {
    let consoleLogSpy: jest.SpyInstance;
    let consoleWarnSpy: jest.SpyInstance;
    let consoleErrorSpy: jest.SpyInstance;
    let consoleDebugSpy: jest.SpyInstance;


    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'info').mockImplementation();
        consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
        consoleDebugSpy = jest.spyOn(console, 'debug').mockImplementation();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should respect log level settings', () => {
        const logger = new Logger({ level: LogLevel.WARN });

        logger.info('Info message');
        logger.warn('Warn message');
        logger.error('Error message');

        expect(consoleLogSpy).not.toHaveBeenCalled();
        expect(consoleWarnSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

});