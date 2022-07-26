# AksigortaAngularEmployees

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

Input data:
A CSV file with data in the following format:
 ```EmpID, ProjectID, DateFrom, DateTo```

Example data: 
   ```
    100, 10, 2018-09-11, 2019-11-19
    101, 10, 2022-06-02, NULL
    102, 10, 2019-05-06, 2020-01-16
    103, 11, 2018-10-21, 2021-05-07
   ```
Output format:
 ```EmployeeID_1, EmployeeID_2, ProjectID, TotalDays```

Sample output: 
```
    100, 102, 10, 197
```

## Technologies
* Angular - [Angular 14.1.0](https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296)
* Node.js - [Node.js 16.15.1](https://nodejs.org/en/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Resources

https://programmingwithswift.com/how-to-compare-dates-with-typescript/

https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

https://stackoverflow.com/questions/47581687/read-a-file-and-parse-its-content
