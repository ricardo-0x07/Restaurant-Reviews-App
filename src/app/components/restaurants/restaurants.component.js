/* global angular */
'use strict';

// var globals = require('../../../assets/js/globals');
require('../../core/api/api.module');
global.jQuery = require('jquery');
require('bootstrap');
require('jquery-ui');

angular.module('restaurants')
    .component('restaurants', {
        templateUrl: '/restaurants/restaurants.template.html',
        controller: ['APIService', function RestaurantsController(APIService) {
            var $ctrl = this;
            $ctrl.getMoreData = function() {
                console.log('loadMore');
                $ctrl.pageChanged();
            };
            $ctrl.pageChanged = function() {
                APIService.get('./data/restaurants.json')
                .then(function(response) {
                    console.log('response', response);
                    if (response.data) {
                        $ctrl.data = response.data;
                    }
                });
            };
        }],
        bindings: {
            data: '<'
        }
    });
