
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.TerapyType")]
    [BasedOnRow(typeof(Entities.TerapyTypeRow))]
    public class TerapyTypeForm
    {
        public String TerapyTypeName { get; set; }
        public Int32 PersonXSession { get; set; }
        public Int32 TerapyTypeCategoryId { get; set; }
        public Int32 ReportOrder { get; set; }
    }
}