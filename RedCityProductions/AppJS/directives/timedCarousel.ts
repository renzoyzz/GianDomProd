redCityApp.directive('timedCarousel', [
    () => {
        return {

            multiElement: true,
            scope: {
                direction: '@'
            },
            link: (scope, element: ng.IRootElementService, attrs: ng.IAttributes) => {
                let direction;
                //allows you to put as many slides as you want
                const numberOfSlides = (element.length - 3) / 2;
                let currentSlide = 100000;
                let eventCallBack = true;
                switchSlides(currentSlide, 0);
                if (scope.direction === '0') {
                    direction = 'X';
                    switchSlides(currentSlide, 0);
                    setTimeout(() => {
                        setInterval(() => {
                            if (eventCallBack) {
                                eventCallBack = false;
                                currentSlide = currentSlide - 1 % numberOfSlides;
                                if (currentSlide == -1) {
                                    currentSlide = 300;
                                }
                                switchSlides(currentSlide, true);
                                buttonCallBack();
                            }
                        }, 10000);
                    }, 1000);
                } else if (scope.direction === '1') {
                    direction = 'Y';
                    switchSlides(currentSlide, 0);
                    setTimeout(() => {
                        setInterval(() => {
                            if (eventCallBack) {
                                eventCallBack = false;
                                currentSlide = currentSlide - 1 % numberOfSlides;
                                if (currentSlide == -1) {
                                    currentSlide = 300;
                                }
                                switchSlides(currentSlide, true);
                                buttonCallBack();
                            }
                        }, 10000);
                    }, 1500);
                } else if (scope.direction === '2') {
                    direction = 'X';
                    switchSlides(currentSlide, 0);
                    setTimeout(() => {
                        setInterval(() => {
                            if (eventCallBack) {
                                eventCallBack = false;
                                currentSlide = currentSlide + 1 % numberOfSlides;
                                switchSlides(currentSlide, false);
                                buttonCallBack();
                            }
                        }, 10000);
                    }, 2000);

                }

                let rightMouseButton = element.eq(2).on('mousedown', (event) => {
                    if (eventCallBack) {
                        eventCallBack = false
                        currentSlide = currentSlide - 1 % numberOfSlides;
                        if (currentSlide == -1) {
                            currentSlide = 300;
                        }
                        switchSlides(currentSlide, true);
                        buttonCallBack();
                    }


                });

                let leftMouseButton = element.eq(0).on('mousedown', (event) => {
                    if (eventCallBack) {
                        eventCallBack = false;
                        currentSlide = currentSlide + 1 % numberOfSlides;
                        switchSlides(currentSlide, false);
                        buttonCallBack();
                    }
                });





                function buttonCallBack() {
                    setTimeout(() => {
                        eventCallBack = true;
                    }, 750);
                }

                function switchSlides(value, hiddenSlide) {
                    let index = 0;
                    let amount = value;
                    //goes through each node in the element
                    angular.forEach(element, (el: Node) => {
                        //index 0 and 1 are the carousel buttons
                        if (index > 2) {
                            amount = amount % numberOfSlides;
                            if (el.nodeType === Node.ELEMENT_NODE) {
                                //declares what slide is hidden depending on direction
                                hiddenSlide = hiddenSlide ? numberOfSlides - 1 : 0;
                                if (amount == hiddenSlide) {
                                    angular.element(el).css({
                                        'opacity': '0',
                                        'z-index': '0',
                                        'transform': `translate${direction}(${(amount * 100) - 150}%)`
                                    });
                                } else {
                                    //normal slide and makes children nodes in front
                                    angular.element(el).css({
                                        'opacity' : '1',
                                        'z-index': '1',
                                        'transform': `translate${direction}(${(amount * 100) - 150}%)`
                                    });
                                    angular.element(el).children().css({
                                        'z-index': '3'
                                    })
                                }

                                amount++;
                            }
                        }
                        //iterates through every loop
                        index = index + 1;
                    });

                }
            }
        };
    }]);