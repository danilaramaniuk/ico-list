## To see the app:
http://icolist-env.pms2mz993d.eu-central-1.elasticbeanstalk.com/

## To run app locally:

### In client:
* yarn install
* yarn start

### In server:
* yarn install
* yarn server

open in http://localhost:8080/

## How to test:

  App has 4 tabs: Bitcoin, Litecoin, Ethereum and Results. On tabs Bitcoin, Litecoin, Ethereum you will find a bar chart and card with contribution information. On bar click information on the card will be updated. On the Results tab you will find a header with total amount for each cryptocurrency and slider. Also Results tab contains all contributions cards and it possible to filter by slider.

## Technical thoughts:

 I made feature folders structure for frontend. In case we want to add a new feature we just doing a new folder with this feature and adding own containers, components, actions, reducers and sagas in this folder. In common folder we store tools that can be shared between features. To reduce redux boilerplate I am using redux-actions. To work with side effects I’m using redux-saga because it easy to test and it works good with complex side effects. For building UI is used styled-components lib (I feel ok with css in js). For charts is used chart.js because in my opinion it's easy to use an it's a configurable.

 For backend is used express as a framework because it easy to use and well known.

## UI/UX:

 Content of the app is written by containers and on every tab click we do request to update values. To reduce repeated containers code I made a container builder.

## CI:

 For CI I’m using travis. I check the test coverage and in case it’s ok travis build docker images and after it make a deploy to AWS Elastic Beanstalk. To check tests is used docker spec file. It easy to add pipelines for eslint if needed.

## Dockerize and Deployment:

 I have docker files for client, for server and for nginx. I dockerized all this to easy make deployment to AWS Elastic Beanstalk.

## Testing:

  For testing I’m using jest + 3rd party libraries for rendering and for testing redux-saga. Also I’m using snapshot testing.


