'use strict';

// Define the `movieGroupApp` module
let movieGroupApp = angular.module('movieGroupApp', [
  'ngAnimate',
  'ngRoute',
  'ngMaterial',
  'ngMessages'
]);

movieGroupApp.controller('appController', ['$scope',
  function ($scope) {
      $scope.loginNext = function(){
          window.location.href = '#!/seats';
      };
  }
]);