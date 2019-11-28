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

        $scope.cities = [
            'CABA', 'Almirante Brown', 'Avellaneda', 'Berisso', 'Berazategui', 'Cañuelas', 'Ensenada', 'Escobar',
            'Esteban Echeverría', 'Ezeiza', 'Florencio Varela', 'General Rodríguez', 'General San Martín', 'Hurlingham',
            'Ituzaingó', 'José C. Paz', 'La Matanza', 'La Plata', 'Lanús', 'Lomas de Zamora', 'Malvinas Argentinas',
            'Marcos Paz', 'Merlo', 'Moreno', 'Morón', 'Pilar', 'Presidente Perón', 'Quilmes', 'San Fernando',
            'San Isidro', 'San Miguel', 'San Vicente', 'Tigre', 'Tres de Febrero', 'Vicente López'
        ];
    }]);

app.controller('searchTown',['$scope', '$element',
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