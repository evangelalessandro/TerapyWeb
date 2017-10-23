
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.Rooms")]
    [BasedOnRow(typeof(Entities.RoomsRow))]
    public class RoomsForm
    {
        public String RoomName { get; set; }
    }
}