var RedCityApp;
(function (RedCityApp) {
    angular.module('RedCity', ['ngRoute', 'ngAnimate']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/AppJS/views/home.html'
        })
            .when('/videos', {
            templateUrl: '/AppJS/views/videos.html'
        })
            .when('/about', {
            templateUrl: '/AppJS/views/about.html'
        })
            .when('/contact', {
            templateUrl: '/AppJS/views/contact.html'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(RedCityApp || (RedCityApp = {}));
var redCityApp = angular.module('RedCity');
