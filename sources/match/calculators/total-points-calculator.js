(function() {
    'use strict'

    angular.module('match')
        .service('TotalPointsCalculator', TotalPointsCalculator);

    function TotalPointsCalculator(RepositoriesPointsCalculator, FollowersPointsCalculator) {
        var vm = this;
        vm.compute = compute;

        function compute(user) {
            return RepositoriesPointsCalculator.compute(user) + FollowersPointsCalculator.compute(user);
        };
    };
})();
