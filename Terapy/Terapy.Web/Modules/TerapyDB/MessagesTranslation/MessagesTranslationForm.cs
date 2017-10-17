
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.MessagesTranslation")]
    [BasedOnRow(typeof(Entities.MessagesTranslationRow))]
    public class MessagesTranslationForm
    {
        public String MessageEn { get; set; }
    }
}