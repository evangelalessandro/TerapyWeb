

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/UnableTerapyCustomer", typeof(Terapy.TerapyDB.Pages.UnableTerapyCustomerController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.UnableTerapyCustomerRow))]
    public class UnableTerapyCustomerController : Controller
    {
        [Route("TerapyDB/UnableTerapyCustomer")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/UnableTerapyCustomer/UnableTerapyCustomerIndex.cshtml");
        }
    }
}