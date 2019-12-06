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
        when('/2', {
            title: 'Home - Movie Group',
            templateUrl: 'poll/movies_2.html'
        }).
        when('/login', {
          title: 'Login - Movie Group',
          templateUrl: 'login/login.html'
        }).
        when('/onboarding/start', {
          title: 'Crear grupo - Movie Group',
          templateUrl: 'onboarding/start.html'
        }).
        when('/onboarding/1', {
          title: 'Crear grupo - Movie Group',
          templateUrl: 'onboarding/stepOne.html'
        }).
        when('/onboarding/2', {
          title: 'Crear grupo - Movie Group',
          templateUrl: 'onboarding/stepTwo.html'
        }).
        when('/onboarding/3', {
          title: 'Crear grupo - Movie Group',
          templateUrl: 'onboarding/stepThree.html'
        }).
        when('/onboarding/success', {
          title: 'Grupo creado - Movie Group',
          templateUrl: 'onboarding/success.html'
        }).
        when('/movies', {
          title: 'Elegir funciones - Movie Group',
          templateUrl: 'poll/movies.html'
        }).
        when('/movies/share', {
          title: 'Compartir votación - Movie Group',
          templateUrl: 'poll/share.html'
        }).
        when('/movies/contacts', {
          title: 'Elegir amigos - Movie Group',
          templateUrl: 'poll/contacts.html'
        }).
        when('/movies/send', {
          title: 'Enviar votación - Movie Group',
          templateUrl: 'poll/send.html'
        }).
        when('/group-select', {
            title: 'Elegir grupo - Movie Group',
            templateUrl: 'poll/groupSelection.html'
        }).
        when('/movies/results', {
          title: 'Resultados - Movie Group',
          templateUrl: 'poll/results.html'
        }).
        when('/tickets-selection', {
          title: 'Elegir entradas - Movie Group',
          templateUrl: 'checkout/ticketsSelection.html'
        }).
        when('/seats', {
          title: 'Elegir asientos - Movie Group',
          templateUrl: 'checkout/seats.html'
        }).
        when('/snacks', {
          title: 'Elegir Snacks - Movie Group',
          templateUrl: 'checkout/snacks.html'
        }).
        when('/resume', {
          title: 'Resumen de compra - Movie Group',
          templateUrl: 'checkout/resume.html'
        }).
        when('/payment', {
          title: 'Pago de entradas - Movie Group',
          templateUrl: 'checkout/payment.html'
        }).
        when('/ticket', {
          title: 'Entradas - Movie Group',
          templateUrl: 'checkout/ticket.html'
        }).
        when('/show-ticket', {
            title: 'Entradas - Movie Group',
            templateUrl: 'checkout/showTicket.html'
        }).
        when('/select-group', {
          title: 'Crear votación - Movie Group',
          templateUrl: 'poll/groupSelection.html'
        }).
        when('/account', {
          title: 'Cuenta - Movie Group',
          templateUrl: 'groups/account.html'
        }).
        otherwise('/');
    }
  ]);
