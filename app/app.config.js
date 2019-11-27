'use strict';

angular.
  module('movieGroupApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          title: 'Home - Movie Group',
          templateUrl: 'groups/home.html'
        }).
        when('/login', {
          title: 'Login - Movie Group',
          templateUrl: 'login/login.html'
        }).
        when('/onboarding/start', {
          title: 'Grupos - Movie Group',
          templateUrl: 'onboarding/start.html'
        }).
        when('/onboarding/1', {
          title: 'Grupos - Movie Group',
          templateUrl: 'onboarding/stepOne.html'
        }).
        when('/onboarding/2', {
          title: 'Grupos - Movie Group',
          templateUrl: 'onboarding/stepTwo.html'
        }).
        when('/onboarding/3', {
          title: 'Grupos - Movie Group',
          templateUrl: 'onboarding/stepThree.html'
        }).
        when('/onboarding/success', {
          title: 'Grupos - Movie Group',
          templateUrl: 'onboarding/success.html'
        }).
        when('/movies', {
          title: 'Grupos - Movie Group',
          templateUrl: 'poll/movies.html'
        }).
        when('/movies/share', {
          title: 'Grupos - Movie Group',
          templateUrl: 'poll/share.html'
        }).
        when('/movies/contacts', {
          title: 'Grupos - Movie Group',
          templateUrl: 'poll/contacts.html'
        }).
        when('/movies/send', {
          title: 'Grupos - Movie Group',
          templateUrl: 'poll/send.html'
        }).
        when('/movies/results', {
          title: 'Grupos - Movie Group',
          templateUrl: 'poll/results.html'
        }).
        when('/seats', {
          title: 'Grupos - Movie Group',
          templateUrl: 'checkout/seats.html'
        }).
        otherwise('/');
    }
  ]);
