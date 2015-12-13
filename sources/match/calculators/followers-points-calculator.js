(function() {
    'use strict'

    angular.module('match')
        .service('FollowersPointsCalculator', FollowersPointsCalculator);

    function FollowersPointsCalculator() {
        var vm = this;
        var weight = 2;
        vm.compute = compute;

        function compute(user) {
            return user.followers * weight;
        };
    };
})();
