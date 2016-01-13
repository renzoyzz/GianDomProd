var RedCityApp;
(function (RedCityApp) {
    var Directives;
    (function (Directives) {
        var PortfolioTile = (function () {
            function PortfolioTile(scope) {
                this.scope = scope;
                this.modalElement = this.scope.modalContainer;
                this.modalElement.html('<iframe class="portfolio-tile-modal" src="' + this.scope.videoLink + '"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
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
        function bannerButton() {
            return {
                templateUrl: '/AppJS/directives/views/bannerButton/bannerButton.html',
                scope: {
                    videoLink: '@',
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
        redCityApp.directive('bannerButton', [bannerButton]);
    })(Directives = RedCityApp.Directives || (RedCityApp.Directives = {}));
})(RedCityApp || (RedCityApp = {}));
//# sourceMappingURL=BannerButton.js.map