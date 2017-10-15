

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/Customers", typeof(Terapy.TerapyDB.Pages.CustomersController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomersRow))]
    public class CustomersController : Controller
    {
        [Route("TerapyDB/Customers")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/Customers/CustomersIndex.cshtml");
        }
    }
}