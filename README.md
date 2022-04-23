# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm install`

To install all the necessary dependencies, then run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Hosting

This website is hosted using Vercel's React CI/CD, you can directly visit this [deployment link](https://search-optimizer.vercel.app/) to open the deployed version of the app.
Having CI/CD integration helps the project to auto deploy based on each push request to GitHub.

### Architecture

This application is built using React which provides SPA feature to search details of an artist. the application has following features:

- The application can fetch result based on artist's name
- The user get's a seemless experience of search results based on the searched item
- The screen loads when the API result is being fetch
- The screen shows the card result when the API is completely resolved
- The user can click on the card to see the upcoming events of the artist
- The name of artist is cached to local storage of the browser therefore it persists the `name` state even on browser is refreshed
- The API calls are saved on each key pressed. As the API is only called once the user stops pressing the keys for 300 ms
- The application uses lodash to memoize search results and avoid API calls of same name
