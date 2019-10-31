# BlockchainGateway

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Drop database

Run `dropdb -U postgres blockchain` to drop the current database.

## Create database

Run `createdb -h localhost -p 5432 -U postgres -E utf8 blockchain` to create new database.

## Import database

Run `psql -U postgres blockchain < blockchainexport.sql` from backend folder.

## Export database

Run `pg_dump -U postgres blockchain > blockchainexport.sql` from backend folder.
