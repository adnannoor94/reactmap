# About

An interactive react app that shows fullscreen Google Map with an option to save any clicked location that will be accessible in a searchable list.
Demo: [https://adnannoor.me/reactmap](https://adnannoor.me/reactmap)

There are some locations that are pre-filled and hardcoded in src/context/MapContext.js

# The Code Behind

In terms of react, the whole application is divided in 4 major components: **LocationNamePopup, SaveLocationPopup, SearchField** and **Map**. As the name suggests, each component deals with all the working regarding the named functionality.

For embedding Google Maps, **google-map-react** npm repo is used.

**Predictable State Container** is implemented though ContextAPI by React. Component share a global level state where required.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial Installation

After copying the repository, run `npm install` in the local directory to install all the required dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
