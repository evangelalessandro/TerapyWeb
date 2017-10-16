
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.CategoriesTerapy")]
    [BasedOnRow(typeof(Entities.CategoriesTerapyRow))]
    public class CategoriesTerapyForm
    {
        public String CategoryName { get; set; }
    }
}