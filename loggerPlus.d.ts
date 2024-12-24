declare module '@renanmalato/logger-plus' {
  function log(message: any, screenOrFunction?: string, ...messages: any[]): void;
  function success(message: any, screenOrFunction?: string, ...messages: any[]): void;
  function info(message: any, screenOrFunction?: string, ...messages: any[]): void;
  function warn(message: any, screenOrFunction?: string, ...messages: any[]): void;
  function error(message: any, screenOrFunction?: string, ...messages: any[]): void;
  function line(message: any, ...messages: any[]): void;
  function box(...lines: any[]): void;

  const Logger: {
    log: typeof log;
    success: typeof success;
    info: typeof info;
    warn: typeof warn;
    error: typeof error;
    line: typeof line;
    box: typeof box;
  };

  export default Logger;
}