using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Terapy.TerapyDB
{
    public partial class TerapyListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Terapy.TerapyDB.TerapyListFormatter";

        public TerapyListFormatterAttribute()
            : base(Key)
        {
        }
    }
}
