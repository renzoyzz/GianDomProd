var RedCityApp;
(function (RedCityApp) {
    var Directives;
    (function (Directives) {
        var PortfolioTile = (function () {
            function PortfolioTile(scope) {
                var _this = this;
                this.scope = scope;
                this.modalElement = this.scope.modalContainer;
                this.tileOverlay = this.scope.tileOverlay;
                this.modalElement.html('<iframe class="portfolio-tile-modal" src="' + this.scope.videoLink + '"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                this.tileOverlay.hover(function () {
                    _this.tileOverlay.css({
                        backgroundColor: _this.scope.fadeInColor
                    });
                }, function () {
                    _this.tileOverlay.css({
                        backgroundColor: 'rgba(0,0,0,0)'
                    });
                });
                this.hideModal();
            }
            PortfolioTile.prototype.hideModal = function () {
                var _this = this;
                this.modalElement.css({
                    opacity: '0'
                });
                setTimeout(function () {
                    _this.modalElement.css({
                        display: 'none'
                    });
                    _this.modalElement.html('');
                }, 1000);
            };
            PortfolioTile.prototype.showModal = function () {
                this.modalElement.html('<iframe class="portfolio-tile-modal" src="' + this.scope.videoLink + '"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                this.modalElement.css({
                    display: 'block',
                    opacity: '1'
                });
            };
            return PortfolioTile;
        })();
        function tilePortfolio() {
            return {
                templateUrl: '/AppJS/directives/views/tilePortfolio/tiles.html',
                scope: {
                    backgroundImage: '@',
                    videoLink: '@',
                    logo: '@',
                    text: '@',
                    fadeInColor: '@'
                },
                link: function (scope, element, attr) {
                    var portfolioTile = new PortfolioTile(scope);
                    scope.showModal = function () {
                        portfolioTile.showModal();
                    };
                    scope.hideModal = function () {
                        portfolioTile.hideModal();
                    };
                }
            };
        }
        redCityApp.directive('portfolioTile', [tilePortfolio]);
    })(Directives = RedCityApp.Directives || (RedCityApp.Directives = {}));
})(RedCityApp || (RedCityApp = {}));
