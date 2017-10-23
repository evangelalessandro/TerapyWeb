
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

    [ColumnsScript("TerapyDB.Rooms")]
    [BasedOnRow(typeof(Entities.RoomsRow))]
    public class RoomsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RoomId { get; set; }
        [EditLink]
        public String RoomName { get; set; }

        [Width(350), TerapyListFormatter, CellDecorator(typeof(TerapyListDecorator))]
        public String Terapies { get; set; }

    }
}