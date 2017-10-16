
namespace Terapy.TerapyDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("TerapyDB.CategoriesTerapy")]
    [BasedOnRow(typeof(Entities.CategoriesTerapyRow))]
    public class CategoriesTerapyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CategoryId { get; set; }
        [EditLink]
        public String CategoryName { get; set; }
    }
}