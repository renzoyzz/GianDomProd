var RedCityApp;
(function (RedCityApp) {
    var Directives;
    (function (Directives) {
        function backgroundVideo() {
            return {
                templateUrl: '/AppJS/directives/views/videoBackground/video.html',
                scope: {},
                link: function (scope, element, attr) {
                    if (screen.width > 900) {
                        $('.home-top-banner-jumbo-video-background').html('<source src="/Content/Images/web_bg_test2.mp4" type="video/mp4">');
                    }
                }
            };
        }
        redCityApp.directive('videoBackground', [backgroundVideo]);
    })(Directives = RedCityApp.Directives || (RedCityApp.Directives = {}));
})(RedCityApp || (RedCityApp = {}));
