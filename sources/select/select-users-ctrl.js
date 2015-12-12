/* global angular */
(function() {
    'use strict'

    angular.module('selection')
        .controller('SelectUsersCtrl', SelectUsersCtrl);

    function SelectUsersCtrl($location) {
        var vm = this;
        vm.firstuser = '';
        vm.seconduser = '';

        vm.launchMatch = launchMatch;

        function launchMatch() {
            $location.path('/match/' + vm.firstuser + '/' + vm.seconduser);
        };
    };
})();
