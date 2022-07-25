# BOARB - The Thinking Board

## Table of Contents

1. [General information](#General-information)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Author](#author)

## General information

This WebApp is a personal board for reminder tasks in the form of posts-its.
It was developed as part of CheckPoint 4 of the Wild Code School Javascript Developer Training in June 2022 by [Juliane Casier](https://www.linkedin.com/in/juliane-casier-bb642832/)

### Project status and progress

This project was developed in 2 days and is an end of course project. It works but the functionalities are simple:

- create a new table of posts-its
- Create posts-its of 3 different colors
- Fill a post it with text
- Move (drag and drop) the post-its on a table.

## Technologies

This project is written in React

### Template

- Template` : Application developed on React, Node Express from a [template](https://github.com/WildCodeSchool/js-template-fullstack) developed by the Wild Code School. Only the front end was used

**Tools used in this template:**

- _Concurrently_ : Allows to execute several commands in the same terminal
- _Husky_ : Allows to execute actions when triggered by _git_ commands
- _Vite_ : Alternative to _Create-React-App_, with fewer packages for a smoother experience
- _ESLint_ : "Code quality" tool, ensures that pre-configured rules are respected
- _Prettier_ : "code quality" tool, also focuses on code style
- _Standard Airbnb_ : One of the most famous "standards", even if it is not officially linked to ES/JS
- _Nodemon_ : Tool to restart a server each time one of the files is modified

### Other libraries

- Redux: Redux was used to manage user information at login or registration time and throughout the navigation
- React DND` : To manage the Drag and Drop of posts-its, React DND was used
- Other miscellaneous libraries:
  - Styled Component was used to manage the styling of the application.
  - React Router to manage links between pages.
  - Prop-types to type the props.

## Installation

### To start a project

    On VSCode, install Prettier - Code formatter and ESLint plugins and configure them
    Clone this repository, go inside
    Run the npm run setup command

### List of commands and meaning

    setup : Initialization of the frontend and backend and tools
    dev : Start the three servers (frontend + backend + admin) in the same terminal
    dev-front : Start a React server for the frontend
    lint: Run code validation tools (will be executed automatically at each commit)
    fix : Fix formatting errors (to be run if lint doesn't pass)

## Author

This project was developed as part of the end of the Wild Code School Javascript web developer training in June 2022 by [Juliane Casier](https://www.linkedin.com/in/juliane-casier-bb642832/)

Translated with www.DeepL.com/Translator (free version)
