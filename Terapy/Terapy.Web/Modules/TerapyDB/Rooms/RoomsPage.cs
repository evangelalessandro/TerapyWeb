

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/Rooms", typeof(Terapy.TerapyDB.Pages.RoomsController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.RoomsRow))]
    public class RoomsController : Controller
    {
        [Route("TerapyDB/Rooms")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/Rooms/RoomsIndex.cshtml");
        }
    }
}