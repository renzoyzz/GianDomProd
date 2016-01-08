namespace RedCityApp.Directives {


    class NavigationBarRouting {
        private scope;
        private location: ng.ILocationService
        private currentPage
        private choiceButtons: ng.IRootElementService[] = [];

        private pages: string[] = [ '/', '/videos', '/about']





        constructor(scope, location: ng.ILocationService) {
            this.scope = scope;
            this.location = location;
            this.pushButtonsToArray();
            this.watchCurrentPage();


        }

        private pushButtonsToArray() {
            this.choiceButtons.push(this.scope.zero);
            this.choiceButtons.push(this.scope.one);
            this.choiceButtons.push(this.scope.two);
            this.choiceButtons.push(this.scope.three);
        }

        public updateCurrentPage(path) {
            this.location.path(path);
        }

        public watchCurrentPage() {
            this.currentPage = this.pages.indexOf(this.location.path());
            this.updateAnimation();
            $(window).scrollTop(0);
        }

        private updateAnimation() {

            for (let x = 0; x < this.choiceButtons.length; x++) {
                if (x == this.currentPage) {
                    this.choiceButtons[x].css({
                        color: 'red'
                    });
                    this.choiceButtons[x].children('div').css({
                        width: '80px'
                    });
                } else {
                    this.choiceButtons[x].css({
                        color: 'white'
                    });
                    this.choiceButtons[x].children('div').css({
                        width: '0px'
                    });
                }
            }
        }



    }


    function navigationBarRouting($location) {
        return {
            templateUrl: '/AppJS/directives/views/navigationBarRouting/navigation.html',
            scope: {
                
            },
            link: (scope, element, attr) => {
                
                let navigationBarRouting = new NavigationBarRouting(scope, $location);

                scope.updateCurrentPage = (path) => {
                    navigationBarRouting.updateCurrentPage(path);
                    ;}
                scope.$on('$locationChangeSuccess', () => {
                    navigationBarRouting.watchCurrentPage();
                });

                scope.scrollToBottom = () => {
                    $("html, body").animate({ scrollTop: $(document).height() - 400 }, 2000);
                }

            }
        }

    }










    redCityApp.directive('navigationBarRouting', ['$location', '$routeParams', navigationBarRouting]);


}