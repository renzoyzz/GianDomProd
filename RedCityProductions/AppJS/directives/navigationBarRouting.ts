namespace RedCityApp.Directives {


    class NavigationBarRouting {
        private scope;
        private location: ng.ILocationService
        private currentPage
        private choiceButtons: ng.IRootElementService[] = [];

        private pages: string[] = [ '/', '/videos', '/about']

        private document = $(document);
        private window = $(window);



        constructor(scope, location: ng.ILocationService) {
            this.scope = scope;
            this.location = location;
            this.pushButtonsToArray();
            this.watchCurrentPage();
            if (this.currentPage == 0) {
                this.fixNavToTop();
                this.window.scroll(() => {
                    if (this.currentPage == 0) {
                        this.fixNavToTop();
                    } else {
                        $('.index-nav-container').css({
                            display: 'block'
                        });
                    }
                });
            } else {
                $('.index-nav-container').css({
                    display: 'block'
                });
            }

            

        }

        private fixNavToTop() {
            let windowScroll = this.window.scrollTop();
            let navBarScroll = $('.index-nav-container-jumbo').offset().top;
            console.log(windowScroll + ' ' + navBarScroll);
            if (windowScroll < navBarScroll) {
                $('.index-nav-container').css({
                    display: 'none'
                });
            } else {
                $('.index-nav-container').css({
                    display: 'block'
                });
            }
            
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
            this.window.scrollTop(0);
        }

        private updateAnimation() {

            for (let x = 0; x < this.choiceButtons.length; x++) {
                if (x == this.currentPage) {
                    this.choiceButtons[x].css({
                        color: 'rgba(255,255,255,1)'
                    });
                 
                } else {
                    this.choiceButtons[x].css({
                        color: 'rgba(255,255,255,.5)'
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