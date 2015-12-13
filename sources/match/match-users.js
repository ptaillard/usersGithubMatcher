(function() {
    'use strict'

    angular.module('match')
        .service('MatchUsers', MatchUsers);

    function MatchUsers($q, LoadUser) {
        var vm = this;
        vm.firstuser = {};
        vm.seconduser = {};
        vm.match = {};

        vm.getData = getData;

        function getData(firstuser, seconduser) {
            var loadFirstUser = LoadUser.load(firstuser).then(function(data) {
                _.extend(vm.firstuser, data);
                return data;
            });
            var loadSecondUser = LoadUser.load(seconduser).then(function(data) {
                _.extend(vm.seconduser, data);
                return data;
            });

            $q.all([loadFirstUser,loadSecondUser]).then(function(res){
                //vm.match.result = ComputeMatchBetweenUsers.compute(vm.firstuser, vm.seconduser);
            });
        };
    };
})();
