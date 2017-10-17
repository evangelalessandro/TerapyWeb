

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/MessagesTranslation", typeof(Terapy.TerapyDB.Pages.MessagesTranslationController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.MessagesTranslationRow))]
    public class MessagesTranslationController : Controller
    {
        [Route("TerapyDB/MessagesTranslation")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/MessagesTranslation/MessagesTranslationIndex.cshtml");
        }
    }
}