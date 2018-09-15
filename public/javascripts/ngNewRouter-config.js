(function () {
    'use strict';

    /**
     * App Controller
     */
    var mod = angular.module('App', ['ngNewRouter']);
    mod.controller('AppController', Controller);
//
    Controller.$inject = [
        '$router'
    ];

    function Controller($router) {
        $router.config([
            {path: '/', component: '../../templates/default'},
            {path: '/about', component: '../../partials/about'}
        ]);
    }

})();