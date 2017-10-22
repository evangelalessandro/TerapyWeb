
using Serenity.Extensibility;
using System.ComponentModel;

namespace Terapy.TerapyDB
{
    [NestedPermissionKeys]
    [DisplayName("TerapyDB")]
    public class PermissionKeys
    {
        [DisplayName("Customers")]
        public class Customer
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "TerapyDB:Customer:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "TerapyDB:Customer:Modify";
            public const string View = "TerapyDB:Customer:View";
        }

        [Description("[General]")]
        public const string General = "TerapyDB:General";
    }
}
