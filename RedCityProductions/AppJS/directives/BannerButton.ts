namespace RedCityApp.Directives {

    class PortfolioTile {
        private scope
        private modalElement: ng.IRootElementService
        private tileOverlay: ng.IRootElementService




        constructor(scope) {
            this.scope = scope;
            this.modalElement = this.scope.modalContainer;
            this.modalElement.html('<iframe class="portfolio-tile-modal" src="' + this.scope.videoLink + '"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
            this.hideModal();
        }

        public hideModal() {

            this.modalElement.css({
                opacity: '0'
            })
            setTimeout(() => {
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
            })
        }

    }





    function bannerButton() {
        return {
            templateUrl: '/AppJS/directives/views/bannerButton/bannerButton.html',
            scope: {
              
                videoLink: '@',
               
               
           
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



    redCityApp.directive('bannerButton', [bannerButton]);

}