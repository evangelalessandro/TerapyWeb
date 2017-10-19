using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Terapy.TerapyDB
{
    public partial class CustomerListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Terapy.TerapyDB.CustomerListFormatter";

        public CustomerListFormatterAttribute()
            : base(Key)
        {
        }
    }
}
