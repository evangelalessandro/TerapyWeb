

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/CategoriesTerapy", typeof(Terapy.TerapyDB.Pages.CategoriesTerapyController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoriesTerapyRow))]
    public class CategoriesTerapyController : Controller
    {
        [Route("TerapyDB/CategoriesTerapy")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/CategoriesTerapy/CategoriesTerapyIndex.cshtml");
        }
    }
}