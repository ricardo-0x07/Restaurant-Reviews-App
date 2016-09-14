/* global angular, window */
'use strict';
global.jQuery = require('jquery');
var $ = require('jquery');

require('bootstrap');
require('angular');
require('angular-mocks');
require('angular-material');
require('angular-animate');
require('angular-messages');
require('./components/navigation-bar/navigation-bar.module');
require('./core/core.module');
require('angular-ui-bootstrap');
require('./components/restaurants/restaurants.module');
require('./components/restaurants/restaurants.component');
require('../../bower_components/ng-polymer-elements/ng-polymer-elements');

var dependencies = [
    require('angular-ui-router').default,
    'ui.bootstrap',
    'ngMaterial',
    'ngMessages',
    'navigationBar',
    'core',
    'ng-polymer-elements',
    'restaurants'
];

var corporateDashboardApp = angular.module('corporateDashboardApp', dependencies);

corporateDashboardApp.config(['$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider',
  function($locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/restaurants');
  }
]);

