# Online Resume Parser

## Install/Import Backend Dependencies

The backend server is implemented using Flask.
Make sure to run `pip install Flask`

The resume parser script was created by Omkar Pathak and can be found [here](https://github.com/OmkarPathak/pyresparser).
Make sure to install it using `pip install pyresparser`

## Run the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How it works

You can find more info about how exactly the resume parser algorithm works on the pyresparser github page which can be found [here](https://github.com/OmkarPathak/pyresparser).
Basically, it uses an NLP algorithm called NER (Named Entity Recognition) to figure out keywords in the resume.