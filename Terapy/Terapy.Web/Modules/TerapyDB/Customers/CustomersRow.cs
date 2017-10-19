
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[Customers]"), DisplayName("Customers"), InstanceName("Customers"), TwoLevelCached]
    [ReadPermission("Administration:General.Customers")]
    [ModifyPermission("Administration:General.Customers")]
    [LookupScript(typeof(Scripts.CustomersLookup))]
    public sealed class CustomersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), Column("CustomerID"), Identity]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer Name"), Size(50), NotNull, QuickSearch]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Customer Surname"), Size(50)]
        public String CustomerSurname
        {
            get { return Fields.CustomerSurname[this]; }
            set { Fields.CustomerSurname[this] = value; }
        }
        [DisplayName("Terapy Unable")]
        [LookupEditor(typeof(TerapyTypeRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(UnableTerapyCustomerRow), "CustomerID", "TerapyTypeID")]
        public List<Int32> UnableTerapyList
        {
            get { return Fields.UnableTerapyList[this]; }
            set { Fields.UnableTerapyList[this] = value; }
        }
        [DisplayName("Turn")]
        [LookupEditor(typeof(TurnTerapyRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CustomerTurnRow), "CustomerID", "TurnID")]
        public List<Int32> TurnList
        {
            get { return Fields.TurnList[this]; }
            set { Fields.TurnList[this] = value; }
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(50)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Country"), Size(50)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Phone"), Size(50)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public ListField<Int32> UnableTerapyList;
            public ListField<Int32> TurnList;
            public StringField CustomerName;
            public StringField CustomerSurname;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField Phone;
            public StringField Email;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.Customers";
            }
        }
    }
}
