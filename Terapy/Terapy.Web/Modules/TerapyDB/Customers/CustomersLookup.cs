
namespace Terapy.TerapyDB.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("TerapyDB.Customers")]
    public class CustomersLookup : RowLookupScript<CustomersRow>
    {
        public CustomersLookup()
        {
            IdField = CustomersRow.Fields.CustomerId.PropertyName;
            TextField = CustomersRow.Fields.CustomerName.PropertyName;
        }
    }
}