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
    app = angular.module('movieGroupApp', ['config']);
}

app.config(['$provide', function ($provide) {
    // catch exceptions in angular
    $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
        return function (error, cause) {
            var result = $delegate(error, cause);
            return result;
        };
    }]);
}]);

app.run(['$locale', '$location', '$rootScope',
    function($locale, $location, $rootScope) {
        // title change
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
            // test for current route
            if (current.$$route) {
                $rootScope.title = current.$$route.title;
            }
        });

    }]);

app.controller('appController', ['$scope', '$element',
    function ($scope, $element) {
        $scope.loginNext = function () {
            window.location.href = '#!/';
        };
        $scope.startNext = function () {
            window.location.href = '#!/onboarding/1';
        };
        $scope.step1Next = function () {
            window.location.href = '#!/onboarding/2';
        };
        $scope.step2Next = function () {
            window.location.href = '#!/onboarding/3';
        };
        $scope.step3Next = function () {
            window.location.href = '#!/onboarding/success';
        };
        $scope.stepStartPollNext = function () {
            window.location.href = '#!/movies';
        };
        $scope.stepMoviesNext = function () {
            window.location.href = '#!/movies/share';
        };
        $scope.stepShareNext = function () {
            window.location.href = '#!/movies/contacts';
        };
        $scope.stepContactsNext = function () {
            window.location.href = '#!/movies/send';
        };
        $scope.stepSendNext = function () {
            window.location.href = '#!/movies/results';
        };
        $scope.stepSeatsNext = function () {
            window.location.href = '#!/snacks';
        };
        $scope.homeResultNext = function (){
            window.location.href = '#!/movies/results';
        };
        $scope.homeTicketNext = function (){
            window.location.href = '#!/ticket';
        };
        $scope.newPollNext = function (){
            window.location.href = '#!/onboarding/1';
        };
        $scope.stepResultNext = function () {
            window.location.href = '#!/tickets-selection';
        };
        $scope.stepSelectionNext = function () {
            window.location.href = '#!/seats';
        };
        $scope.stepSnacksNext = function () {
            window.location.href = '#!/resume';
        };
        $scope.stepResumeNext = function () {
            window.location.href = '#!/payment';
        };
        $scope.stepPaymentNext = function () {
            window.location.href = '#!/ticket';
        };
        $scope.stepTicketNext = function () {
            window.location.href = '#!/';
        };
        $scope.goback = function () {
            window.history.back();
        };

        $scope.cities = [
            'CABA', 'Almirante Brown', 'Avellaneda', 'Berisso', 'Berazategui', 'Cañuelas', 'Ensenada', 'Escobar',
            'Esteban Echeverría', 'Ezeiza', 'Florencio Varela', 'General Rodríguez', 'General San Martín', 'Hurlingham',
            'Ituzaingó', 'José C. Paz', 'La Matanza', 'La Plata', 'Lanús', 'Lomas de Zamora', 'Malvinas Argentinas',
            'Marcos Paz', 'Merlo', 'Moreno', 'Morón', 'Pilar', 'Presidente Perón', 'Quilmes', 'San Fernando',
            'San Isidro', 'San Miguel', 'San Vicente', 'Tigre', 'Tres de Febrero', 'Vicente López'
        ];

        $scope.groupName = 'Amigos';

        $scope.day = {
            nov: 'today',
        };

        $scope.movie = {
            num: 'Malefica',
        };

        $scope.movieSelected = 0;

        $scope.movieCount = function () {
            $scope.movieSelected = $(".available:checked").length;
        };

    }]);
app.controller('ticketController', ['$scope',
    function ($scope) {
        $scope.count = 0;
        $scope.plusCount = function(){
            $scope.count = parseInt($scope.count) + 1;
        };

        $scope.count1 = 0;
        $scope.plusCount1 = function(){
            $scope.count1 = parseInt($scope.count1) + 1;
        };

        $scope.count2 = 0;
        $scope.plusCount2 = function(){
            $scope.count2 = parseInt($scope.count2) + 1;
        };

        $scope.count3 = 0;
        $scope.plusCount3 = function(){
            $scope.count3 = parseInt($scope.count3) + 1;
        };

        $scope.count4 = 0;
        $scope.plusCount4 = function(){
            $scope.count4 = parseInt($scope.count4) + 1;
        };

        $scope.count5 = 0;
        $scope.plusCount5 = function(){
            $scope.count5 = parseInt($scope.count5) + 1;
        };
    }]);

app.controller('snacksController', ['$scope',
    function ($scope) {
        $scope.count = 0;
        $scope.plusCount = function(){
            $scope.count = parseInt($scope.count) + 1;
        };

        $scope.count1 = 0;
        $scope.plusCount1 = function(){
            $scope.count1 = parseInt($scope.count1) + 1;
        };

        $scope.count2 = 0;
        $scope.plusCount2 = function(){
            $scope.count2 = parseInt($scope.count2) + 1;
        };
    }]);

app.controller('searchTown', ['$scope', '$element',
    function ($scope, $element) {
        $scope.towns = [
            'Agronomía', 'Almagro', 'Balvanera', 'Barracas', 'Belgrano', 'Boedo', 'Caballito', 'Chacarita', 'Coghlan',
            'Colegiales', 'Constitución', 'Flores', 'Floresta', 'La Boca', 'La Paternal', 'Liniers', 'Mataderos',
            'Monte Castro', 'Monserrat', 'Nueva Pompeya', 'Núñez', 'Palermo', 'Parque Avellaneda', 'Parque Chacabuco',
            'Parque Chas', 'Parque Patricios', 'Puerto Madero', 'Recoleta', 'Retiro', 'Saavedra', 'San Cristóbal',
            'San Nicolás', 'San Telmo', 'Vélez Sársfield', 'Versalles', 'Villa Crespo', 'Villa del Parque', 'Villa Devoto',
            'Villa General Mitre', 'Villa Luro', 'Villa Ortúzar', 'Villa Pueyrredón', ' Villa Real', ' Villa Riachuelo',
            'Villa Santa Rita', 'Villa Soldati', 'Villa Urquiza'
        ];

        $scope.searchTerm;
        $scope.clearSearchTerm = function () {
            $scope.searchTerm = '';
        };
        // The md-select directive eats keydown events for some quick select
        // logic. Since we have a search input here, we don't need that logic.
        $element.find('.demo-header-searchbox').on('keydown', function (ev) {
            ev.stopPropagation();
        });
    }]);

app.controller('seatsController', ['$scope', '$element', '$mdBottomSheet',
    function ($scope, $element, $mdBottomSheet) {

        $scope.onLoadSeatsFunc = function () {
            $(document).ready(function () {
                var outerContent = $('.seatContainer');
                var innerContent = $('.seatStructure');

                outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);
            });
        };

        $scope.selected = 0;

        $(".available").click(function () {
            var seatsNumber = 4;
            $scope.selected = $("input:checked").length;
            if ($("input:checked").length === seatsNumber) {
                $(".available").prop('disabled', true);
                $('.available:checked').prop('disabled', false);
            }
            else {
                $(".available").prop('disabled', false);
            }
        });
    }]);