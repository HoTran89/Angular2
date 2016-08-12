using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using APIApplication.Models;
using APIApplication.Responsitory;

namespace APIApplication.Services
{
    public class EmailService
    {
        public IList<Email> GetEmails()
        {
            EmailResponsitory emailResponsitory = new EmailResponsitory();
            return emailResponsitory.GetEmails();
        }

        public Email GetById(Guid emailId)
        {
            EmailResponsitory emailResponsitory = new EmailResponsitory();
            return emailResponsitory.GetEmailById(emailId);

        }

        public void CreateEmail(Email email)
        {
            EmailResponsitory emailResponsitory = new EmailResponsitory();
            emailResponsitory.CreateEmail(email);
        }

        public void UpdateEmail(Guid mailId, Email email)
        {
            EmailResponsitory emailResponsitory = new EmailResponsitory();
            emailResponsitory.UpdateEmail(mailId, email);
        }

        public void DeleteEmail(Guid mailId)
        {
            EmailResponsitory emailResponsitory = new EmailResponsitory();
            emailResponsitory.DeleteEmail(mailId);
        }
    }
}