
namespace Terapy.TerapyDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("TerapyDB.MessagesTranslation")]
    [BasedOnRow(typeof(Entities.MessagesTranslationRow))]
    public class MessagesTranslationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MessageId { get; set; }
        [EditLink]
        public String MessageEn { get; set; }
    }
}