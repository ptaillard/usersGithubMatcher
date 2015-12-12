(function() {
    'use strict'

    angular.module('match')
        .service('MatchUsers', MatchUsers);

    function MatchUsers(resourceGithubEntryPoint, resourceGithubApi, $log) {
        var vm = this;
        vm.firstuser = {};
        vm.seconduser = {};

        vm.getData = getData;

        function getData(firstuser, seconduser) {
            resourceGithubEntryPoint.get({name: firstuser}).$promise.then(function(data) {
                _.extend(vm.firstuser, data);
                $log.debug(vm.firstuser.repos_url);
                resourceGithubApi.resource(vm.firstuser.repos_url).then(function(data) {
                    $log.debug(data);
                    vm.firstuser.repositories = data;
                });
            });

            resourceGithubEntryPoint.get({name: seconduser}).$promise.then(function(data) {
                _.extend(vm.seconduser, data);
                $log.debug(vm.seconduser.repos_url);
                resourceGithubApi.resource(vm.seconduser.repos_url).then(function(data) {
                    $log.debug(data);
                    vm.seconduser.repositories = data;
                });
            });
        };
    };
})();
