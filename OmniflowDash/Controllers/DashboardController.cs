using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OmniflowDash.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index(string view = "Dashboard8")
        {
            return View(view);
        }
        public ActionResult xpto(string view)
        {
            return View(view);
        }
    }
}