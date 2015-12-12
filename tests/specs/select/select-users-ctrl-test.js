'use strict';

describe('The SelectUsersCtrl controller', function () {

    beforeEach(function() {
        module('selection');

        module(function ($provide) {
            Mocker.mock($provide, '$location', ['path']);
        });
    });

    var controllerUT;
    beforeEach(inject(function ($controller, $location) {
        controllerUT = $controller('SelectUsersCtrl', {'$location': $location});
        controllerUT.firstuser = 'john';
        controllerUT.seconduser = 'doe';
    }));

    it('should call the match url when user click on "match" button', inject(function ($location) {

        controllerUT.launchMatch();

        expect($location.path.calls.argsFor(0)).toEqual(['/match/john/doe']);
    }));
});
