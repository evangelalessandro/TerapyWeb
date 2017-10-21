
namespace Terapy.TerapyDB.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("TerapyDB.TurnTerapy")]
    public class TurnTerapyLookup : RowLookupScript<TurnTerapyRow>
    {
        public TurnTerapyLookup()
        {
            IdField = TurnTerapyRow.Fields.TurnId.PropertyName;
            TextField = TurnTerapyRow.Fields.TurnName.PropertyName;
        }
    }
}