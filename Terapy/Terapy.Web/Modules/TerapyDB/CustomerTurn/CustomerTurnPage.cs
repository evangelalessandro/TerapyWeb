

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/CustomerTurn", typeof(Terapy.TerapyDB.Pages.CustomerTurnController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomerTurnRow))]
    public class CustomerTurnController : Controller
    {
        [Route("TerapyDB/CustomerTurn")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/CustomerTurn/CustomerTurnIndex.cshtml");
        }
    }
}