/* global angular */
'use strict';

require('./helpers/helpers.module');
require('./star-rating/star-rating.module');
require('./star-rating/star-rating.component');
require('./star-rating-label/star-rating-label.module');
require('./star-rating-label/star-rating-label.component');
require('./api/api.module');
require('./restaurant-card/restaurant-card.module')

angular.module('core', ['core.starRatingLabel', 'core.starRating', 'core.restaurantCard', 'core.api']);
