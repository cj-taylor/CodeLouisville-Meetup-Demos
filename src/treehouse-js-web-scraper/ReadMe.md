# Treehouse JS Web Scraper 

[![Build Status](https://travis-ci.org/cj-taylor/CodeLouisville-Meetup-Demos.svg?branch=master)](https://travis-ci.org/cj-taylor/CodeLouisville-Meetup-Demos)[![Coverage Status](https://coveralls.io/repos/github/cj-taylor/CodeLouisville-Meetup-Demos/badge.svg?branch=master)](https://coveralls.io/github/cj-taylor/CodeLouisville-Meetup-Demos?branch=master)

## Description 
Manually checking Treehouse for updates to the course can be tedious and time consuming so let's automate that with web scraping! (Plus an entry point to unit testing!)

## Dependencies
- Node install 
- Npm installed
- VSCode "recommended" 

## Using this 
- via terminal/cmd
- `git clone https://github.com/cj-taylor/CodeLouisville-Meetup-Demos.git`
- `cd treehouse-js-web-scraper`
- `npm install`
- `npm run-script run`

## Running the unit tests 
- via terminal/cmd
- `cd treehouse-js-web-scraper`
- `npm run test`
- **NOTE:** tests live in [`src/treehouse-js-web-scraper/test`](https://github.com/cj-taylor/CodeLouisville-Meetup-Demos/tree/master/src/treehouse-js-web-scraper/test)

## Debugging this 
- `cd js-web-scraper` 
- `code .`
- Press `F5` or Navigate to `Debug Menu > Play Button > Select NodeJS`

## Sample Output 
```
[4:35:24] cj :: CJ-MBP  ➜  github/CodeLouisville-Meetup-Demos/js-web-scraper ‹master*› » npm run-script run

> treehouse-js-web-scraper-demo@1.0.0 run /Users/cj/proj/scm/github/CodeLouisville-Meetup-Demos/treehouse-js-web-scraper
> node app.js

{ id: 0, name: 'JavaScript Basics', estimate: '6 hours' }
{ id: 1, name: 'JavaScript Loops, Arrays and Objects', estimate: '4 hours' }
{ id: 2, name: 'jQuery Basics', estimate: '5 hours' }
{ id: 3, name: 'Using jQuery Plugins', estimate: '92 min' }
{ id: 4, name: 'Interactive Web Pages with JavaScript', estimate: '2 hours' }
{ id: 5, name: 'AJAX Basics', estimate: '5 hours' }
{ id: 6, name: 'Understanding "this" in JavaScript', estimate: '13 min' }
{ id: 7, name: 'Object-Oriented JavaScript', estimate: '2 hours' }
{ id: 8, name: 'The Module Pattern in JavaScript', estimate: '16 min' }
{ id: 9, name: 'Node.js Basics', estimate: '2 hours' }
{ id: 10, name: 'Build a Simple Dynamic Site with Node.js', estimate: '2 hours' }
{ id: 11, name: 'npm Basics', estimate: '76 min' }
{ id: 12, name: 'Using npm as a Task Runner', estimate: '14 min' }
{ id: 13, name: 'Git Basics', estimate: '4 hours' }
{ id: 14, name: 'Express Basics', estimate: '3 hours' }
{ id: 15, name: 'Gulp Basics', estimate: '2 hours' }
{ id: 16, name: 'Angular Basics', estimate: '3 hours' }
{ id: 17, name: 'Mongo Basics', estimate: '87 min' }
{ id: 18, name: 'Building a MEAN Application ', estimate: '2 hours' }
{ id: 19, name: 'JavaScript Unit Testing', estimate: '3 hours' }
```

## References to cool things used in here
- Npm postinstall symlink to abstract away relative module path nuances 
    - https://gist.github.com/branneman/8048520#1-the-symlink
- Npm test scripts + coveralls 
    - https://strongloop.com/strongblog/npm-modules-travis-coveralls/
- Run npm scripts in a git pre-commit Hook
    - http://elijahmanor.com/npm-precommit-scripts/
