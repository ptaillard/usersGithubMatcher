(function() {
    'use strict'

    angular.module('match')
        .service('ComputeMatch', ComputeMatch);

    function ComputeMatch(TotalPointsCalculator) {
        var vm = this;
        vm.compute = compute;

        function compute(firstuser, seconduser) {
            var result = {
                winner: {}
            };

            var firstUserPoints = TotalPointsCalculator.compute(firstuser);
            var secondUserPoints = TotalPointsCalculator.compute(seconduser);
            if(firstUserPoints > secondUserPoints) {
                result.winner.login = firstuser.login;
                result.winner.points = firstUserPoints;
            } else {
                result.winner.login = seconduser.login;
                result.winner.points = secondUserPoints;
            }
            return result;
        };
    };
})();
