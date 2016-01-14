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
                console.log(this.email);
                this.emailResource.save(this.email);
            };
            return EmailSenderController;
        })();
        redCityApp.controller('EmailController', EmailSenderController);
    })(Controllers = RedCityApp.Controllers || (RedCityApp.Controllers = {}));
})(RedCityApp || (RedCityApp = {}));
//# sourceMappingURL=emailController.js.map