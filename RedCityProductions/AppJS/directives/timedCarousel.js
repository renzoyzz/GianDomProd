redCityApp.directive('timedCarousel', [
    function () {
        return {
            multiElement: true,
            scope: {
                direction: '@'
            },
            link: function (scope, element, attrs) {
                var direction;
                //allows you to put as many slides as you want
                var numberOfSlides = (element.length - 3) / 2;
                var currentSlide = 100000;
                var eventCallBack = true;
                switchSlides(currentSlide, 0);
                if (scope.direction === '0') {
                    direction = 'X';
                    switchSlides(currentSlide, 0);
                    setTimeout(function () {
                        setInterval(function () {
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
                }
                else if (scope.direction === '1') {
                    direction = 'Y';
                    switchSlides(currentSlide, 0);
                    setTimeout(function () {
                        setInterval(function () {
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
                }
                else if (scope.direction === '2') {
                    direction = 'X';
                    switchSlides(currentSlide, 0);
                    setTimeout(function () {
                        setInterval(function () {
                            if (eventCallBack) {
                                eventCallBack = false;
                                currentSlide = currentSlide + 1 % numberOfSlides;
                                switchSlides(currentSlide, false);
                                buttonCallBack();
                            }
                        }, 10000);
                    }, 2000);
                }
                var rightMouseButton = element.eq(2).on('mousedown', function (event) {
                    if (eventCallBack) {
                        eventCallBack = false;
                        currentSlide = currentSlide - 1 % numberOfSlides;
                        if (currentSlide == -1) {
                            currentSlide = 300;
                        }
                        switchSlides(currentSlide, true);
                        buttonCallBack();
                    }
                });
                var leftMouseButton = element.eq(0).on('mousedown', function (event) {
                    if (eventCallBack) {
                        eventCallBack = false;
                        currentSlide = currentSlide + 1 % numberOfSlides;
                        switchSlides(currentSlide, false);
                        buttonCallBack();
                    }
                });
                function buttonCallBack() {
                    setTimeout(function () {
                        eventCallBack = true;
                    }, 750);
                }
                function switchSlides(value, hiddenSlide) {
                    var index = 0;
                    var amount = value;
                    //goes through each node in the element
                    angular.forEach(element, function (el) {
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
                                        'transform': "translate" + direction + "(" + ((amount * 100) - 150) + "%)"
                                    });
                                }
                                else {
                                    //normal slide and makes children nodes in front
                                    angular.element(el).css({
                                        'opacity': '1',
                                        'z-index': '1',
                                        'transform': "translate" + direction + "(" + ((amount * 100) - 150) + "%)"
                                    });
                                    angular.element(el).children().css({
                                        'z-index': '3'
                                    });
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
