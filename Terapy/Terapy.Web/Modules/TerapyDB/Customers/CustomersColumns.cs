
namespace Terapy.TerapyDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Reporting;

    [ColumnsScript("TerapyDB.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow))]
    public class CustomersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CustomerId { get; set; }
        [EditLink, DisplayName("Name")]
        public String CustomerName { get; set; }
        [DisplayName("Surname")]
        public String CustomerSurname { get; set; }

         
        [Width(250), TurnTerapyListFormatter, CellDecorator(typeof(TurnListDecorator))]
        public String Turns { get; set; }

        public String Email { get; set; }
    }
}