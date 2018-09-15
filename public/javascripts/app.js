var mod = angular.module('App', ['ngRoute']);
mod.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            templateUrl: 'templates/default',
            controller: 'defaultCtrl'
        })
        .when('/about', {
            templateUrl: 'partials/about',
            controller: 'aboutCtrl'
        });
}]);