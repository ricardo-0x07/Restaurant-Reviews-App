/* global angular */
'use strict';

angular.module('core.restaurantCard', ['ng-polymer-elements'])
.component('restaurantCard', {
    templateUrl: '/core/restaurant-card/restaurant-paper-card.template.html',
    controller: ['$filter', function RestaurantCardController($filter) {
        var $ctrl = this;
        $ctrl.collapsed = false;
        $ctrl.newReview = {};
        $ctrl.maxStarRating = 5;
        $ctrl.newReview.rating = 0;
        $ctrl.collapse = function() {
          var moreInfo = angular.element('#more-info-'+ $ctrl.restaurant.id);
          var iconButton = angular.element('#icon_button_'+ $ctrl.restaurant.id);
          iconButton[0].icon = moreInfo.is( ":visible" ) ? 'hardware:keyboard-arrow-up' : 'hardware:keyboard-arrow-down';
          moreInfo.toggle();
        };
        $ctrl.recommend = function() {
        	console.log('recommend restaurant: ' + $ctrl.restaurant.name);
        };
        $ctrl.update = function(prop, value) {
          console.log('value', value);
          $ctrl.newReview[prop] = value;
        };
        $ctrl.submit = function() {
          $ctrl.newReview.date = $filter('date')(Date.now(), "yyyy-MM-dd");
          console.log('$ctrl.newReview.date', $ctrl.newReview.date);
          console.log('$ctrl.newReview', $ctrl.newReview);
          console.log('$ctrl.restaurant.reviews', $ctrl.restaurant.reviews);
          $ctrl.restaurant.reviews.push($ctrl.newReview);
          console.log('$ctrl.restaurant.reviews', $ctrl.restaurant.reviews);
          // $ctrl.newReview.rating = 0;
          $ctrl.newReview = {};
          // $state.reload();        
        };
    }],
    bindings: {
        restaurant: '<'
    }
});
