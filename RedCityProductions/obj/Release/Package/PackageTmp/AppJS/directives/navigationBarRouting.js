var RedCityApp;
(function (RedCityApp) {
    var Directives;
    (function (Directives) {
        var NavigationBarRouting = (function () {
            function NavigationBarRouting(scope, location) {
                var _this = this;
                this.choiceButtons = [];
                this.pages = ['/', '/videos', '/about'];
                this.document = $(document);
                this.window = $(window);
                this.scope = scope;
                this.location = location;
                this.pushButtonsToArray();
                this.watchCurrentPage();
                if (this.currentPage == 0) {
                    this.fixNavToTop();
                    this.window.scroll(function () {
                        if (_this.currentPage == 0) {
                            _this.fixNavToTop();
                        }
                        else {
                            $('.index-nav-container').css({
                                display: 'block'
                            });
                        }
                    });
                }
                else {
                    $('.index-nav-container').css({
                        display: 'block'
                    });
                }
            }
            NavigationBarRouting.prototype.fixNavToTop = function () {
                var windowScroll = this.window.scrollTop();
                var navBarScroll = $('.index-nav-container-jumbo').offset().top;
                if (windowScroll < navBarScroll) {
                    $('.index-nav-container').css({
                        display: 'none'
                    });
                }
                else {
                    $('.index-nav-container').css({
                        display: 'block'
                    });
                }
            };
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
                this.window.scrollTop(0);
            };
            NavigationBarRouting.prototype.updateAnimation = function () {
                for (var x = 0; x < this.choiceButtons.length; x++) {
                    if (x == this.currentPage) {
                        this.choiceButtons[x].css({
                            color: 'rgba(255,255,255,1)'
                        });
                    }
                    else {
                        this.choiceButtons[x].css({
                            color: 'rgba(255,255,255,.5)'
                        });
                    }
                }
            };
            return NavigationBarRouting;
        })();
        var MobileMenu = (function () {
            function MobileMenu(scope) {
                var _this = this;
                this.menuShowing = false;
                this.scope = scope;
                this.mobileMenu = document.getElementsByClassName('index-nav-mobile-choice-container');
                this.toggleMenu();
                window.onresize = function () {
                    if (window.innerWidth > 1000) {
                        _this.menuShowing = true;
                        _this.toggleMenu();
                    }
                };
            }
            MobileMenu.prototype.toggleMenu = function () {
                if (this.mobileMenu[0].style.maxHeight == '261px' || this.mobileMenu[1].style.maxHeight == '261px' || this.menuShowing) {
                    for (var x = 0; x < this.mobileMenu.length; x++) {
                        this.mobileMenu[x].style.maxHeight = '0px';
                        this.menuShowing = false;
                    }
                }
                else {
                    for (var x = 0; x < this.mobileMenu.length; x++) {
                        this.mobileMenu[x].style.maxHeight = '261px';
                        this.menuShowing = true;
                    }
                }
            };
            return MobileMenu;
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
                    scope.scrollToBottom = function () {
                        $("html, body").animate({ scrollTop: $(document).height() - 400 }, 2000);
                    };
                    var mobileMenu = new MobileMenu(scope);
                    scope.toggleMobileMenu = function () {
                        mobileMenu.toggleMenu();
                    };
                }
            };
        }
        redCityApp.directive('navigationBarRouting', ['$location', '$routeParams', navigationBarRouting]);
    })(Directives = RedCityApp.Directives || (RedCityApp.Directives = {}));
})(RedCityApp || (RedCityApp = {}));
//# sourceMappingURL=navigationBarRouting.js.map