using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using angularcore.Model;
using Microsoft.AspNetCore.Mvc;
using MailKit.Net.Smtp;
using MimeKit;
using MailKit.Security;

namespace angularcore.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {

        public IActionResult Post([FromBody]ContactForm contactForm)
        {
            if (contactForm == null)
            {
                return BadRequest();
            }

            if (contactForm.Email == null)
            {
                return BadRequest();
            }

            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress(contactForm.Name, contactForm.Email));
            emailMessage.To.Add(new MailboxAddress("Spanish in London", "niall.ferguson@gmail.com"));
            emailMessage.Subject = contactForm.Subject;
            emailMessage.Body = new TextPart("plain") { Text = contactForm.Message };         
           
            try
            {
                using (var client = new MailKit.Net.Smtp.SmtpClient())
                {

                    client.Connect("smtp.gmail.com", 25, SecureSocketOptions.StartTlsWhenAvailable);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.Authenticate("niall.ferguson@gmail.com", "kissme91");
                    client.Send(emailMessage);
                    client.Disconnect(true);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            return Ok(contactForm);
        }

    }
}
