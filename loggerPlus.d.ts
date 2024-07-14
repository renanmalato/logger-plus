declare module '@renanmalato/logger-plus' {
  function log(message: string, screenOrFunction?: string, ...messages: string[]): void;
  function success(message: string, screenOrFunction?: string, ...messages: string[]): void;
  function info(message: string, screenOrFunction?: string, ...messages: string[]): void;
  function warn(message: string, screenOrFunction?: string, ...messages: string[]): void;
  function error(message: string, screenOrFunction?: string, ...messages: string[]): void;
  function line(message: string, ...messages: string[]): void;
  function box(...lines: (string | object)[]): void;

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
