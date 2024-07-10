const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toTimeString().split(' ')[0]; // HH:MM:SS
};

const formatMessage = (msg) => {
  if (typeof msg === 'object') {
    try {
      return JSON.stringify(msg, null, 2);
    } catch (e) {
      return '[Unable to stringify object]';
    }
  }
  return msg;
};

const logBase = (type, emoji, message, screenOrFunction = '(not called)', ...messages) => {
  const timestamp = getCurrentTimestamp();

  // If only two arguments are passed, treat the second one as screenOrFunction
  if (messages.length === 0 && typeof message === 'string' && typeof screenOrFunction === 'string') {
    messages.push('');
  }

  console.group('');
  console[type]('---------------------------------');
  if (screenOrFunction) {
    console[type](`${emoji} from ${screenOrFunction}`);
    console[type]('---------------------------------');
  }
  console[type]('');
  console[type](formatMessage(message));
  messages.forEach(msg => {
    if (msg !== undefined && msg !== '') {
      console[type](formatMessage(msg));
    }
  });
  console[type](`[${timestamp}]`);
  console[type]('');
  console.groupEnd();
};

const logError = (message, screenOrFunction = '(not called)', ...messages) => {
  const timestamp = getCurrentTimestamp();

  // If only two arguments are passed, treat the second one as screenOrFunction
  if (messages.length === 0 && typeof message === 'string' && typeof screenOrFunction === 'string') {
    messages.push('');
  }

  console.group('');
  console.log('---------------------------------');
  if (screenOrFunction) {
    console.log(`❌ from ${screenOrFunction}`);
    console.log('---------------------------------');
  }
  console.log('');
  console.error(formatMessage(message));
  messages.forEach(msg => {
    if (msg !== undefined && msg !== '') {
      console.error(formatMessage(msg));
    }
  });
  console.log(`[${timestamp}]`);
  console.log('');
  console.groupEnd();
};

const logWarn = (message, screenOrFunction = '(not called)', ...messages) => {
  const timestamp = getCurrentTimestamp();

  // If only two arguments are passed, treat the second one as screenOrFunction
  if (messages.length === 0 && typeof message === 'string' && typeof screenOrFunction === 'string') {
    messages.push('');
  }

  console.group('');
  console.log('---------------------------------');
  if (screenOrFunction) {
    console.log(`⚠️ from ${screenOrFunction}`);
    console.log('---------------------------------');
  }
  console.log('');
  console.warn(formatMessage(message));
  messages.forEach(msg => {
    if (msg !== undefined && msg !== '') {
      console.warn(formatMessage(msg));
    }
  });
  console.log(`[${timestamp}]`);
  console.log('');
  console.groupEnd();
};

const log = (message, screenOrFunction = '(not called)', ...messages) => logBase('log', '', message, screenOrFunction, ...messages);
const success = (message, screenOrFunction = '(not called)', ...messages) => logBase('log', '✅', message, screenOrFunction, ...messages);
const info = (message, screenOrFunction = '(not called)', ...messages) => logBase('info', 'ℹ️', message, screenOrFunction, ...messages);
const warn = (message, screenOrFunction = '(not called)', ...messages) => logWarn(message, screenOrFunction, ...messages);
const error = (message, screenOrFunction = '(not called)', ...messages) => logError(message, screenOrFunction, ...messages);

const line = (message, ...messages) => {
  const timestamp = getCurrentTimestamp();
  console.group('');
  console.log(formatMessage(message));
  messages.forEach(msg => {
    if (msg !== undefined && msg !== '') {
      console.log(formatMessage(msg));
    }
  });
  console.log(`[${timestamp}]`);
  console.log('----------------------------------');
  console.groupEnd();
};

const Logger = {
  log,
  success,
  info,
  warn,
  error,
  line,
};

export default Logger;
