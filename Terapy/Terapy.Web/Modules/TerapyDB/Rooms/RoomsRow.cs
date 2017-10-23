
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[Rooms]"), DisplayName("Rooms"), InstanceName("Rooms"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("TerapyDb.Rooms")]
    public sealed class RoomsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Room Id"), Column("RoomID"), Identity,LookupInclude]
        public Int32? RoomId
        {
            get { return Fields.RoomId[this]; }
            set { Fields.RoomId[this] = value; }
        }

        [DisplayName("Room Name"), Size(50), NotNull, QuickSearch, LookupInclude]
        public String RoomName
        {
            get { return Fields.RoomName[this]; }
            set { Fields.RoomName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RoomId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.RoomName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RoomsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RoomId;
            public StringField RoomName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.Rooms";
            }
        }
    }
}
