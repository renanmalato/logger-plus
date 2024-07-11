
# @renanmalato/logger-plus

This custom logger provides a breathable and consistent way to log messages with different levels of severity (info, success, warning, error) and includes timestamps for each log entry. It is a very light weight library designed specifically for React Native and Expo projects.

## Support

If you find this package helpful, consider supporting me by buying me a coffee.

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg)](https://www.buymeacoffee.com/renanmalato)


## Installation

First, ensure you have the `@renanmalato/logger-plus` package in your project by installing it via npm:

```sh
npm install @renanmalato/logger-plus
```

## Usage

### Importing the Logger

Import the Logger module in your component or any JavaScript file where you want to use it:

```javascript
import Logger from '@renanmalato/logger-plus';
```
### Image of the package logging

![Print Screen](https://github.com/renanmalato/logger-plus/blob/main/assets/logger-printscreen.jpg)


### Logging Methods

The Logger provides several methods for logging messages:

1st Case: Message and Screen name

- `Logger.log('Message goes here', 'Screen or Function Name');`
![logger log message and function screen name](https://github.com/renanmalato/logger-plus/blob/main/assets/logger-log-msg-screen.jpg)


2nd Case: Message and Screen name

- `Logger.info('Message goes here', 'Screen or Function Name', variable);`
![logger log message and function screen name](https://github.com/renanmalato/logger-plus/blob/main/assets/logger-info-msg-screen.jpg)


3rd Case: Logs only Message

- `Logger.info('Message goes here');`
![logger image](https://github.com/renanmalato/logger-plus/blob/main/assets/logger-only-message.jpg)


4th Case: Log Success with Object

- `Logger.success('Message goes here', 'Screen or Function Name', object);`
![logger image](https://github.com/renanmalato/logger-plus/blob/main/assets/logger-success-object.jpg)


- `Logger.log(message, screenOrFunction, ...messages)`
- `Logger.success(message, screenOrFunction, ...messages)`
- `Logger.info(message, screenOrFunction, ...messages)`
- `Logger.warning(message, screenOrFunction, ...messages)`
- `Logger.error(message, screenOrFunction, ...messages)`
- `Logger.line(message, ...messages)`

### Parameters

- `message (string)`: The primary log message.
- `screenOrFunction (string, optional)`: The source of the log message, such as the screen or function name. If omitted, defaults to (not called).
- `...messages (string, optional)`: Additional messages to include in the log entry. Objects are stringified for readability.

### Examples

#### Basic Usage

```javascript
import Logger from '@renanmalato/logger-plus';

const variable = "string variable";

// Basic log
Logger.log('This is a simple log message');

// Info log with source
Logger.info('Fetching data:', 'DataScreen');

// Success log
Logger.success('Data fetched successfully:', 'DataScreen', variable);

// Warning log
Logger.warning('Data fetch took too long:', 'DataScreen');

// Error log
Logger.error('Failed to fetch data:', 'DataScreen', variable);

// Line log (without source)
Logger.line('This is a simple line log');
```

#### Detailed Example

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import Logger from '@renanmalato/logger-plus';

const ExampleComponent = () => {
  const variable = "string variable";
  const object = {
    name: 'Renan',
    age: 23,
  };


  useEffect(() => {
    Logger.info('Message:', 'App.js');
    Logger.info('Message:', 'App.js', variable);
    Logger.info('Object:', 'App.js', object);
    Logger.info(variable);
    Logger.success('Successfully updated cart count to', 'CartScreen', variable);
    Logger.warning('Warning: Cart count is getting high', 'CartScreen', object);
    Logger.error('Error: Something went wrong with cart count', 'CartScreen', variable);
    Logger.log('Logging a simple message');
    Logger.line('This is a simple line log');
  }, []);

  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default ExampleComponent;
```

## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

Created by renanmalato
This project is licensed under the MIT License.
