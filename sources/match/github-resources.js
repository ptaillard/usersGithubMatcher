/* global angular */
(function() {
    'use strict'

    angular.module('match')
        .factory('resourceGithubEntryPoint', resourceGithubEntryPoint)
        .service('resourceGithubApi', resourceGithubApi);

    function resourceGithubEntryPoint($resource) {
        return $resource(
            'https://api.github.com/users/:name', {name: '@name'}, {
                'get':    {method:'GET'}
            }
        );
    };

    function resourceGithubApi($resource) {
        var service = this;
        service.resource = resource;

        function resource(url) {
            var resource = $resource(url, {}, {
                    'query':    {method:'GET', isArray: true}
                }
            );
            return resource.query().$promise;
        };
    };
})();
