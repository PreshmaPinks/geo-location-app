# Getting Started with Geo-Location-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# My Approach

Firstly I looked at overall requirement and tried to visulize the application. As the openstreetmap API needs a bounding box, I needed a input boxes to get user input for bounding box coordinates.

Then I analyzed the openstreetmap API response and feature objects.

I also researched about the "osmtogeojson" libarary and the format it accepts as an input.

Then I researched about possible options to display geojson dataset. Two options were d3 and react-leaflet. Based on the documentation I decided to use react-leaflet.

I started to code the application.
I created following components

1. main - Displays the map and holds geoLocationBox component. Displays all the features on a popup of a marker in the map once users submits the coordinates.
2. geoLocationBox - Holds four input boxes for minimum longitutude, maximum longitude, minimum latitude, maximum latitude
3. currentLocation - focuses on the users current location.
4. geoLocationServices.js - It is a function to make a call to openstreetmap API with bbox coordinates.

# Test case

I was not able to write the test, because jest was throwing an error with respect to current version react-leaflet node module.
Due to limited time I was not able to try with different react-leaftlet version or another library. If the error is resolved I would write test using react-testing-library for following cases.

1. Loads the map and displays user location
2. Loads the features once user submits the bounding box coordinates. I will mock the geoLocation service to return an osm object with features.
3. Displays the error when user input invalid coordinates.
