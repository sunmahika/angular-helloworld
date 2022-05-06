# Deploy angular project to github steps:

# 1 go to angular.json->outputPath->docs  ["outputPath": "docs"]
# 2 from project say ng build --output-path myDocs --base-href project_name
# 3 go to github.com login and create new repository
# 4 open gitbash terminal from within your project folder and follow commands
# git init
# git remote add origin https://github.com/sunmahika/angular-helloworld.git
# git add .
# git status
# git commit -m "First Angular Project added to github"
# git push -u origin master
# go to github and refresh and will see code uploaded
# go to settings in gihub -> Github pages-> select master and docs ->save 
# After saving will get the link as below
# Your site is ready to be published at https://sunmahika.github.io/angular-helloworld/


# WelcomeGuys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
