

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/TurnTerapy", typeof(Terapy.TerapyDB.Pages.TurnTerapyController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TurnTerapyRow))]
    public class TurnTerapyController : Controller
    {
        [Route("TerapyDB/TurnTerapy")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/TurnTerapy/TurnTerapyIndex.cshtml");
        }
    }
}