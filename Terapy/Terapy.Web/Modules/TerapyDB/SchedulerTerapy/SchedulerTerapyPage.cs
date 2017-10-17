

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/SchedulerTerapy", typeof(Terapy.TerapyDB.Pages.SchedulerTerapyController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SchedulerTerapyRow))]
    public class SchedulerTerapyController : Controller
    {
        [Route("TerapyDB/SchedulerTerapy")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/SchedulerTerapy/SchedulerTerapyIndex.cshtml");
        }
    }
}