/* global angular */
(function() {
    'use strict';

    angular.module('vendors', ['ngResource', 'ngRoute', 'ngAria', 'ngAnimate', 'ngMaterial']);
    angular.module('selection', []);
    angular.module('match', []);
    angular.module('usersGithubMatcherApp', ['vendors', 'selection', 'match']);
})();
