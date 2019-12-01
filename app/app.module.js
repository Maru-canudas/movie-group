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
            window.location.href = '#!/share';
        };
        $scope.stepShareNext = function () {
            window.location.href = '#!/contacts';
        };
        $scope.stepContactsNext = function () {
            window.location.href = '#!/send';
        };
        $scope.stepSendNext = function () {
            window.location.href = '#!/results';
        };
        $scope.stepSeatsNext = function () {
            window.location.href = '#!/snacks';
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




        /*$scope.updateTextArea = function() {

            var numseats = 4;
            if ($("input:checked").length == ($(numseats).val()))
            {
                $(".seatStructure *").prop("disabled", true);

                var allNameVals = [];
                var allNumberVals = [];
                var allSeatsVals = [];

                //Storing in Array
                allNameVals.push($("#Username").val());
                allNumberVals.push($("#Numseats").val());
                $('#seatsBlock :checked').each(function() {
                    allSeatsVals.push($(this).val());
                });

                //Displaying
                $('#nameDisplay').val(allNameVals);
                $('#NumberDisplay').val(allNumberVals);
                $('#seatsDisplay').val(allSeatsVals);
            }
            else
            {
                alert("Please select " + ($("#Numseats").val()) + " seats")
            }
        };


        $scope.myFunction = function() {
            alert($("input:checked").length);
        };

        */
    }]);

app.controller('ListBottomSheetCtrl', function ($scope, $mdBottomSheet) {

    $scope.hideBottomSheet = function () {
        $mdBottomSheet.hide();
    };
})