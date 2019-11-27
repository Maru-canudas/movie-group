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
            window.location.href = '#!/seats';
        };
    }
]);