'use strict';

angular.
  module('movieGroupApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
            title: 'Grupos - Movie Group',
            templateUrl: 'groups/index.html'
        }).
        when('/seats', {
            title: 'Grupos - Movie Group',
            templateUrl: 'poll/seats.html'
        }).
        otherwise('/phones');
    }
  ]);
