/* global angular */
'use strict';

angular.module('core.starRating')
.component('starRating', {
    templateUrl: '/core/star-rating/star-rating.template.html',
    controller: [function StarRatingController() {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            console.log('$ctrl.maxStarRating', $ctrl.maxStarRating);
            $ctrl.change($ctrl.starRating);
        };

        $ctrl.click = function(starRating) {
            console.log('starRating', starRating);
            $ctrl.starRating = starRating;
            $ctrl.ratingChanged({newRating: starRating});
            $ctrl.change($ctrl.starRating);
        };

        $ctrl.change = function(newVal) {
            console.log('change', newVal);
            // if (newVal) {
            $ctrl.stars = [];
            var starRating = $ctrl.starRating;
            for (var i = 0; i < $ctrl.maxStarRating; i++) {
                $ctrl.stars.push({empty: i >= starRating, index: i + 1});
            }
            console.log('$ctrl.stars', $ctrl.stars);
            // }
        };

        $ctrl.$onDestroy = function() {
        };
    }],
    bindings: {
        starRating: '<',
        maxStarRating: '<',
        ratingChanged: '&'
    }
});
