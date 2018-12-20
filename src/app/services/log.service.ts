export class LogService {
  write(logMessage: string): void {
    console.log('LOG MESSAGE: ', logMessage);
  }
}