/* global angular */
(function() {
    'use strict'

    angular.module('match')
        .controller('MatchUsersCtrl', MatchUsersCtrl);

    function MatchUsersCtrl($log, $route, $routeParams, $location) {
        $log.info('MatchUsersCtrl loaded');
        $log.info($route);
        $log.info($routeParams);
        $log.info($location);
    };
})();
