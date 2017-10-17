
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[CustomerTurn]"), DisplayName("Customer Turn"), InstanceName("Customer Turn"), TwoLevelCached]
    [ReadPermission("Administration:General.Customer")]
    [ModifyPermission("Administration:General.Customer")]
    public sealed class CustomerTurnRow : Row, IIdRow
    {
        [DisplayName("Customer"), Column("CustomerID"), PrimaryKey, ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerCustomerName")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Turn"), Column("TurnID"), PrimaryKey, ForeignKey("[dbo].[TurnTerapy]", "TurnID"), LeftJoin("jTurn"), TextualField("TurnTurnName")]
        public Int32? TurnId
        {
            get { return Fields.TurnId[this]; }
            set { Fields.TurnId[this] = value; }
        }

        [DisplayName("Customer Customer Name"), Expression("jCustomer.[CustomerName]")]
        public String CustomerCustomerName
        {
            get { return Fields.CustomerCustomerName[this]; }
            set { Fields.CustomerCustomerName[this] = value; }
        }

        [DisplayName("Customer Customer Surname"), Expression("jCustomer.[CustomerSurname]")]
        public String CustomerCustomerSurname
        {
            get { return Fields.CustomerCustomerSurname[this]; }
            set { Fields.CustomerCustomerSurname[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer City"), Expression("jCustomer.[City]")]
        public String CustomerCity
        {
            get { return Fields.CustomerCity[this]; }
            set { Fields.CustomerCity[this] = value; }
        }

        [DisplayName("Customer Region"), Expression("jCustomer.[Region]")]
        public String CustomerRegion
        {
            get { return Fields.CustomerRegion[this]; }
            set { Fields.CustomerRegion[this] = value; }
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public String CustomerPostalCode
        {
            get { return Fields.CustomerPostalCode[this]; }
            set { Fields.CustomerPostalCode[this] = value; }
        }

        [DisplayName("Customer Country"), Expression("jCustomer.[Country]")]
        public String CustomerCountry
        {
            get { return Fields.CustomerCountry[this]; }
            set { Fields.CustomerCountry[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get { return Fields.CustomerEmail[this]; }
            set { Fields.CustomerEmail[this] = value; }
        }

        [DisplayName("Turn Turn Name"), Expression("jTurn.[TurnName]")]
        public String TurnTurnName
        {
            get { return Fields.TurnTurnName[this]; }
            set { Fields.TurnTurnName[this] = value; }
        }

        [DisplayName("Turn Turn Data Start"), Expression("jTurn.[TurnDataStart]")]
        public DateTime? TurnTurnDataStart
        {
            get { return Fields.TurnTurnDataStart[this]; }
            set { Fields.TurnTurnDataStart[this] = value; }
        }

        [DisplayName("Turn Turn End Date"), Expression("jTurn.[TurnEndDate]")]
        public DateTime? TurnTurnEndDate
        {
            get { return Fields.TurnTurnEndDate[this]; }
            set { Fields.TurnTurnEndDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerTurnRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public Int32Field TurnId;

            public StringField CustomerCustomerName;
            public StringField CustomerCustomerSurname;
            public StringField CustomerAddress;
            public StringField CustomerCity;
            public StringField CustomerRegion;
            public StringField CustomerPostalCode;
            public StringField CustomerCountry;
            public StringField CustomerPhone;
            public StringField CustomerEmail;

            public StringField TurnTurnName;
            public DateTimeField TurnTurnDataStart;
            public DateTimeField TurnTurnEndDate;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.CustomerTurn";
            }
        }
    }
}
