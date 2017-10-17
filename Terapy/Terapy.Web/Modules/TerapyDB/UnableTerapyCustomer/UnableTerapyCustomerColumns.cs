
namespace Terapy.TerapyDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("TerapyDB.UnableTerapyCustomer")]
    [BasedOnRow(typeof(Entities.UnableTerapyCustomerRow))]
    public class UnableTerapyCustomerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TerapyTypeId { get; set; }
        public Int32 CustomerId { get; set; }
    }
}