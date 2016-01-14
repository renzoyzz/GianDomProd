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
                    return;
                }
                else if (this.email.firstName == "" || this.email.firstName == null) {
                    return;
                }
                else if (this.email.lastName == "" || this.email.lastName == null) {
                    return;
                }
                else if (this.email.phone == "" || this.email.phone == null) {
                    return;
                }
                else if (this.email.emailAddress == "" || this.email.emailAddress == null) {
                    return;
                }
                else if (this.email.message == "" || this.email.message == null) {
                    return;
                }
                else {
                    try {
                        this.emailResource.save(this.email);
                        console.log(this.email);
                    }
                    catch (err) {
                        alert('There was an error sending your message. Try again Later');
                    }
                }
            };
            return EmailSenderController;
        })();
        redCityApp.controller('EmailController', EmailSenderController);
    })(Controllers = RedCityApp.Controllers || (RedCityApp.Controllers = {}));
})(RedCityApp || (RedCityApp = {}));
