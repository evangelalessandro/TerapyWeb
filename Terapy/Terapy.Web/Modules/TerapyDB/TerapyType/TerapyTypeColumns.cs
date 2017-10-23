
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

    [ColumnsScript("TerapyDB.TerapyType")]
    [BasedOnRow(typeof(Entities.TerapyTypeRow))]
    public class TerapyTypeColumns
    { 
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TerapyTypeId { get; set; }
        [EditLink]
        public String TerapyTypeName { get; set; } 
        [DisplayName("Category"), Width(100)]
        public Int32 TerapyTypeCategoryCategoryName { get; set; }

        [Width(250), RoomListFormatter, CellDecorator(typeof(RoomListDecorator))]
        public String Rooms { get; set; }

    }
}