(function() {
    'use strict'

    angular.module('match')
        .service('MatchUsers', MatchUsers);

    function MatchUsers($q, LoadUser, ComputeMatch) {
        var vm = this;
        vm.match = {
            firstuser: {},
            seconduser: {},
            result: {}
        };

        vm.getData = getData;

        function getData(firstuser, seconduser) {
            var loadFirstUser = LoadUser.load(firstuser).then(function(data) {
                vm.match.firstuser = data;
                return data;
            });
            var loadSecondUser = LoadUser.load(seconduser).then(function(data) {
                vm.match.seconduser = data;
                return data;
            });

            $q.all([loadFirstUser,loadSecondUser]).then(function(res) {
                vm.match.result = ComputeMatch.compute(vm.match.firstuser, vm.match.seconduser);
            });
        };
    };
})();
