
namespace Terapy.TerapyDB.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Terapy"), DisplayName("CustomerTurn"), InstanceName("CustomerTurn")]
    [ReadPermission(PermissionKeys.Customer.View)]
    [ModifyPermission(PermissionKeys.Customer.View)]
    public sealed class CustomerTurnRow : Row, IIdRow
    {
        [DisplayName("CustomerTurn ID"), Column("CustomerTurnID"), Identity]
        public Int32? CustomerTurnID
        {
            get { return Fields.CustomerTurnID[this]; }
            set { Fields.CustomerTurnID[this] = value; }
        }

        [DisplayName("Customer Id"), Column("CustomerID"), NotNull]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Turn Id"), Column("TurnID"), NotNull]
        public Int32? TurnID
        {
            get { return Fields.TurnID[this]; }
            set { Fields.TurnID[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerTurnID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerTurnRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerTurnID;
            public Int32Field CustomerId;
            public Int32Field TurnID;

            public RowFields()
                : base("CustomerTurn")
            {
                LocalTextPrefix = "CustomerTurn";
            }
        }
    }
}