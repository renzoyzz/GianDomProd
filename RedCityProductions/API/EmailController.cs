using RedCityProductions.Models;
using SendGrid;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace RedCityProductions.API
{
    public class EmailController : ApiController
    {
        

        // POST: api/Email
        public void Post(Email emailMessage )
        {
            var mailMessage = new SendGridMessage();
            mailMessage.AddTo("filmforest@outlook.com");
            mailMessage.From = new MailAddress("renzoyzevallos@gmail.com");
            mailMessage.Subject = emailMessage.FirstName + " " + emailMessage.LastName;
            mailMessage.Text = emailMessage.Message + "\n\nEmail: " + emailMessage.EmailAddress + "\nPhone: " + emailMessage.Phone;
            var transportWeb = new Web("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");
            transportWeb.DeliverAsync(mailMessage).Wait();
        }

      
    }
}
