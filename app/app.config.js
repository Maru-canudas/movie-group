'use strict';

angular.
  module('movieGroupApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          title: 'Home - Movie Group',
          templateUrl: 'groups/index.html'
        }).
        when('/login', {
          title: 'Login - Movie Group',
          templateUrl: 'login/login.html'
        }).
        when('/onboarding/2', {
          title: 'Grupos - Movie Group',
          templateUrl: 'onboarding/stepTwo.html'
        }).
        when('/onboarding/3', {
          title: 'Grupos - Movie Group',
          templateUrl: 'onboarding/stepThree.html'
        }).
        when('/seats', {
          title: 'Grupos - Movie Group',
          templateUrl: 'poll/seats.html'
        }).
        otherwise('/');
    }
  ]);
