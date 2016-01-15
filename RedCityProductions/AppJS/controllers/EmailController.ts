namespace RedCityApp.Controllers {
    


    class EmailSenderController {

        private emailResource 
        private email
        private emailVerification


        constructor(private $resource) {
            this.emailResource = this.$resource('/api/Email');
        }

        public sendEmail() {
            if (this.emailVerification != "8") {
                this.failedRequest('Invalid Answer');
                return;
            } else if (this.email.firstName == "" || this.email.firstName == null) {
                this.failedRequest("Invalid First Name");

                return;
            } else if (this.email.lastName == "" || this.email.lastName == null) {
                this.failedRequest("Invalid Last Name");

                return;
            } else if (this.email.phone == "" || this.email.phone == null) {
                this.failedRequest("Invalid First Name Phone Number");

                return;
            } else if (this.email.emailAddress == "" || this.email.emailAddress == null) {
                this.failedRequest('Invalid Email Address');

                return;
            } else if (this.email.message == "" || this.email.message == null) {
                this.failedRequest('Invalid Message');

                return;
            } else {
                    this.emailResource.save(this.email).$promise.then(() => {
                        this.email.firstName = "";
                        this.email.lastName = "";
                        this.email.phone = "";
                        this.email.emailAddress = "";
                        this.email.message = "";
                    }).catch((err) => {
                        console.log(err);
                        let validationErrors = [];
                        for (let prop in err.data.modelState) {
                            let propErrors = err.data.modelState[prop];
                            validationErrors = validationErrors.concat(propErrors);
                        }
                        this.failedRequest(validationErrors)
                    });
                    


            }

        }

        private failedRequest(err) {
            console.log(err);
            alert(err);
            
        }


    }

    redCityApp.controller('EmailController', EmailSenderController);





}