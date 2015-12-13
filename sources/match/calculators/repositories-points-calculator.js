(function() {
    'use strict'

    angular.module('match')
        .service('RepositoriesPointsCalculator', RepositoriesPointsCalculator);

    function RepositoriesPointsCalculator() {
        var vm = this;
        var weight = 4;
        vm.compute = compute;

        function compute(user) {
            return user.repositories.length * weight;
        };
    };
})();
