using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Terapy.TerapyDB
{
    public partial class TurnTerapyListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Terapy.TerapyDB.TurnTerapyListFormatter";

        public TurnTerapyListFormatterAttribute()
            : base(Key)
        {
        }
    }
}
