
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow))]
    public class EmployeesForm
    {
        public String LastName { get; set; }
        public String FirstName { get; set; }
        public DateTime BirthDate { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        public String Country { get; set; }
        public String Phone { get; set; }
        public Stream Photo { get; set; }
        public String Notes { get; set; }
    }
}