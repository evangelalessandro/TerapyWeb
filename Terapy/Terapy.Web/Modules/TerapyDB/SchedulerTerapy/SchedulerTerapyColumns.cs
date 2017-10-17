
namespace Terapy.TerapyDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("TerapyDB.SchedulerTerapy")]
    [BasedOnRow(typeof(Entities.SchedulerTerapyRow))]
    public class SchedulerTerapyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SchedulerId { get; set; }
        public DateTime SchedulerDateTime { get; set; }
        public Int32 SchedEmploy { get; set; }
        public Int32 SchedCustomerId { get; set; }
        public Int32 SchedTurnId { get; set; }
        public Int32 SchedTerapyTypeId { get; set; }
        [EditLink]
        public String SchedNote { get; set; }
    }
}