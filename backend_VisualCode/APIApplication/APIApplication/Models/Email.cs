using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace APIApplication.Models
{
    public class Email
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string MailTo { get; set; }
        public DateTime DateTime { get; set; }
        public string Contents { get; set; }

        public Email()
        {
        }

        [JsonConstructor()]
        public Email(string title, string mailto, string content)
        {
            this.Id = Guid.NewGuid();
            this.Title = title;
            this.MailTo = mailto;
            this.DateTime = DateTime.Now;
            this.Contents = content;
        }
    }
}