using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using APIApplication.Context;
using APIApplication.Models;

namespace APIApplication.Responsitory
{
    public class EmailResponsitory
    {
        protected AppDbContext Context { get; set; }

        public EmailResponsitory()
        {
            this.Context = new AppDbContext();
        }

        public IList<Email> GetEmails()
        {
            return Context.Emails.ToList();
        }

        public Email GetEmailById(Guid emailId)
        {
            return this.Context.Emails.FirstOrDefault(item => item.Id.Equals(emailId));
        }

        public void CreateEmail(Email email)
        {
            this.Context.Emails.Add(email);
            Context.SaveChanges();
        }

        public void UpdateEmail(Guid mailId, Email email)
        {
            var existemail = this.Context.Emails.FirstOrDefault(item => item.Id.Equals(mailId));

            if (existemail != null)
            {
                existemail.Contents = email.Contents;
                existemail.DateTime = DateTime.Now;
                existemail.Title = email.Title;
                existemail.MailTo = email.MailTo;
            }
            Context.SaveChanges();
        }

        public void DeleteEmail(Guid mailId)
        {
            var email = this.Context.Emails.FirstOrDefault(item => item.Id.Equals(mailId));
            if (email != null)
                this.Context.Emails.Remove(email);
            Context.SaveChanges();
        }
    }
}