using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using APIApplication.Models;

namespace APIApplication.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("DefaulConnection")
        {
            Database.SetInitializer<AppDbContext>(new DropCreateDatabaseAlways<AppDbContext>());
        }

        public DbSet<Email> Emails { get; set; }
    }
}