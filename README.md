# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## PCI Energy Solutions

Requirements: Most recent LTS version of Node. If you cannot install this version of Node on your machine, you can code/pseudo-code to the best of your ability.

This is an example project that presents you with a made-up scenario that will mimic some of the tasks that may need to be completed on a daily basis at PCI. It is intended to allow you to showcase your experience. If at any point something is unclear, please list it within this README. If you make any assumptions along the way, list those here as well. Also feel free to write anything else here that you would like considered when we review your approach. Do not install any new packages. We should be able to view your UI after running "npm install" and "npm start". Do not make any changes to the data source "near-earth-asteroids.json". If you feel you cannot complete one of the tasks, please move on to the next one and explain in this README.

### Scenario

Within this repo is a demo UI that our team needs to make some changes to before it goes to production. Clients have requested some new features, and it is your job to implement those. We have a few "stories" (or changes to be made) below. Please commit your changes along the way. On your final commit for each change, use the message "Task #X" where X is the number next to the task below. The documentation for our grid component can be found here: <https://www.ag-grid.com/react-data-grid/>.

1. The client would like a title on this page. Above the table, but within the app window, add a title that says "Near-Earth Object Overview". Please also make this title replace the default "React App" that shows on the tab for this window. This will give a clear indication of what the table and application are for.
2. While this list of data is great, it would be useful for the user to be able to interact with beyond scrolling. We need to add sorting to the grid. Make the changes necessary to allow the user to sort all columns. String columns should sort alphabetically. Numerical columns should sort by value. Date columns should sort chronologically. In addition to sorting, the user wants to be able to filter their data. Numeric columns should have a filter that supports numerical filtering, and string columns should have a filter that supports string filtering.
3. The users have complained that the dates are not very readable. Please display the dates in a format that is more human-readable. I will trust your input on what format is best in this case.
4. Rather than just displaying Y or N or n/a in the Potentially Hazardous column, we should display "Yes", "No", and a blank cell for those values respectively.
5. The users would like to be able to copy the information from this grid into a software like Excel. The user should be able to select any portion of this grid, copy the data, and paste it into excel. When they do this, they should get only the data that is copied, and they should get that data as it is displayed within the grid.
6. The users want to be able to quickly clear all filtering and sorting that is going on in their grid. They want one button they can click that will restore the grid to it's default view, unfiltered and unsorted. Can you add a button (of any kind) to the right of the title we added previously? The button should say "Clear Filters and Sorters" and should be positioned with a 15px space between the title and the button.
7. Lastly, this grid is going to go to production soon, and other developers will begin doing work on this project. While creating this demo, considerations were not made to keep the code clean and organized. Please organize this codebase so that it is easier to find and make changes to components, as well as finding any interfaces, types, or helper functions.

After completing this project, please push any changes you made to a publicly accessible GitLab or GitHub repository and include that link in an email to your contact at PCI. Thank you!

### Task #5 - Can't complete explanation

Based on AG Grid [documentation](https://www.ag-grid.com/javascript-data-grid/modules), the ability to select a range of table cell and copy and paste it is available if we install `ag-grid-enterprise` package. We can also specifically add the range module selection alone by installing this package `@ag-grid-enterprise/range-selection`. If we go by specific module installation we can reduce the bundle size instead installing `ag-grid-enterprise` directly.

Aside from this, I wasnt able to find another way to complete task #5. I would really appreciate if theres another way to complete it and learn from you guys.
