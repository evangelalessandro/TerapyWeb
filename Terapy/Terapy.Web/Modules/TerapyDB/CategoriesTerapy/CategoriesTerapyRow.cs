
namespace Terapy.TerapyDB.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Terapy"), TableName("[dbo].[CategoriesTerapy]"), DisplayName("Categories Terapy"), InstanceName("Categories Terapy"), TwoLevelCached]
    [ReadPermission("Administration:General.CategoriesTerapy")]
    [ModifyPermission("Administration:General.CategoriesTerapy")]
    public sealed class CategoriesTerapyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Id"), Column("CategoryID"), PrimaryKey]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Category Name"), Size(50), NotNull, QuickSearch]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoriesTerapyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryId;
            public StringField CategoryName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.CategoriesTerapy";
            }
        }
    }
}
