/* global angular */
(function() {
    'use strict'

    angular.module('selection')
        .controller('SelectUsersCtrl', SelectUsersCtrl);

    function SelectUsersCtrl($log, $route, $routeParams, $location) {
        $log.info('SelectUsersCtrl loaded');
        $log.info($route);
        $log.info($routeParams);
        $log.info($location);
    };
})();
