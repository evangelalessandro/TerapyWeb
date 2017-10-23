using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Terapy.TerapyDB
{
    public partial class RoomListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Terapy.TerapyDB.RoomListFormatter";

        public RoomListFormatterAttribute()
            : base(Key)
        {
        }
    }
}
