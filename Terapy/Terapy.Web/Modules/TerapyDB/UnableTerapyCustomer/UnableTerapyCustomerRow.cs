
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[UnableTerapyCustomer]"), DisplayName("Unable Terapy Customer"), InstanceName("Unable Terapy Customer"), TwoLevelCached]
    [ReadPermission("Administration:General.UnableCustomer")]
    [ModifyPermission("Administration:General.UnableCustomer")]
    public sealed class UnableTerapyCustomerRow : Row, IIdRow
    {
        [DisplayName("Terapy Type Id"), Column("TerapyTypeID"), PrimaryKey]
        public Int32? TerapyTypeId
        {
            get { return Fields.TerapyTypeId[this]; }
            set { Fields.TerapyTypeId[this] = value; }
        }

        [DisplayName("Customer Id"), Column("CustomerID"), PrimaryKey]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TerapyTypeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UnableTerapyCustomerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TerapyTypeId;
            public Int32Field CustomerId;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.UnableTerapyCustomer";
            }
        }
    }
}
