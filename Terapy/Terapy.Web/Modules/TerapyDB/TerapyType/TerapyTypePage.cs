

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/TerapyType", typeof(Terapy.TerapyDB.Pages.TerapyTypeController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TerapyTypeRow))]
    public class TerapyTypeController : Controller
    {
        [Route("TerapyDB/TerapyType")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/TerapyType/TerapyTypeIndex.cshtml");
        }
    }
}