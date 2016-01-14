var RedCityApp;
(function (RedCityApp) {
    angular.module('RedCity', ['ngRoute', 'ngAnimate', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/AppJS/views/home.html'
        })
            .when('/videos', {
            templateUrl: '/AppJS/views/videos.html'
        })
            .when('/about', {
            templateUrl: '/AppJS/views/home.html',
            controller: RedCityApp.Controllers.AboutController
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(RedCityApp || (RedCityApp = {}));
var redCityApp = angular.module('RedCity');
//# sourceMappingURL=app.js.map