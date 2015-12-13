/* global angular */
(function() {
    'use strict'

    angular.module('match')
        .controller('MatchUsersCtrl', MatchUsersCtrl);

    function MatchUsersCtrl($log, $route, $routeParams, $location, MatchUsers) {
        var vm = this;
        vm.firstuser = MatchUsers.firstuser;
        vm.seconduser = MatchUsers.seconduser;
        vm.match = MatchUsers.match;

        $log.info('MatchUsersCtrl loaded');
        $log.info($route);
        $log.info($routeParams);
        $log.info($location);
        MatchUsers.getData('ptaillard', 'johndoe');
    };
})();
