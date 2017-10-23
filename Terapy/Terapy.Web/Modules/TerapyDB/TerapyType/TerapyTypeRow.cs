
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

    [ConnectionKey("Terapy"), TableName("[TerapyType]"), DisplayName("Terapy Type"), InstanceName("Terapy Type"), TwoLevelCached]
    [ReadPermission("Administration:General.Terapy")]
    [ModifyPermission("Administration:General.Terapy")]
    [LookupScript(typeof(Scripts.TerapyTypeLookup))]
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

        [DisplayName("Times x 10 day x patient"), NotNull]
        public Int32? TerapyTimeXTurnXPatient
        {
            get { return Fields.TerapyTimeXTurnXPatient[this]; }
            set { Fields.TerapyTimeXTurnXPatient[this] = value; }
        }

        [DisplayName("Terapy X Hour"), NotNull]
        public Int32? TerapyXHour
        {
            get { return Fields.TerapyXHour[this]; }
            set { Fields.TerapyXHour[this] = value; }
        }

        [DisplayName("Terapy only by raccomandation of doctor"), NotNull]
        public Boolean? TerapyRaccomandedByDoctor
        {
            get { return Fields.TerapyRaccomandedByDoctor[this]; }
            set { Fields.TerapyRaccomandedByDoctor[this] = value; }
        }


        [DisplayName("Terapy for same group of sex and age"), NotNull]
        public Boolean? TerapyByAgeAndSex
        {
            get { return Fields.TerapyByAgeAndSex[this]; }
            set { Fields.TerapyByAgeAndSex[this] = value; }
        }

        [DisplayName("Rooms"), QuickFilter]
        [LookupEditor(typeof(RoomsRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(TerapyRoomRow), "TerapyTypeID", "RoomID")]
        public List<Int32> Rooms
        {
            get { return Fields.Rooms[this]; }
            set { Fields.Rooms[this] = value; }
        }

        //[DisplayName("Category"), Column("TerapyTypeCategoryID"), NotNull, , ]

        //    LeftJoin("jTerapyTypeCategory")
        //[DisplayName("Category"), ForeignKey(typeof(CategoriesTerapyRow)), LeftJoin("e"),  TextualField("Category")]
        [DisplayName("Category"), ForeignKey("CategoriesTerapy","CategoryID"), LeftJoin("g")]
        [LookupEditor(typeof(CategoriesTerapyRow),InplaceAdd = false, DialogType = "TerapyDB.CategoriesTerapy"),DefaultValue(0)]
        public Int32? TerapyTypeCategoryId
        {
            get { return Fields.TerapyTypeCategoryId[this]; }
            set { Fields.TerapyTypeCategoryId[this] = value; }
        }

        [DisplayName("TerapyType"), ForeignKey("TerapyType", "TerapyTypeID"), LeftJoin("t")]
        [LookupEditor(typeof(TerapyTypeRow), InplaceAdd = false, DialogType = "TerapyDB.TerapyType"), DefaultValue(null)]
        public Int32? TerapyDefaultIfNotRaccomanded
        {
            get { return Fields.TerapyTypeCategoryId[this]; }
            set { Fields.TerapyTypeCategoryId[this] = value; }
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
            public Int32Field TerapyTimeXTurnXPatient;
            public Int32Field TerapyXHour;
            public Int32Field TerapyDefaultIfNotRaccomanded; 
            public BooleanField TerapyRaccomandedByDoctor;
            public BooleanField TerapyByAgeAndSex;
            public ListField<Int32> Rooms;

            public Int32Field TerapyTypeCategoryId;
          
            public StringField TerapyTypeCategoryCategoryName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "TerapyDB.TerapyType";
            }
        }
    }
}
