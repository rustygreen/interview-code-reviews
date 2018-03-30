/*
  Goal: Review code and identify issues.
  Must Support:
  - ES6
 */
import { Injectable } from '@angular/core';
import { Pro } from '@ionic/pro';

export enum LogLevel {
  Trace = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5
}

export interface LogEntry {
  level: LogLevel;
  msg: string;
  error: Error;
  created: Date;
}

/**
 * Log service.
 */
@Injectable()
export class Logger {
  public logs: Array<LogEntry> = [];
  public enabled: boolean = true;
  public logToPro: boolean = false;
  public logToProLevel: LogLevel = LogLevel.Error;
  public level: LogLevel = LogLevel.Debug;

  constructor() {
  }

  log(msg: string, level: LogLevel, error: Error = null): LogEntry {
    var log = {
      msg: msg,
      level: level,
      error: error,
      created: new Date()
    };

    this.logs.push(log);
    return log;
  }

  trace(msg: string): LogEntry {
    return this.log(msg, LogLevel.Trace);
  }

  debug(msg: string): LogEntry {
    return this.log(msg, LogLevel.Debug);
  }

  info(msg: string): LogEntry {
    return this.log(msg, LogLevel.Info);
  }

  warn(msg: string, error: Error = null): LogEntry {
    return this.log(msg, LogLevel.Warn, error);
  }

  error(msg: string, error: Error = null): LogEntry {
    return this.log(msg, LogLevel.Error, error);
  }

  fatal(msg: string, error: Error = null): LogEntry {
    return this.log(msg, LogLevel.Fatal, error);
  }

  clear():void {
    this.logs.length = 0;
  }

  // filter(level: LogLevel): Array<LogEntry> {
  //   return this.logs.;
  // }
}
