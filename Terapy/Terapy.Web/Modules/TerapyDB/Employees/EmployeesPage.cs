

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "TerapyDB/Employees", typeof(Terapy.TerapyDB.Pages.EmployeesController))]

namespace Terapy.TerapyDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.EmployeesRow))]
    public class EmployeesController : Controller
    {
        [Route("TerapyDB/Employees")]
        public ActionResult Index()
        {
            return View("~/Modules/TerapyDB/Employees/EmployeesIndex.cshtml");
        }
    }
}