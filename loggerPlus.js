const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toTimeString().split(' ')[0]; // HH:MM:SS
};

const formatMessage = (msg) => {
  if (typeof msg === 'object') {
    try {
      return JSON.stringify(msg, null, 2).split('\n');
    } catch (e) {
      return ['[Unable to stringify object]'];
    }
  }
  return [msg];
};

const logBase = (type, emoji, message, screenOrFunction = '(not called)', ...messages) => {
  const timestamp = getCurrentTimestamp();

  // If only two arguments are passed, treat the second one as screenOrFunction
  if (messages.length === 0 && typeof message === 'string' && typeof screenOrFunction === 'string') {
    messages.push('');
  }

  console.group('');
  console[type]('---------------------------------');
  console[type](`${emoji} from ${screenOrFunction}`);
  console[type]('---------------------------------');
  console[type]('');
  formatMessage(message).forEach(line => console[type](line));
  messages.forEach(msg => {
    if (msg !== undefined && msg !== '') {
      formatMessage(msg).forEach(line => console[type](line));
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
  console.error('---------------------------------');
  console.error(`❌ from ${screenOrFunction}`);
  console.error('---------------------------------');
  console.error('');
  formatMessage(message).forEach(line => console.error(line));
  messages.forEach(msg => {
    if (msg !== undefined && msg !== '') {
      formatMessage(msg).forEach(line => console.error(line));
    }
  });
  console.error(`[${timestamp}]`);
  console.error('');
  console.groupEnd();
};

const logWarn = (message, screenOrFunction = '(not called)', ...messages) => {
  const timestamp = getCurrentTimestamp();

  // If only two arguments are passed, treat the second one as screenOrFunction
  if (messages.length === 0 && typeof message === 'string' && typeof screenOrFunction === 'string') {
    messages.push('');
  }

  console.group('');
  console.warn('---------------------------------');
  console.warn(`⚠️ from ${screenOrFunction}`);
  console.warn('---------------------------------');
  console.warn('');
  formatMessage(message).forEach(line => console.warn(line));
  messages.forEach(msg => {
    if (msg !== undefined && msg !== '') {
      formatMessage(msg).forEach(line => console.warn(line));
    }
  });
  console.warn(`[${timestamp}]`);
  console.warn('');
  console.groupEnd();
};

const line = (message, ...messages) => {
  const timestamp = getCurrentTimestamp();

  console.group('');
  formatMessage(message).forEach(line => console.log(line));
  messages.forEach(msg => {
    if (msg !== undefined && msg !== '') {
      formatMessage(msg).forEach(line => console.log(line));
    }
  });
  console.log(`[${timestamp}]`);
  console.log('----------------------------------');
  console.groupEnd();
};

const printBox = (...lines) => {
  const timestamp = getCurrentTimestamp();
  const timestampFormatted = `[${timestamp}]`;
  
  // Convert objects to strings
  lines = lines.map(line => {
    if (typeof line === 'object') {
      try {
        return JSON.stringify(line, null, 2).split('\n').map(line => `${line.trim()}`).join('\n');
      } catch (e) {
        return '[Unable to stringify object]';
      }
    }
    return line;
  }).flat();

  console.group(''); // Add group

  // Find the longest line length
  const maxLength = Math.max(...lines.map(line => line.length), timestampFormatted.length);

  // Create the top border
  let topBorder = '╔' + '═'.repeat(maxLength + 2) + '╗';
  console.log(topBorder);

  // Add a line spacer at the top
  let lineSpacer = '║' + ' '.repeat(maxLength + 2) + '║';
  console.log(lineSpacer);

  // Create each line with padding
  lines.forEach(line => {
    console.log(lineSpacer);
    let padding = ' '.repeat(maxLength - line.length);
    console.log(`║ ${line}${padding} ║`);
  });

  // Add the timestamp
  console.log(lineSpacer);
  let timestampPadding = ' '.repeat(maxLength - timestampFormatted.length);
  console.log(`║ ${timestampFormatted}${timestampPadding} ║`);
  console.log(lineSpacer);

  // Create the bottom border
  let bottomBorder = '╚' + '═'.repeat(maxLength + 2) + '╝';
  console.log(bottomBorder);

  console.groupEnd(); // End group
};

const log = (message, screenOrFunction = '(not called)', ...messages) => logBase('log', '', message, screenOrFunction, ...messages);
const success = (message, screenOrFunction = '(not called)', ...messages) => logBase('log', '✅', message, screenOrFunction, ...messages);
const info = (message, screenOrFunction = '(not called)', ...messages) => logBase('info', 'ℹ️', message, screenOrFunction, ...messages);
const warn = (message, screenOrFunction = '(not called)', ...messages) => logWarn(message, screenOrFunction, ...messages);
const error = (message, screenOrFunction = '(not called)', ...messages) => logError(message, screenOrFunction, ...messages);

const box = (...lines) => {
  printBox(...lines);
};

const Logger = {
  log,
  success,
  info,
  warn,
  error,
  line,
  box,
};

module.exports = Logger;
export default Logger;
