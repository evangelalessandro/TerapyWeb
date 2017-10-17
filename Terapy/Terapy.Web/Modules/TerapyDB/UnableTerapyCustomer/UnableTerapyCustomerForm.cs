
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.UnableTerapyCustomer")]
    [BasedOnRow(typeof(Entities.UnableTerapyCustomerRow))]
    public class UnableTerapyCustomerForm
    {
        public Int32 CustomerId { get; set; }
    }
}