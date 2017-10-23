
namespace Terapy.TerapyDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("TerapyDB.TerapyType")]
    [BasedOnRow(typeof(Entities.TerapyTypeRow))]
    public class TerapyTypeForm
    {
        public String TerapyTypeName { get; set; } 
        public Int32 TerapyTypeCategoryId { get; set; }
        public Int32 TerapyTimeXTurnXPatient { get; set; }
        public Int32 TerapyXHour { get; set; }
        public List<Int32> Rooms { get; set; }
        public Boolean TerapyRaccomandedByDoctor { get; set; }
        public Boolean TerapyByAgeAndSex { get; set; }
        public Int32 TerapyDefaultIfNotRaccomanded { get; set; }
        
    }
}