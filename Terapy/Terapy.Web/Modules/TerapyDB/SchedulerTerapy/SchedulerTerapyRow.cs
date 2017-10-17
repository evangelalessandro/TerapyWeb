
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[SchedulerTerapy]"), DisplayName("Scheduler Terapy"), InstanceName("Scheduler Terapy"), TwoLevelCached]
    [ReadPermission("Administration:General.Scheduler")]
    [ModifyPermission("Administration:General.Scheduler")]
    public sealed class SchedulerTerapyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Scheduler Id"), Column("SchedulerID"), Identity]
        public Int32? SchedulerId
        {
            get { return Fields.SchedulerId[this]; }
            set { Fields.SchedulerId[this] = value; }
        }

        [DisplayName("Scheduler Date Time"), NotNull]
        public DateTime? SchedulerDateTime
        {
            get { return Fields.SchedulerDateTime[this]; }
            set { Fields.SchedulerDateTime[this] = value; }
        }

        [DisplayName("Sched Employ"), NotNull, ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin("jSchedEmploy"), TextualField("SchedEmployLastName")]
        public Int32? SchedEmploy
        {
            get { return Fields.SchedEmploy[this]; }
            set { Fields.SchedEmploy[this] = value; }
        }

        [DisplayName("Sched Customer"), Column("SchedCustomerID"), NotNull, ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jSchedCustomer"), TextualField("SchedCustomerCustomerName")]
        public Int32? SchedCustomerId
        {
            get { return Fields.SchedCustomerId[this]; }
            set { Fields.SchedCustomerId[this] = value; }
        }

        [DisplayName("Sched Turn"), Column("SchedTurnID"), NotNull, ForeignKey("[dbo].[TurnTerapy]", "TurnID"), LeftJoin("jSchedTurn"), TextualField("SchedTurnTurnName")]
        public Int32? SchedTurnId
        {
            get { return Fields.SchedTurnId[this]; }
            set { Fields.SchedTurnId[this] = value; }
        }

        [DisplayName("Sched Terapy Type"), Column("SchedTerapyTypeID"), NotNull, ForeignKey("[dbo].[TerapyType]", "TerapyTypeID"), LeftJoin("jSchedTerapyType"), TextualField("SchedTerapyTypeTerapyTypeName")]
        public Int32? SchedTerapyTypeId
        {
            get { return Fields.SchedTerapyTypeId[this]; }
            set { Fields.SchedTerapyTypeId[this] = value; }
        }

        [DisplayName("Sched Note"), Size(500), QuickSearch]
        public String SchedNote
        {
            get { return Fields.SchedNote[this]; }
            set { Fields.SchedNote[this] = value; }
        }

        [DisplayName("Sched Employ Last Name"), Expression("jSchedEmploy.[LastName]")]
        public String SchedEmployLastName
        {
            get { return Fields.SchedEmployLastName[this]; }
            set { Fields.SchedEmployLastName[this] = value; }
        }

        [DisplayName("Sched Employ First Name"), Expression("jSchedEmploy.[FirstName]")]
        public String SchedEmployFirstName
        {
            get { return Fields.SchedEmployFirstName[this]; }
            set { Fields.SchedEmployFirstName[this] = value; }
        }

        [DisplayName("Sched Employ Birth Date"), Expression("jSchedEmploy.[BirthDate]")]
        public DateTime? SchedEmployBirthDate
        {
            get { return Fields.SchedEmployBirthDate[this]; }
            set { Fields.SchedEmployBirthDate[this] = value; }
        }

        [DisplayName("Sched Employ Address"), Expression("jSchedEmploy.[Address]")]
        public String SchedEmployAddress
        {
            get { return Fields.SchedEmployAddress[this]; }
            set { Fields.SchedEmployAddress[this] = value; }
        }

        [DisplayName("Sched Employ City"), Expression("jSchedEmploy.[City]")]
        public String SchedEmployCity
        {
            get { return Fields.SchedEmployCity[this]; }
            set { Fields.SchedEmployCity[this] = value; }
        }

        [DisplayName("Sched Employ Region"), Expression("jSchedEmploy.[Region]")]
        public String SchedEmployRegion
        {
            get { return Fields.SchedEmployRegion[this]; }
            set { Fields.SchedEmployRegion[this] = value; }
        }

        [DisplayName("Sched Employ Postal Code"), Expression("jSchedEmploy.[PostalCode]")]
        public String SchedEmployPostalCode
        {
            get { return Fields.SchedEmployPostalCode[this]; }
            set { Fields.SchedEmployPostalCode[this] = value; }
        }

        [DisplayName("Sched Employ Country"), Expression("jSchedEmploy.[Country]")]
        public String SchedEmployCountry
        {
            get { return Fields.SchedEmployCountry[this]; }
            set { Fields.SchedEmployCountry[this] = value; }
        }

        [DisplayName("Sched Employ Phone"), Expression("jSchedEmploy.[Phone]")]
        public String SchedEmployPhone
        {
            get { return Fields.SchedEmployPhone[this]; }
            set { Fields.SchedEmployPhone[this] = value; }
        }

        [DisplayName("Sched Employ Photo"), Expression("jSchedEmploy.[Photo]")]
        public Stream SchedEmployPhoto
        {
            get { return Fields.SchedEmployPhoto[this]; }
            set { Fields.SchedEmployPhoto[this] = value; }
        }

        [DisplayName("Sched Employ Notes"), Expression("jSchedEmploy.[Notes]")]
        public String SchedEmployNotes
        {
            get { return Fields.SchedEmployNotes[this]; }
            set { Fields.SchedEmployNotes[this] = value; }
        }

        [DisplayName("Sched Customer Customer Name"), Expression("jSchedCustomer.[CustomerName]")]
        public String SchedCustomerCustomerName
        {
            get { return Fields.SchedCustomerCustomerName[this]; }
            set { Fields.SchedCustomerCustomerName[this] = value; }
        }

        [DisplayName("Sched Customer Customer Surname"), Expression("jSchedCustomer.[CustomerSurname]")]
        public String SchedCustomerCustomerSurname
        {
            get { return Fields.SchedCustomerCustomerSurname[this]; }
            set { Fields.SchedCustomerCustomerSurname[this] = value; }
        }

        [DisplayName("Sched Customer Address"), Expression("jSchedCustomer.[Address]")]
        public String SchedCustomerAddress
        {
            get { return Fields.SchedCustomerAddress[this]; }
            set { Fields.SchedCustomerAddress[this] = value; }
        }

        [DisplayName("Sched Customer City"), Expression("jSchedCustomer.[City]")]
        public String SchedCustomerCity
        {
            get { return Fields.SchedCustomerCity[this]; }
            set { Fields.SchedCustomerCity[this] = value; }
        }

        [DisplayName("Sched Customer Region"), Expression("jSchedCustomer.[Region]")]
        public String SchedCustomerRegion
        {
            get { return Fields.SchedCustomerRegion[this]; }
            set { Fields.SchedCustomerRegion[this] = value; }
        }

        [DisplayName("Sched Customer Postal Code"), Expression("jSchedCustomer.[PostalCode]")]
        public String SchedCustomerPostalCode
        {
            get { return Fields.SchedCustomerPostalCode[this]; }
            set { Fields.SchedCustomerPostalCode[this] = value; }
        }

        [DisplayName("Sched Customer Country"), Expression("jSchedCustomer.[Country]")]
        public String SchedCustomerCountry
        {
            get { return Fields.SchedCustomerCountry[this]; }
            set { Fields.SchedCustomerCountry[this] = value; }
        }

        [DisplayName("Sched Customer Phone"), Expression("jSchedCustomer.[Phone]")]
        public String SchedCustomerPhone
        {
            get { return Fields.SchedCustomerPhone[this]; }
            set { Fields.SchedCustomerPhone[this] = value; }
        }

        [DisplayName("Sched Customer Email"), Expression("jSchedCustomer.[Email]")]
        public String SchedCustomerEmail
        {
            get { return Fields.SchedCustomerEmail[this]; }
            set { Fields.SchedCustomerEmail[this] = value; }
        }

        [DisplayName("Sched Turn Turn Name"), Expression("jSchedTurn.[TurnName]")]
        public String SchedTurnTurnName
        {
            get { return Fields.SchedTurnTurnName[this]; }
            set { Fields.SchedTurnTurnName[this] = value; }
        }

        [DisplayName("Sched Turn Turn Data Start"), Expression("jSchedTurn.[TurnDataStart]")]
        public DateTime? SchedTurnTurnDataStart
        {
            get { return Fields.SchedTurnTurnDataStart[this]; }
            set { Fields.SchedTurnTurnDataStart[this] = value; }
        }

        [DisplayName("Sched Turn Turn End Date"), Expression("jSchedTurn.[TurnEndDate]")]
        public DateTime? SchedTurnTurnEndDate
        {
            get { return Fields.SchedTurnTurnEndDate[this]; }
            set { Fields.SchedTurnTurnEndDate[this] = value; }
        }

        [DisplayName("Sched Terapy Type Terapy Type Name"), Expression("jSchedTerapyType.[TerapyTypeName]")]
        public String SchedTerapyTypeTerapyTypeName
        {
            get { return Fields.SchedTerapyTypeTerapyTypeName[this]; }
            set { Fields.SchedTerapyTypeTerapyTypeName[this] = value; }
        }

        [DisplayName("Sched Terapy Type Person X Session"), Expression("jSchedTerapyType.[PersonXSession]")]
        public Int32? SchedTerapyTypePersonXSession
        {
            get { return Fields.SchedTerapyTypePersonXSession[this]; }
            set { Fields.SchedTerapyTypePersonXSession[this] = value; }
        }

        [DisplayName("Sched Terapy Type Terapy Type Category Id"), Expression("jSchedTerapyType.[TerapyTypeCategoryID]")]
        public Int32? SchedTerapyTypeTerapyTypeCategoryId
        {
            get { return Fields.SchedTerapyTypeTerapyTypeCategoryId[this]; }
            set { Fields.SchedTerapyTypeTerapyTypeCategoryId[this] = value; }
        }

        [DisplayName("Sched Terapy Type Report Order"), Expression("jSchedTerapyType.[ReportOrder]")]
        public Int32? SchedTerapyTypeReportOrder
        {
            get { return Fields.SchedTerapyTypeReportOrder[this]; }
            set { Fields.SchedTerapyTypeReportOrder[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SchedulerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SchedNote; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SchedulerTerapyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SchedulerId;
            public DateTimeField SchedulerDateTime;
            public Int32Field SchedEmploy;
            public Int32Field SchedCustomerId;
            public Int32Field SchedTurnId;
            public Int32Field SchedTerapyTypeId;
            public StringField SchedNote;

            public StringField SchedEmployLastName;
            public StringField SchedEmployFirstName;
            public DateTimeField SchedEmployBirthDate;
            public StringField SchedEmployAddress;
            public StringField SchedEmployCity;
            public StringField SchedEmployRegion;
            public StringField SchedEmployPostalCode;
            public StringField SchedEmployCountry;
            public StringField SchedEmployPhone;
            public StreamField SchedEmployPhoto;
            public StringField SchedEmployNotes;

            public StringField SchedCustomerCustomerName;
            public StringField SchedCustomerCustomerSurname;
            public StringField SchedCustomerAddress;
            public StringField SchedCustomerCity;
            public StringField SchedCustomerRegion;
            public StringField SchedCustomerPostalCode;
            public StringField SchedCustomerCountry;
            public StringField SchedCustomerPhone;
            public StringField SchedCustomerEmail;

            public StringField SchedTurnTurnName;
            public DateTimeField SchedTurnTurnDataStart;
            public DateTimeField SchedTurnTurnEndDate;

            public StringField SchedTerapyTypeTerapyTypeName;
            public Int32Field SchedTerapyTypePersonXSession;
            public Int32Field SchedTerapyTypeTerapyTypeCategoryId;
            public Int32Field SchedTerapyTypeReportOrder;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.SchedulerTerapy";
            }
        }
    }
}
