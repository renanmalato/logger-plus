
# @renanmalato/logger-plus

This custom logger provides a consistent way to log messages with different levels of severity (info, success, warning, error) and includes timestamps for each log entry. It is designed specifically for React Native and Expo projects.

## Installation

First, ensure you have the `@renanmalato-logger-plus` package in your project by installing it via npm:

```sh
npm install @renanmalato/logger-plus
```

## Usage

### Importing the Logger

Import the `Logger` module in your component or any JavaScript file where you want to use it:

```javascript
import Logger from '@renanmalato/logger-plus';
```

### Logging Methods

The `Logger` provides several methods for logging messages:

- `Logger.log(message, screenOrFunction, ...messages)`
- `Logger.success(message, screenOrFunction, ...messages)`
- `Logger.info(message, screenOrFunction, ...messages)`
- `Logger.warning(message, screenOrFunction, ...messages)`
- `Logger.error(message, screenOrFunction, ...messages)`
- `Logger.line(message, ...messages)`

#### Parameters

- `message` (string): The primary log message.
- `screenOrFunction` (string, optional): The source of the log message, such as the screen or function name. If omitted, defaults to `(not called)`.
- `...messages` (string, optional): Additional messages to include in the log entry.

### Examples

#### Basic Usage

```javascript
import Logger from '@renanmalato-logger-plus';

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
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Logger from '@renanmalato-logger-plus';

const ExampleComponent = () => {
  const [cartCount, setCartCount] = useState(0);
  const variable = "string variable";

  useEffect(() => {
    const interval = setInterval(() => {
      setCartCount(prevCount => prevCount + 1);
      Logger.info('Cart count updated:', 'CartScreen', `New count: ${cartCount}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [cartCount]);

  useEffect(() => {
    Logger.info('Message:', variable);
    Logger.info('Message:', 'Screen.js', variable);
    Logger.info(variable);
    Logger.info('Screen.js', 'Message:', variable);
    Logger.info('ExampleComponent', 'Updated cart count:', cartCount);
    Logger.success('Successfully updated cart count to', cartCount);
    Logger.warning('Warning: Cart count is getting high', cartCount);
    Logger.error('Error: Something went wrong with cart count', cartCount);
    Logger.log('Logging a simple message');
    Logger.line('This is a simple line log');
  }, [cartCount]);

  return (
    <View>
      <Text>Hello, world! Cart count: {cartCount}</Text>
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
