/* global angular */
(function() {
    'use strict';

    angular.module('usersGithubMatcherApp')
        .config(routeConfigurator);

    function routeConfigurator($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/select-users.html',
                controller: 'SelectUsersCtrl',
                controllerAs: 'selectUsers'
            })
            .when('/match/:firstuser/:seconduser', {
                templateUrl: 'templates/match-users.html',
                controller: 'MatchUsersCtrl',
                controllerAs: 'matchUsers'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
})();
