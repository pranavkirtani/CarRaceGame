var raceApp = angular.module('raceApp', ['ui.router','ui.bootstrap']);

raceApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/play');

    $stateProvider.state('setup', {
            url: '/setup',
            templateUrl: 'views/game-setup.html',
            controller:'setupController'
        }).state('play', {
            url: '/play',
            templateUrl: 'views/play.html',
            controller:'playController'
               
        });

});