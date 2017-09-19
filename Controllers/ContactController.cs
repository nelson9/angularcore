using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using SpanishInLondon.Web.Model;

namespace SpanishInLondon.Web.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {

        public async Task<IActionResult> Post([FromBody]ContactForm contactForm)
        {
            if (contactForm == null)
            {
                return BadRequest();
            }

            if (contactForm.Email == null)
            {
                return BadRequest();
            }

            var emailMessage = new SendGridMessage();
            var recipients = new List<EmailAddress>
            {
                new EmailAddress("david@spanish-in-london.co.uk", "Contact Form")
            };
            emailMessage.AddTos(recipients);
            emailMessage.Subject = contactForm.Subject;

            emailMessage.SetFrom(new EmailAddress(contactForm.Email, contactForm.Name));
            
            emailMessage.AddContent(MimeType.Text, contactForm.Message);  
     
            var client = new SendGridClient("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");

            var response = await client.SendEmailAsync(emailMessage);

            if (response.StatusCode == HttpStatusCode.Accepted)
            {
                return Ok(contactForm);
            }
            return StatusCode(500);
        }

    }
}
