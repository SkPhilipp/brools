angular.module('brools', ['ngRoute', 'ui.bootstrap']);

angular.module('brools').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('brools').controller('HomeController', function ($scope) {
});
