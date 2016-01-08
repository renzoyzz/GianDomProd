namespace RedCityApp {
    angular.module('RedCity', ['ngRoute', 'ngAnimate']).config((
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        $routeProvider
            .when('/',
            {
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
}

let redCityApp = angular.module('RedCity');
