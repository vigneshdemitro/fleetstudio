# Full-Stack app for Github commit diff
- This is a simple app which gives the commit diff details for the given repository with owner details and commit id

# Tech Stack of app
- UI - **React.js**
- Server - **Nest.js**

# Steps to run the app in local environment

1. Clone the repository
2. Navigate to app folder README.md for instructions of how to start the UI
3. Navigate to server folder README.md for instructions of how to start the server

# Info about picking tech stacks used

_React.js_
- This library is picked for the reason which is lite, makes development faster and easy to scale.
- JSX elements are similar to HTML elements which can be used to render.
- Single Page application system minimises re-rendering of the page multiple times in the browser.

_Nest.js_
- It's a framework with typescript integration where creating a API is easy.
- Have a structure where each API are like modules.
- When we create a 

# NPM Packages

***app***

- axios -> To make HTTP request to server
- @mui/material -> styling
- codemirror-react -> To show the code of the patch file recieved from Git commit
- javascript-time-ago -> To display the recieved time in time-ago format ex: 4 days ago

***server***

- @nestjs/swagger -> swagger doc to give the server api details 
- @octokit/rest -> Github api to fetch commits
- class-validator -> To validate the api inputs
- isomorphic-fetch -> To fetch the api requests

# Task information

- Completion level - 80%

- Implemented the api to fetch the commit from Github api in server
- Designed the UI based on the figma design given

_Had time constraints for the following_
- To implement the full css in the page.
- In UI github file info code-viewer is repeated twice which is due to route or page re-render multiple times.