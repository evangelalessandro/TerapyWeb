
namespace Terapy.TerapyDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("TerapyDB.TerapyType")]
    [BasedOnRow(typeof(Entities.TerapyTypeRow))]
    public class TerapyTypeColumns
    { 
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TerapyTypeId { get; set; }
        [EditLink]
        public String TerapyTypeName { get; set; }
        [DisplayName("Person for each session"), Width(100)]
        public Int32 PersonXSession { get; set; }
        [DisplayName("Category"), Width(100)]
        public Int32 TerapyTypeCategoryCategoryName { get; set; }
        [DisplayName("Order into report"), Width(150)]
        public Int32 ReportOrder { get; set; }
    }
}