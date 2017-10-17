
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
        public Int32 PersonXSession { get; set; }
        public Int32 TerapyTypeCategoryId { get; set; }
        public Int32 ReportOrder { get; set; }
    }
}