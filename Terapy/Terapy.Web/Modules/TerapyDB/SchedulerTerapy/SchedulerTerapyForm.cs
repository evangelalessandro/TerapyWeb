
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.SchedulerTerapy")]
    [BasedOnRow(typeof(Entities.SchedulerTerapyRow))]
    public class SchedulerTerapyForm
    {
        public DateTime SchedulerDateTime { get; set; }
        public Int32 SchedEmploy { get; set; }
        public Int32 SchedCustomerId { get; set; }
        public Int32 SchedTurnId { get; set; }
        public Int32 SchedTerapyTypeId { get; set; }
        public String SchedNote { get; set; }
    }
}