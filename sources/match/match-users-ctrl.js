/* global angular */
(function() {
    'use strict'

    angular.module('match')
        .controller('MatchUsersCtrl', MatchUsersCtrl);

    function MatchUsersCtrl($log, $route, $routeParams, $location, MatchUsers) {
        var vm = this;
        vm.firstuser = $routeParams.firstuser;
        vm.seconduser = $routeParams.seconduser;
        vm.match = MatchUsers.match;
        vm.isWinnerFirst = isWinnerFirst;
        vm.isWinnerSecond = isWinnerSecond;
        vm.resultAvailable = resultAvailable;

        MatchUsers.getData($routeParams.firstuser, $routeParams.seconduser);

        function isWinnerFirst(login) {
            if (vm.firstuser === vm.match.result.winner.login) {
                return true;
            }
            return false;
        };

        function isWinnerSecond(login) {
            if (vm.seconduser === vm.match.result.winner.login) {
                return true;
            }
            return false;
        };

        function resultAvailable() {
            if (!_.isUndefined(vm.match.result.winner)) {
                return true;
            }
            return false;
        };
    };
})();
