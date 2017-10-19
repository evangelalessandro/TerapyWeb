
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[TerapyType]"), DisplayName("Terapy Type"), InstanceName("Terapy Type"), TwoLevelCached]
    [ReadPermission("Administration:General.Terapy")]
    [ModifyPermission("Administration:General.Terapy")]
    [LookupScript("TerapyDb.TerapyType")]
    public sealed class TerapyTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Terapy Type Id"), Column("TerapyTypeID"), Identity]
        public Int32? TerapyTypeId
        {
            get { return Fields.TerapyTypeId[this]; }
            set { Fields.TerapyTypeId[this] = value; }
        }

        [DisplayName("Terapy Type Name"), Size(50), NotNull, QuickSearch]
        public String TerapyTypeName
        {
            get { return Fields.TerapyTypeName[this]; }
            set { Fields.TerapyTypeName[this] = value; }
        }

        [DisplayName("Person X Session"), NotNull]
        public Int32? PersonXSession
        {
            get { return Fields.PersonXSession[this]; }
            set { Fields.PersonXSession[this] = value; }
        }

        //[DisplayName("Category"), Column("TerapyTypeCategoryID"), NotNull, , ]

        //    LeftJoin("jTerapyTypeCategory")
        //[DisplayName("Category"), ForeignKey(typeof(CategoriesTerapyRow)), LeftJoin("e"),  TextualField("Category")]
        [DisplayName("Category"), ForeignKey("CategoriesTerapy","CategoryID"), LeftJoin("g")]
        [LookupEditor(typeof(CategoriesTerapyRow),InplaceAdd = true, DialogType = "TerapyDB.CategoriesTerapy"),DefaultValue(0)]
        public Int32? TerapyTypeCategoryId
        {
            get { return Fields.TerapyTypeCategoryId[this]; }
            set { Fields.TerapyTypeCategoryId[this] = value; }
        }

        [DisplayName("Report Order")]
        public Int32? ReportOrder
        {
            get { return Fields.ReportOrder[this]; }
            set { Fields.ReportOrder[this] = value; }
        }

        [DisplayName("Category Name"), Expression("g.[CategoryName]")]
        public String TerapyTypeCategoryCategoryName
        {
            get { return Fields.TerapyTypeCategoryCategoryName[this]; }
            set { Fields.TerapyTypeCategoryCategoryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TerapyTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TerapyTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TerapyTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TerapyTypeId;
            public StringField TerapyTypeName;
            public Int32Field PersonXSession;
            public Int32Field TerapyTypeCategoryId;
            public Int32Field ReportOrder;

            public StringField TerapyTypeCategoryCategoryName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.TerapyType";
            }
        }
    }
}
