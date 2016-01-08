var RedCityApp;
(function (RedCityApp) {
    var Directives;
    (function (Directives) {
        var NavigationBarRouting = (function () {
            function NavigationBarRouting(scope, location) {
                this.choiceButtons = [];
                this.pages = ['/', '/videos', '/about', '/contact'];
                this.scope = scope;
                this.location = location;
                this.pushButtonsToArray();
                this.watchCurrentPage();
            }
            NavigationBarRouting.prototype.pushButtonsToArray = function () {
                this.choiceButtons.push(this.scope.zero);
                this.choiceButtons.push(this.scope.one);
                this.choiceButtons.push(this.scope.two);
                this.choiceButtons.push(this.scope.three);
            };
            NavigationBarRouting.prototype.updateCurrentPage = function (path) {
                this.location.path(path);
            };
            NavigationBarRouting.prototype.watchCurrentPage = function () {
                this.currentPage = this.pages.indexOf(this.location.path());
                this.updateAnimation();
            };
            NavigationBarRouting.prototype.updateAnimation = function () {
                for (var x = 0; x < this.choiceButtons.length; x++) {
                    if (x == this.currentPage) {
                        this.choiceButtons[x].css({
                            color: 'red'
                        });
                        this.choiceButtons[x].children('div').css({
                            width: '80px'
                        });
                    }
                    else {
                        this.choiceButtons[x].css({
                            color: 'white'
                        });
                        this.choiceButtons[x].children('div').css({
                            width: '0px'
                        });
                    }
                }
            };
            return NavigationBarRouting;
        })();
        function navigationBarRouting($location) {
            return {
                templateUrl: '/AppJS/directives/views/navigationBarRouting/navigation.html',
                scope: {},
                link: function (scope, element, attr) {
                    var navigationBarRouting = new NavigationBarRouting(scope, $location);
                    scope.updateCurrentPage = function (path) {
                        navigationBarRouting.updateCurrentPage(path);
                        ;
                    };
                    scope.$on('$locationChangeSuccess', function () {
                        navigationBarRouting.watchCurrentPage();
                    });
                }
            };
        }
        redCityApp.directive('navigationBarRouting', ['$location', '$routeParams', navigationBarRouting]);
    })(Directives = RedCityApp.Directives || (RedCityApp.Directives = {}));
})(RedCityApp || (RedCityApp = {}));
//# sourceMappingURL=navigationBarRouting.js.map