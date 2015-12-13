/* global _ */
(function() {
    'use strict'

    angular.module('match')
        .service('LoadUser', LoadUser);

    function LoadUser($q, resourceGithubEntryPoint, resourceGithubApi, $log) {
        var vm = this;
        vm.load = load;

        function load(user) {
            var deferred = $q.defer();
            var userdata = {};
            resourceGithubEntryPoint.get({name: user}).$promise.then(function(data) {
                _.extend(userdata, data);
                resourceGithubApi.resource(userdata.repos_url)
                    .then(function(data) {
                        $log.debug(data);
                        userdata.repositories = data;
                        deferred.resolve(userdata);
                    })
                    .catch(function(data) {
                        deferred.reject(new Error('Error while loading repositories url for user ' + user));
                    });
            })
            .catch(function(data) {
                deferred.reject(new Error('Error while loading user ' + user));
            });
            return deferred.promise;
        };
    };
})();
