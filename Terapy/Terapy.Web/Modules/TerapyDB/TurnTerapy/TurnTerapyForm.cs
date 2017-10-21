
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.TurnTerapy")]
    [BasedOnRow(typeof(Entities.TurnTerapyRow))]
    public class TurnTerapyForm
    {
        public String TurnName { get; set; }
        public DateTime TurnDataStart { get; set; }
        public DateTime TurnEndDate { get; set; }
    }
}