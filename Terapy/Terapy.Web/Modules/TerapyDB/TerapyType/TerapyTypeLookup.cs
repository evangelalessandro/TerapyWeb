
namespace Terapy.TerapyDB.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("TerapyDB.TerapyType")]
    public class TerapyTypeLookup : RowLookupScript<TerapyTypeRow>
    {
        public TerapyTypeLookup()
        {
            IdField = TerapyTypeRow.Fields.TerapyTypeId.PropertyName;
            TextField = TerapyTypeRow.Fields.TerapyTypeName.PropertyName;
        }
    }
}