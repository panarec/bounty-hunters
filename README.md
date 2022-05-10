# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Description

The portal will be a tool for so-called "Bounty Hunters", which will allow them to monitor the current demand for criminals with information that will help hunters catch the criminals. 

The main functionality will be an overview of these criminals, but it also includes the possibility of "reserving" the criminal and, after successful "elimination", also the possibility of "removing" from the list of wanted and simulated rewarding of user. For a better overview, hunters will have various statistics and gadgets available.

# Functionality

### Homepage
The main page will be used to display a list of wanted criminals through the FBI database. Each criminal will be displayed as a card with a name, photo, short description, reward amount and a button that will show the user the details of the criminal on the new page. On one page will be generated 20 criminals with listing possibillity.

There will also be the possibility of filtering criminals, so that the hunter has the opportunity to choose his target based on the specified parameters, e.g. age, eye and hair color, height, date of birth, place, nationality, place of birth, race, reward, gender, weight. All filters will be included in the URL for the user to share, etc.

Several types of inputs, checkboxes, radio buttons, etc. can be used in the filtration form. It will also include the feature called "Reverse filtration".



### Detail page

The detail page will provide detailed information about the wanted criminal, photos etc.. It will also include the c to remove the person and then remove the person from the wanted list. Upon successful removal, the hunter will be fictitiously rewarded.


### Statistics

Based on the data of all searches, statistics will be generated for a greater overview and graphical display of this data.

