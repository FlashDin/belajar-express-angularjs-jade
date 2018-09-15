var mod = angular.module('App', ['ui.router']);

mod.config(Config);

Config.$inject = [
    '$urlRouterProvider',
    '$stateProvider'
];

function Config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/'); // default route

    $stateProvider.state('default', {
        url: '/',
        templateUrl: 'templates/default',
        controller: 'defaultCtrl',
        controllerAs: 'default'
    })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about',
            controller: 'aboutCtrl',
            controllerAs: 'about'
        })
}