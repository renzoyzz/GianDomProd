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
        public IHttpActionResult Post (Email emailMessage)
        {
           



            var mailMessage = new SendGridMessage();
            mailMessage.AddTo("filmforest@outlook.com");
            try {
                mailMessage.From = new MailAddress(emailMessage.EmailAddress);
            } catch  {
                ModelState.AddModelError("Email", "Invalid Email Address");
            }
            mailMessage.Subject = "Forest Film Contact";
            mailMessage.Text = emailMessage.Message +"\n\nName: " + emailMessage.FirstName + " " + emailMessage.LastName + "\nEmail: " + emailMessage.EmailAddress + "\nPhone: " + emailMessage.Phone;
            var transportWeb = new Web("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");
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(this.ModelState);
                }
                transportWeb.DeliverAsync(mailMessage).Wait();
                return Ok();
            }
            catch {
                ModelState.AddModelError("Error", "There was an error sending your message, please try again soon");
                return BadRequest(this.ModelState);
            }
           

            
        }

      
    }
}
