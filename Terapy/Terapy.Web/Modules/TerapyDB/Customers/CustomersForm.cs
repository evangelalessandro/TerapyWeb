
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow))]
    public class CustomersForm
    {
        public String CustomerName { get; set; }
        public String CustomerSurname { get; set; }
        public List<Int32> UnableTerapy { get; set; }
        public List<Int32> Turns { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        public String Country { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
    }
}