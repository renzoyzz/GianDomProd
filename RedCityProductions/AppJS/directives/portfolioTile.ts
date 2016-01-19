namespace RedCityApp.Directives {

    class PortfolioTile {
        private scope
        private modalElement: ng.IRootElementService
        private tileOverlay: ng.IRootElementService
        private closeButton: ng.IRootElementService




        constructor(scope) {
            this.scope = scope;
            this.modalElement = this.scope.modalContainer;
            this.tileOverlay = this.scope.tileOverlay;
            this.closeButton = this.scope.closerButton;
          

            this.tileOverlay.hover(() => {
                this.tileOverlay.css({
                    backgroundColor: this.scope.fadeInColor
                });
            }, () => {
                this.tileOverlay.css({
                    backgroundColor: 'rgba(0,0,0,0)'
                });
                });
            this.closeButton.click(() => {
                this.hideModal();
            });
            this.hideModal();
        }

        public hideModal() {

            this.modalElement.css({
                opacity: '0'
            })
            this.closeButton.css({
                opacity: '0'
            });
            setTimeout(() => {
                this.closeButton.css({
                    display: 'none',
                });
                this.modalElement.css({
                    display: 'none'
                })
                this.modalElement.html('');
            }, 1000)

        }



        public showModal() {
            this.modalElement.html('<iframe class="portfolio-tile-modal" src="' + this.scope.videoLink + '"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

            this.modalElement.css({
                display: 'block',
                opacity: '1'
            });
            this.closeButton.css({
                display: 'block',
                opacity: '1'
            });
        }

    }





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
            link: (scope, element, attr) => {
                let portfolioTile = new PortfolioTile(scope);

                scope.showModal = () => {
                    portfolioTile.showModal();
                };

                scope.hideModal = () => {
                    portfolioTile.hideModal();
                };

            }
        }
    }



    redCityApp.directive('portfolioTile', [tilePortfolio]);

}