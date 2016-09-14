/* global angular */
'use strict';

angular.module('core.starRatingLabel')
.component('starRatingLabel', {
    templateUrl: '/core/star-rating-label/star-rating-label.template.html',
    controller: [function StarRatingController() {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            console.log('$ctrl.maxStarRating', $ctrl.maxStarRating);
            $ctrl.change();
        };

        $ctrl.change = function() {
            $ctrl.stars = [];
            var starRating = $ctrl.starRating;
            for (var i = 0; i < $ctrl.maxStarRating; i++) {
                $ctrl.stars.push({empty: i >= starRating, index: i + 1});
            }
            console.log('$ctrl.stars', $ctrl.stars);
        };

        $ctrl.$onDestroy = function() {
        };
    }],
    bindings: {
        starRating: '<',
        maxStarRating: '<'
    }
});
