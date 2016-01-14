var RedCityApp;
(function (RedCityApp) {
    var Controllers;
    (function (Controllers) {
        var AboutController = (function () {
            function AboutController() {
                $("html, body").scrollTop($('.about-section').offset().top);
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
    })(Controllers = RedCityApp.Controllers || (RedCityApp.Controllers = {}));
})(RedCityApp || (RedCityApp = {}));
