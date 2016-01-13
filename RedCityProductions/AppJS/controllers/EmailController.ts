namespace RedCityApp.Controllers {
    


    class EmailSenderController {

        private emailResource 
        private email


        constructor(private $resource) {
            this.emailResource = this.$resource('/api/Email');


        }

        public sendEmail() {
            console.log(this.email);
            this.emailResource.save(this.email);
        }


    }

    redCityApp.controller('EmailController', EmailSenderController);





}