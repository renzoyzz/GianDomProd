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
            if (this.currentPage == 0 || this.currentPage == 2 ) {
                this.fixNavToTop();
                this.window.scroll(() => {
                    if (this.currentPage == 0 || this.currentPage == 2) {
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
            
            let navBarScroll = 0;
            if (this.currentPage == 1) {
                navBarScroll = 0;
            } else {
                navBarScroll = $('.index-nav-container-jumbo').offset().top;
            }
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
            if (this.currentPage != 2) {
                this.window.scrollTop(0);
            }

            

        }

        private updateAnimation() {
            let page = this.currentPage;
            if (page == 2) {
                page = 0;
            }
            for (let x = 0; x < this.choiceButtons.length; x++) {
                if (x == page) {
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

    class MobileMenu {
        private scope
        private mobileMenu
        private menuShowing = false;

        constructor(scope) {
            this.scope = scope;
            this.mobileMenu = document.getElementsByClassName('index-nav-mobile-choice-container');
            this.toggleMenu();
            $(document).ready(() => {
                window.onresize = () => {
                    if (window.innerWidth > 1000) {
                        this.menuShowing = true;
                        this.toggleMenu();
                    }
                }

                $(window).scroll(() => {
                    this.menuShowing = true;
                    this.toggleMenu();
                })
                this.hideMenu();
            })
           
        }

        public toggleMenu() {
            if (this.mobileMenu[0].style.maxHeight == '350px' || this.menuShowing) {
                this.hideMenu();
            }
            else {
                for (var x = 0; x < this.mobileMenu.length; x++) {
                    this.mobileMenu[x].style.maxHeight = '350px';
                    this.menuShowing = true;
                }
            }
           
        }

        public hideMenu() {
            for (var x = 0; x < this.mobileMenu.length; x++) {
                this.mobileMenu[x].style.maxHeight = '0px';
                this.menuShowing = false;
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
                let mobileMenu = new MobileMenu(scope);

                scope.updateCurrentPage = (path) => {
                    navigationBarRouting.updateCurrentPage(path);
                    mobileMenu.hideMenu();

                };

                scope.$on('$locationChangeSuccess', () => {
                    navigationBarRouting.watchCurrentPage();
                    
                });

                

                scope.scrollToBottom = () => {
                    $("html, body").animate({ scrollTop: $(document).height() - 600 }, 2000);
                    mobileMenu.hideMenu();

                }

               

                scope.toggleMobileMenu = () => {
                    mobileMenu.toggleMenu();
                };

            }
        }

    }










    redCityApp.directive('navigationBarRouting', ['$location', '$routeParams', navigationBarRouting]);


}