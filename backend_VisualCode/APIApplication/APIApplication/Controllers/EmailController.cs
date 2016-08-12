using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using APIApplication.Models;
using APIApplication.Services;

namespace APIApplication.Controllers
{
    [RoutePrefix("api/Emails")]
    public class EmailController : ApiController
    {
        readonly EmailService emailService = new EmailService();

        [HttpGet]
        [Route("")]
        public HttpResponseMessage GetEmails()
        {
            return Request.CreateResponse(HttpStatusCode.OK, emailService.GetEmails());
        }

        [Route("{mailId}")]
        [HttpGet]
        public HttpResponseMessage GetEmail(Guid mailId)
        {
            return Request.CreateResponse(HttpStatusCode.OK, emailService.GetById(mailId));
        }

        [Route("")]
        [HttpPost]
        public HttpResponseMessage CreateEmail([FromBody] Email email)
        {
            emailService.CreateEmail(email);
            return Request.CreateResponse<Email>(HttpStatusCode.Created, email);
        }

        [Route("{emailId}")]
        [HttpPut]
        public HttpResponseMessage UpdateEmail([FromUri] Guid emailId, [FromBody]Email email)
        {
            emailService.UpdateEmail(emailId, email);
            return Request.CreateResponse(HttpStatusCode.OK, email);
        }

        [Route("{emailId}")]
        [HttpDelete]
        public HttpResponseMessage DeleteEmail(Guid emailId)
        {
            emailService.DeleteEmail(emailId);
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}

