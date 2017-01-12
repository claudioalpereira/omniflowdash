using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(OmniflowDash.Startup))]
namespace OmniflowDash
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
