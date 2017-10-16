
namespace Terapy.TerapyDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("TerapyDB.TurnTerapy")]
    [BasedOnRow(typeof(Entities.TurnTerapyRow))]
    public class TurnTerapyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TurnId { get; set; }
        [EditLink]
        public String TurnName { get; set; }
        public DateTime TurnDataStart { get; set; }
        public DateTime TurnEndDate { get; set; }
    }
}