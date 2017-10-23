
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[TerapyRoom]"), DisplayName("TerapyRoom"), InstanceName("TerapyRoom"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("TerapyDb.TerapyRoom")]
    public sealed class TerapyRoomRow : Row, IIdRow 
    {
        [ LookupInclude]
        public Int32? RoomId
        {
            get { return Fields.RoomId[this]; }
            set { Fields.RoomId[this] = value; }
        }

        [LookupInclude]
        public Int32? TerapyTypeID
        {
            get { return Fields.TerapyTypeID[this]; }
            set { Fields.TerapyTypeID[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RoomId; }
        }
         


        public static readonly RowFields Fields = new RowFields().Init();

        public TerapyRoomRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RoomId;
            public Int32Field TerapyTypeID;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.TerapyRoom";
            }
        }
    }
}
