var RedCityApp;
(function (RedCityApp) {
    var Controllers;
    (function (Controllers) {
        var EmailSenderController = (function () {
            function EmailSenderController($resource) {
                this.$resource = $resource;
                this.emailResource = this.$resource('/api/Email');
            }
            EmailSenderController.prototype.sendEmail = function () {
                var _this = this;
                if (this.emailVerification != "8") {
                    this.failedRequest('Invalid Answer');
                    return;
                }
                else if (this.email.firstName == "" || this.email.firstName == null) {
                    this.failedRequest("Invalid First Name");
                    return;
                }
                else if (this.email.lastName == "" || this.email.lastName == null) {
                    this.failedRequest("Invalid Last Name");
                    return;
                }
                else if (this.email.phone == "" || this.email.phone == null) {
                    this.failedRequest("Invalid First Name Phone Number");
                    return;
                }
                else if (this.email.emailAddress == "" || this.email.emailAddress == null) {
                    this.failedRequest('Invalid Email Address');
                    return;
                }
                else if (this.email.message == "" || this.email.message == null) {
                    this.failedRequest('Invalid Message');
                    return;
                }
                else {
                    this.emailResource.save(this.email).$promise.then(function () {
                        _this.email.firstName = "";
                        _this.email.lastName = "";
                        _this.email.phone = "";
                        _this.email.emailAddress = "";
                        _this.email.message = "";
                    }).catch(function (err) {
                        console.log(err);
                        var validationErrors = [];
                        for (var prop in err.data.modelState) {
                            var propErrors = err.data.modelState[prop];
                            validationErrors = validationErrors.concat(propErrors);
                        }
                        _this.failedRequest(validationErrors);
                    });
                }
            };
            EmailSenderController.prototype.failedRequest = function (err) {
                console.log(err);
                alert(err);
            };
            return EmailSenderController;
        })();
        redCityApp.controller('EmailController', EmailSenderController);
    })(Controllers = RedCityApp.Controllers || (RedCityApp.Controllers = {}));
})(RedCityApp || (RedCityApp = {}));
//# sourceMappingURL=emailController.js.map