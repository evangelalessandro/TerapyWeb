
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[TurnTerapy]"), DisplayName("Turn Terapy"), InstanceName("Turn Terapy"), TwoLevelCached]
    [ReadPermission("Administration:General.TurnTerapy")]
    [ModifyPermission("Administration:General.TurnTerapy")]
    [LookupScript(typeof(Scripts.TurnTerapyLookup))]
    public sealed class TurnTerapyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Turn Id"), Column("TurnID"), Identity]
        public Int32? TurnId
        {
            get { return Fields.TurnId[this]; }
            set { Fields.TurnId[this] = value; }
        }

        [DisplayName("Turn Name"), Size(50), NotNull, QuickSearch]
        public String TurnName
        {
            get { return Fields.TurnName[this]; }
            set { Fields.TurnName[this] = value; }
        }

        [DisplayName("Turn Data Start"), NotNull]
        public DateTime? TurnDataStart
        {
            get { return Fields.TurnDataStart[this]; }
            set { Fields.TurnDataStart[this] = value; }
        }

        [DisplayName("Turn End Date"), NotNull]
        public DateTime? TurnEndDate
        {
            get { return Fields.TurnEndDate[this]; }
            set { Fields.TurnEndDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TurnId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TurnName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TurnTerapyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TurnId;
            public StringField TurnName;
            public DateTimeField TurnDataStart;
            public DateTimeField TurnEndDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.TurnTerapy";
            }
        }
    }
}
