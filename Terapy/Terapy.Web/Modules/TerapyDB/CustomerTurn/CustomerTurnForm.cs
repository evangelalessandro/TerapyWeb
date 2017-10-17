
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.CustomerTurn")]
    [BasedOnRow(typeof(Entities.CustomerTurnRow))]
    public class CustomerTurnForm
    {
        public Int32 TurnId { get; set; }
    }
}