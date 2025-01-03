# Changelog

## [1.0.7] - 2024-07-10

### Added

- Improved object logging with `JSON.stringify`
- Enhanced handling of screen name and message parameters

### Fixed - 1.0.7

- Ensure proper logging of screen name when only two strings are passed

__________________________

## [1.0.8] - 2024-07-10

### Fixed - 1.0.8

- Fixed Error and Warning logging just 1 line
- Improved README

__________________________

## [1.0.10/11] - 2024-07-10

### Fixed - 1.0.10/11

- Changes in README

__________________________

## [1.1.0] - 2024-07-10

### Added - 1.1.0

- `Logger.box` for designed box-logged separation when a screen gets focus or other functionalities idea

### Fixed - 1.1.0

- Other `Logger` functions fixed to log each key with `LOG` label

### Improved - 1.1.0

- README

__________________________

## [1.2.0] - 2024-07-14

### Fixed - 1.2.0

- Imports for CommonJS

### Improved - 1.2.0

- README

__________________________

## [1.2.1] - 2024-07-14

### Fixed - 1.2.1

- Condition check to export for CommonJS

### Improved - 1.2.1

- README

__________________________

## [1.2.2] - 2024-07-14

### Fixed - 1.2.2

- TypeScript file to follow last changes

__________________________

## [1.2.3] - 2024-07-14

### Fixed - 1.2.3

- Logging error and warning by itself just in 1 line; other subsequent lines of these cases are `LOG`

__________________________

## [1.2.4] - 2024-07-14

### Fixed - 1.2.4

- Logging error and warning by itself just in 1 line; other subsequent lines of these cases are `LOG`. Even the variable was being logged with `console.error` or `warn`, now just the 1st argument message should be.

__________________________

## [1.2.5] - 2024-07-14

### Fixed - 1.2.5

- `Logger.box` is fitting variables and objects correctly

__________________________

## [1.2.6] - 2024-07-14

### Fixed - 1.2.6

- before timeStamp break line

__________________________

## [1.2.7] - 2024-07-19

### Fixed - 1.2.7

- Box method was having trouble to log complex objects, null or undefined

- Fixed not throwing error when Logging undefined, null, and complex objects in all cases

__________________________

## [1.2.8] - 2024-07-19

### Fixed - 1.2.8

- Added 1 more fall back to 1.2.7 to fix

__________________________

## [1.2.9] - 2024-07-24

### Fixed - 1.2.9

- Log variables from useState true or false
- if user acidentally pass variable as second argument will not say from (variable)

__________________________

## [1.2.10] - 2024-07-24

### Fixed - 1.2.10

- Log variables from useState true or false
- if user acidentally pass variable as second argument will not say from (variable)
- recommit

__________________________

## [1.2.11] - 2024-07-24

### Fixed - 1.2.11

- Fixed Type flag on the messages to :any
