
namespace Terapy.TerapyDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("TerapyDB.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow))]
    public class CustomersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CustomerId { get; set; }
        [EditLink, DisplayName("Name"), QuickFilter]
        public String CustomerName { get; set; }
        [DisplayName("Surname"), QuickFilter]
        public String CustomerSurname { get; set; }
        [DisplayName("Unable Terapy"),Width(150), TerapyListFormatter]
        public List<Int32> UnableTerapyList;
        [DisplayName("Turn"), Width(150), TurnTerapyListFormatter]
        public List<Int32> TurnTerapyList;
        [QuickFilter]
        public String Address { get; set; }
        [QuickFilter]
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        [QuickFilter]
        public String Country { get; set; }
        public String Phone { get; set; }
        [QuickFilter]
        public String Email { get; set; }
    }
}