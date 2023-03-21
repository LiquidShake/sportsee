# Description

SportSee is a web app that let a user track their sport activity data.
Please follow the instructions bellow step by step to access the Home Page of the app.

# Prerequisites

- NodeJS v17.7.1 or higher
- Yarn
- NPM
- A minimal resolution of 1024*780 on your screen

# Installation

## 1. Backend and API

Please clone the folllowing repository on your computer : <br />
<code>git clone</code> https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

Open a terminal at the location where you cloned the repository and type :
- <code>yarn</code> That will allow you to install the depedencies
- <code>yarn dev</code> That will allow you to run the API on the port 3000 of your localhost

## 2. Frontend

Please clone the following repository on your computer :<br />
<code>git clone</code> https://github.com/LiquidShake/sportsee

Open a terminal at the location where you cloned the repository and type :
- <code>npm start</code> That will allow you to run the app on your localhost.<br />
Default port of running is 3000 but is already taken by the API, so you might see in your terminal a message like :<br />
<code>Would you like to run the app on another port instead? >> (Y/n)</code><br />
If so, please accept the message by typing <code>Y</code> so the app will run on the next available port of your localhost (might be <code>:3001</code>)

## 3. Navigate through the app

You have now access to the app and are directly on the Home Page, enjoy !

# To use the mocked data instead of API

In the frontend environement go to src > components > pages > Dashboard > index.jsx<br />
 - Uncomment lines 3 to 6 and lines 30 to 48
 - Comment lines 51 to 90
