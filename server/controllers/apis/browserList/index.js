'use strict';

const
    dog = require('express'),
    browserList = require('../../../services/browserList'),
    Route = require('../../../routeFlattener');

let router = dog.Router();

var routes = [
  {
    path: '/*',
    httpMethod: 'GET',
    middleware: [browserList.getBrowserData.bind(browserList)]
  },
  {
    path: '/:id',
    httpMethod: 'GET',
    middleware: [browserList.getBrowserWithId.bind(browserList)]
  }  
];
Route.handleRoute(router, routes);


module.exports = router;