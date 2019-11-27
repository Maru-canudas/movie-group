'use strict';

// Define the `movieGroupApp` module
angular.module('movieGroupApp', [
  'ngAnimate',
  'ngRoute',
  'ngMaterial',
  'ngMessages'
]).controller('appController', ['$scope',
    function ($scope) {
        $scope.loginNext = function(){
            window.location.href = '#!/seats';
        };
    }
]);