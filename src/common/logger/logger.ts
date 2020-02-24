import { Injectable, LoggerService } from '@nestjs/common';
import * as Winston from 'winston';
const { timestamp, label, printf } = Winston.format;
import * as moment from 'moment';

const customFormat = printf(({ level, message, labelf, timestampf }: any) => {
  return `${moment(timestampf).toISOString()} [${labelf}] ${level}: ${message}`;
});
@Injectable()
export class Logger implements LoggerService {
  private options: Winston.LoggerOptions = {
    transports: [
      new Winston.transports.Console({
        level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
        format: Winston.format.combine(
          label({ label: 'Template-node-api' }),
          timestamp(),
          Winston.format.colorize({
            all: true
          }),
          customFormat
        )
      }),
      new Winston.transports.File({
        filename: 'debug.log',
        level: 'debug',
        format: Winston.format.combine(label({ label: 'import-data-service' }), timestamp(), customFormat)
      })
    ]
  };

  logger: Winston.Logger;
  constructor() {
    this.logger = Winston.createLogger(this.options);
  }
  log(message: string) {
    this.logger.log({
      level: 'info',
      message
    });
  }
  error(message: string, trace?: string) {
    this.logger.error(message, trace);
  }
  warn(message: string) {
    this.logger.warn(message);
  }
  debug(message: string) {
    this.logger.debug(message);
  }
  verbose(message: string) {
    this.logger.verbose(message);
  }
}
