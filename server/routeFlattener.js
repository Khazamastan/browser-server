"use strict";
var _ = require('underscore')

module.exports = {

  /* APP Route Flattner for given array of routes.

   If we want to resue this for API calls from WebApp
   use preRouterMiddleware for Cookie Check.

   If we want to resue this for API calls from REST Interfaces
   use preRouterMiddleware for Http Basic Auth Check.

   This can avoid writing Auth.XXX at starting of middleware functions.
   */

  handleRoute: function (app, routes, preRouterMiddleWare) {
    _.each(routes, function (route) {

      if (preRouterMiddleWare)
        route.middleware.unshift(preRouterMiddleWare)

      var args = _.flatten([route.path, route.middleware]);

      switch (route.httpMethod.toUpperCase()) {
        case 'GET':
          app.get.apply(app, args);
          break;
        case 'POST':
          app.post.apply(app, args);
          break;
        case 'PUT':
          app.put.apply(app, args);
          break;
        case 'DELETE':
          app.delete.apply(app, args);
          break;
        case 'PATCH':
          app.patch.apply(app, args);
          break;
        case 'OPTIONS':
          app.options.apply(app, args);
          break;
        default:
          throw new Error('Invalid HTTP method specified for route ' + route.path);
          break;

      }
    })
  }
};