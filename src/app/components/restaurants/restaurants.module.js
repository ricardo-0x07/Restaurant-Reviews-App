/* global angular */
'use strict';

// var globals = require('../../../assets/js/globals');
require('../../core/api/api.module');
global.jQuery = require('jquery');
require('bootstrap');
require('jquery-ui');

module.exports = angular.module('restaurants', [
    'core.api', 'ui.router'
])
.config(['$locationProvider', '$httpProvider', '$stateProvider',
  function($locationProvider, $httpProvider, $stateProvider) {
      $stateProvider.state({
          name: 'restaurants',
          url: '/restaurants',
          data: {
              access: {
                  loginRequired: false
              }
          },
          component: 'restaurants',
          resolve: {
              data: ['APIService',function(APIService) {
                  return APIService.get('./data/restaurants.json')
                  .then(function(response) {
                      console.log('response', response);
                      return response.data;
                  });
              }]
          }
      });
  }
]);
