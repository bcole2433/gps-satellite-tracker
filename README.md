## Mapping Operational GPS Satellites

I wanted to fool around with the Mapbox APIs and build a website that tracks the lcoation of the operational GPS satellites relative to Washington, DC.

Tools used in this project:
1) React/Node
2) Mapbox GL JS
3) React-Map-GL Wrapper
4) N2YO Data API for satellite location

Notes: Set up a server in case I wanted to make this more complex or fetch data from server. 

## Getting Started

In the root directory of the project...

1. Install node modules `yarn install` or `npm install`.
2. Start development server `yarn start` or `npm start`.


### Deployment
Deploying to Heroku

## File Structure

The front-end is served on http://localhost:3000/ and the back-end on http://localhost:5000/.

```
.
├── server/ - Express server that provides API routes and serves front-end
│ ├── routes/ - Handles API calls for routes
│ ├── app.js - Adds middleware to the express server
│ ├── constants.js - Defines the constants for the endpoints and port
│ └── server.js - Configures Port and HTTP Server
├── src - React front-end
│ ├── components - React components for each page
│ ├── Context - React Context API for state management
│ ├── images - assets 
│ ├── App.jsx - React routing
│ └── index.jsx - React root component
└── README.md
```