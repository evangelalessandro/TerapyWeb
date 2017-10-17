
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[MessagesTranslation]"), DisplayName("Messages Translation"), InstanceName("Messages Translation"), TwoLevelCached]
    [ReadPermission("Administration:General.Translation")]
    [ModifyPermission("Administration:General.Translation")]
    public sealed class MessagesTranslationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Message Id"), Identity]
        public Int32? MessageId
        {
            get { return Fields.MessageId[this]; }
            set { Fields.MessageId[this] = value; }
        }

        [DisplayName("Message En"), Size(500), NotNull, QuickSearch]
        public String MessageEn
        {
            get { return Fields.MessageEn[this]; }
            set { Fields.MessageEn[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MessageId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MessageEn; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MessagesTranslationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MessageId;
            public StringField MessageEn;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.MessagesTranslation";
            }
        }
    }
}
