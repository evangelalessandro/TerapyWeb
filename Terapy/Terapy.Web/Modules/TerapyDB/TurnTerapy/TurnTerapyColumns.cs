
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
        [DisplayName("Name")]
        public String TurnName { get; set; }
        [DisplayName("Start Date")]
        public DateTime TurnDataStart { get; set; }
        [DisplayName("End Date")]
        public DateTime TurnEndDate { get; set; }

        [DisplayName("To Generate")]
        public Boolean TurnToGenerate { get; set; }
        
    }
}