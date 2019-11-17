# redux-saga-example

## This is just to demonstrate how redux saga works

##Steps for using the application
1. Start the server using the command `npm run start:server`
2. Start the front end application by using the command `npm start`
3. Launch the application in your browser by `http://localhost:9090`

Currently there are 2 actions defined in the application. `FetchEvery` and `FetchLatest`.

I have set a delay of 2 seconds for the network response to effectively demonstrate the difference between these 2 actions.

Try clicking on the button continuously even before the network response appears on the screen.

FetchEvery will return all the subsequent network response  whereas fetchLatest will return only the latest response