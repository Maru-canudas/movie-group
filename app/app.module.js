'use strict';

// Define the `movieGroupApp` module
let app;
try {
    app = angular.module('movieGroupApp', [
        'ngAnimate',
        'ngRoute',
        'ngMaterial',
        'ngMessages'
    ]);
} catch (e) {
    app = angular.module('movieGroupApp', [ 'config']);
}

app.config(['$provide', function($provide) {
    // catch exceptions in angular
    $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
        return function (error, cause) {
            var result = $delegate(error, cause);
            return result;
        };
    }]);
}]);

    app.controller('appController', ['$scope',
    function ($scope) {
        $scope.loginNext = function(){
            window.location.href = '#!/';
        };
        $scope.startNext = function(){
            window.location.href = '#!/onboarding/1';
        };
        $scope.step1Next = function(){
            window.location.href = '#!/onboarding/2';
        };
        $scope.step2Next = function(){
            window.location.href = '#!/onboarding/3';
        };
    }
]);