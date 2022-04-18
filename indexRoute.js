var app = angular.module('demo', ['ngRoute','demo.about']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {templateUrl:'home/home.html', controller: 'demoController'})
    .when('/about', {templateUrl: 'about/about.html', controller: 'aboutController'})
    $locationProvider.html5Mode(true)
})
