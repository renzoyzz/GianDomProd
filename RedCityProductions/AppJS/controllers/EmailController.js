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
                if (this.emailVerification != "8") {
                    this.failedRequest();
                    return;
                }
                else if (this.email.firstName == "" || this.email.firstName == null) {
                    this.failedRequest();
                    return;
                }
                else if (this.email.lastName == "" || this.email.lastName == null) {
                    this.failedRequest();
                    return;
                }
                else if (this.email.phone == "" || this.email.phone == null) {
                    this.failedRequest();
                    return;
                }
                else if (this.email.emailAddress == "" || this.email.emailAddress == null) {
                    this.failedRequest();
                    return;
                }
                else if (this.email.message == "" || this.email.message == null) {
                    this.failedRequest();
                    return;
                }
                else {
                    try {
                        this.emailResource.save(this.email);
                        this.email.firstName = "";
                        this.email.lastName = "";
                        this.email.phone = "";
                        this.email.emailAddress = "";
                        this.email.message = "";
                    }
                    catch (err) {
                        this.failedRequest();
                    }
                }
            };
            EmailSenderController.prototype.failedRequest = function () {
                alert('There was an error sending your message. Please fill all inputs or check if answer is correct');
            };
            return EmailSenderController;
        })();
        redCityApp.controller('EmailController', EmailSenderController);
    })(Controllers = RedCityApp.Controllers || (RedCityApp.Controllers = {}));
})(RedCityApp || (RedCityApp = {}));
//# sourceMappingURL=emailController.js.map