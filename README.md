
# @renanmalato/logger-plus

This custom logger provides a breathable and consistent way to log messages with different levels of severity (info, success, warn, error) and includes timestamps for each log entry. It is a very light weight library designed specifically for React Native and Expo projects Javascript but it also can be used in TypeScript and CommonJS.

<img src="https://github.com/renanmalato/logger-plus/blob/main/assets/logo.jpg" alt="logo" style="border-radius: 10px;">




## Discussion and Support

If you have something to contribute please visit our GitHub repository. If you consider this package helpful also you can consider support on the Buy Me a Coffee shield.

<div style="display: flex; gap: 10px; align-items: center;">
  
<a href="https://www.buymeacoffee.com/renanmalato" target="_blank">
        <img src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" alt="Buy Me A Coffee" style="width: 130px">
    </a>
  
<a href="https://github.com/renanmalato/logger-plus" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" style="width: auto; height: 45px;">
    </a>
  
<a href="https://www.npmjs.com/package/@renanmalato/logger-plus" target="_blank">
        <img src="https://img.shields.io/npm/v/@renanmalato/logger-plus?style=flat-square" alt="NPM Version" style="width: auto; height: 45px;">
    </a>
  
</div>



## Installation

First, ensure you have the `@renanmalato/logger-plus` package in your project by installing it via npm:

```sh
npm install @renanmalato/logger-plus
```

## Usage

### Importing the Logger

For React Native Import using Expo:

```javascript
import Logger from '@renanmalato/logger-plus';
```


For Common Javascript (CommonJS):

```javascript
const Logger = require('@renanmalato/logger-plus');
```



### Image of the package logging

<img src="https://github.com/renanmalato/logger-plus/blob/main/assets/logger-printscreen.jpg" alt="Print in Action" style="border-radius: 10px;">


<br>

### Logging Methods

The Logger provides several methods for logging messages:

<br>

<strong>• 1st Case: Message and Screen name</strong>

- `Logger.log('Message goes here', 'Screen or Function Name');`
   <br>
<img src="https://github.com/renanmalato/logger-plus/blob/main/assets/logger-log-msg-screen.jpg" alt="Logger message and function screen name" style="border-radius: 10px;">



<br><br>
<strong> • 2nd Case: Message, Screen name and Variable </strong>

- `Logger.info('Message goes here', 'Screen or Function Name', variable);`
    <br>
<img src="https://github.com/renanmalato/logger-plus/blob/main/assets/logger-info-msg-screen.jpg" alt="logger log message and function screen name and variable" style="border-radius: 10px;">
    


<br><br>
<strong>• 3rd Case: Logs only Message </strong>

- `Logger.info('Message goes here');`
<br>
<img src="https://github.com/renanmalato/logger-plus/blob/main/assets/logger-only-message.jpg" alt="Logs only Message" style="border-radius: 10px;">


<br><br>
<strong> • 4th Case: Log Success with Object </strong>

- `Logger.success('Message goes here', 'Screen or Function Name', object);`

<img src="https://github.com/renanmalato/logger-plus/blob/main/assets/logger-success-object.jpg" alt="Log Success" style="border-radius: 10px;">




<br><br>
<strong> • 5th Case: Log Box </strong>

- `Logger.box('Debug here', 'Screen or Function Name');`

<img src="https://github.com/renanmalato/logger-plus/blob/main/assets/logger-box.jpg" alt="Log Success" style="border-radius: 10px;">



<br><br>More cases...

- `Logger.log(message, screenOrFunction, ...messages)`
- `Logger.success(message, screenOrFunction, ...messages)`
- `Logger.info(message, screenOrFunction, ...messages)`
- `Logger.warning(message, screenOrFunction, ...messages)`
- `Logger.error(message, screenOrFunction, ...messages)`
- `Logger.line(message, ...messages)`
- `Logger.box(message, ...messages)`



*(knowing issue - Logger.line in some screens warn no formatText variable found. Working on it. Use Logger.log for more simple logging instead or console.log)*


.


### Parameters

- `message (string)`: The primary log message.
- `screenOrFunction (string, optional)`: The source of the log message, such as the screen or function name. If omitted, defaults to (not called).
- `variable (values / objects)`: Log variable values.



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

// Warn log
Logger.warn('Data fetch took too long:', 'DataScreen');

// Error log
Logger.error('Failed to fetch data:', 'DataScreen', variable);

// Line log (without source)
Logger.line('This is a simple line log');

// Line box
Logger.box('This is a box log');

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
    Logger.box('Debug Here');

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

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on GitHub.

## License

Created by renanmalato
This project is licensed under the MIT License.
